import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import IndexEntry from './IndexEntry.js';
import ContributorEntry from './ContributorEntry';
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
    fetch('./Assets/data.json', {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }
    })
    .then(res => res.json())
    .then(result => {
      component.setState({ data: result })

      fetch('./Assets/reflections.json', {
        headers : { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
         }
      })
      .then(res => res.json())
      .then(result => {
        component.setState({ reflections: result })
        document.getElementById('hiddenLoad').style.display = 'flex';
        this.forceUpdate();
        console.log('hash', window.location.hash)
        const hash = window.location.hash;
        window.location.hash = '#';
        window.location.hash = hash;
      });
    });

  }

  shouldComponentUpdate() {
    return false;
  }

	render() {
    const { data, reflections } = this.state
		return (
      <main id="main">
      <Container className="d-none d-sm-block">
        <h1 id='read-heading' className='sr-only'>Read</h1>
        <div id="hiddenLoad" role="navigation" aria-label="secondary">
        <Col xs={12} sm={4} className="index">
          <h2 id='contributorsList'>Contributors</h2>
          <ul aria-labelledby='contributorsList' role="list">
          {
            data.map((obj, index) => {
              if (obj.Short !== this.lastShort) { 
                this.lastShort = obj.Short;
                let type = index;
                if (index === data.length - 2) type = -1;
                if (index === data.length - 1) type = -2;
                return <IndexEntry key={index} index={index} prefix='#contributor-' short={obj.Short} type={type} anchor={obj.Short.replace(/ /g, '-').toLowerCase()}/>;
              } return null;
            })
          }
          </ul>
          <h2 id='reflectionsList'>Contributor<br aria-hidden='true' />Reflections</h2>
          <ul aria-labelledby='reflectionsList' id='reflectionsUl' role="list">
          {
            reflections.map((obj, index) => {
              let type = index;
              if (index === reflections.length - 2) type = -1;
              if (index === reflections.length - 1) type = -2;
              return <IndexEntry key={index} index={index} prefix='#reflection-' short={obj.Author} title={obj.Title} type={type} anchor={obj.Author.replace(/ /g, '-').toLowerCase()}/>
            })
          }
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 id='contributorsEntries'className='sr-only'>Contributors Entries</h2>
          {
            data.map((obj, index) => {
              return <ContributorEntry key={index} index={index} obj={obj}/>
            })
          }

          <h2 id='reflectionsEntries'>Contributor Reflections</h2>
          {
            reflections.map((obj, index) => {
              return <ReflectionEntry key={index} index={index} obj={obj}/>
            })
          }
        </Col>
        </div>
      </Container>
      </main>

    );
  }
}

export default DesktopRead;