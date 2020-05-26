import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import IndexEntry from './IndexEntry.js';
import ContentEntry from './ContributorEntry';
import ReflectionEntry from './ReflectionEntry';

class DesktopRead extends Component {	 
  constructor() {
    super()
    this.state = {
      data: [],
      reflections: [],
      lastShort: ''
    }
  }

  componentDidMount() {
    let component = this;
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
      component.setState({ data: result })

      fetch('./reflections.json')
      .then(res => res.json())
      .then(result => {
        component.setState({ reflections: result })
        this.forceUpdate();
      });
    });
  }

  shouldComponentUpdate() {
    return false;
  }

	render() {
    console.log('render deskto')
    const { data, reflections } = this.state
		return (
      <Container id="DesktopRead">
        <Col xs={12} sm={4} className="index">
          <h2 id='contributorsList'>Contributors</h2>
          <ul aria-labelledby='contributorsList'>
          {
            data.map((obj, index) => {
              if (obj.Short !== this.lastShort) { 
                this.lastShort = obj.Short;
                return <IndexEntry key={index} index={index} prefix='#contributor-' short={obj.Short} last={index === data.length-1 ? "true" : "false"}/>;
              } return null;
            })
          }
          </ul>
          <h2 id='reflectionsList'>Contributor<br/>Reflections</h2>
          <ul aria-labelledby='reflectionsList' id='reflectionsUl'>
          {
            reflections.map((obj, index) => {
              return <IndexEntry key={index} index={index} prefix='#reflection-' short={obj.Author} title={obj.Title} last={index === reflections.length-1 ? "true" : "false"}/>
            })
          }
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 id='contributorsEntries'className='sr-only'>Contributors Entries</h2>
          <ul aria-labelledby='contributorsEntries'>
          {
            data.map((obj, index) => {
              return <ContentEntry key={index} index={index} obj={obj}/>
            })
          }
          </ul>
          <hr/>

          <h2 id='reflectionsEntries'>Contributor Reflections</h2>
          <ul aria-labelledby='reflectionsEntries'>
          {
            reflections.map((obj, index) => {
              return <ReflectionEntry key={index} index={index} obj={obj}/>
            })
          }
          </ul>
        </Col>
      </Container>

    );
  }
}

export default DesktopRead;