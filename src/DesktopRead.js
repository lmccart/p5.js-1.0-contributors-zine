import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Linkify from 'react-linkify';

class DesktopRead extends Component {	 
  constructor() {
    super()
    this.state = {
      data: [],
      reflections: []
    }
  }

  componentDidMount() {
    let component = this;
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
      component.setState({ data: result })
    });

    fetch('./reflections.json')
    .then(res => res.json())
    .then(result => {
      component.setState({ reflections: result })
    });
  }

	render() {
    const Pad = (data) => {
      let n = data.n + '';
      return n.length >= data.d ? n : new Array(data.d - n.length + 1).join('0') + n;
    };
    const { data, reflections } = this.state
		return (
      <Container id="DesktopRead">
        <Col xs={12} sm={4} className="index">
          <h2 id='contributorsList'>Contributors</h2>
          <ul aria-labelledby='contributorsList'>
          {
            data.map((obj, index) => {
              return (
                <li key={index} className="contributorLabel">
                  <Row>
                    <Col sm={3}>&lt;</Col>
                    <Col sm={9} className="noPadLeft"><a href={"#contributor-"+index}>{obj.Short}</a></Col>
                  </Row>
                </li>
              )
            })
          }
          </ul>
          <h2 id='reflectionsList'>Contributor<br/>Reflections</h2>
          <ul aria-labelledby='reflectionsList'>
          {
            reflections.map((obj, index) => {
              return (
                <li key={index} className="authorLabel">
                  <Row>
                    <Col sm={3}>&lt;</Col>
                    <Col sm={9} className="noPadLeft"><a href={"#reflection-"+index}>{obj.Title}<br/>{obj.Author}</a></Col>
                  </Row>
                </li>
              )
            })
          }
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 id='contributorsEntries'className='sr-only'>Contributors Entries</h2>
          <ul aria-labelledby='contributorsEntries'>
          {/* {
            data.map((obj, index) => {
              return (
                <li key={index} id={"contributor-"+index} className="contributorEntry">
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel">FIG. <Pad n={index+1} d='2'/></span><span className="curve">&lt;</span></Col>
                    <Col sm={9} className="contributorCredit"><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key} className='link'>
                      {decoratedText}
                    </a>
                  )}>{obj.Credit.split('\n').map(function(item, key) {
                    return (<span key={key}>{item}<br/></span>)
                  })}</Linkify></Col>
                  </Row>
                  <Row>
                    <Col sm={{ size: 6, offset: 3 }}><img src={obj.Image} alt={obj.Alt} className="contributorImg"/></Col>
                    <Col sm={12}>
                      <div ><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                      )}>{obj.Contribution}</Linkify></div>
                    </Col>
                  </Row>
                  <Row className="alt">
                    <Col sm={3}><span className="curve">&lt;</span></Col>
                    <Col sm={9}>
                      <div className="altLabel">ALT.TEXT</div>
                      <div>{obj.Alt}</div>
                    </Col>
                  </Row>
                </li>
              )
            })
          } */}
          </ul>

          <h2 id='reflectionsEntries'>Contributor Reflections</h2>
          <ul aria-labelledby='reflectionsEntries'>
          {
            reflections.map((obj, index) => {
              return (
                <li key={index} id={"reflection-"+index} className="contributorEntry">
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel">TEXT <Pad n={index+1} d='2' /></span><span className="curve">&lt;</span></Col>
                    <Col sm={9} className="contributorCredit">Reflection</Col>
                  </Row>
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel"></span><span className="curve">&lt;</span></Col>
                    <Col sm={9} className="contributorCredit">{obj.Title}</Col>
                  </Row>
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel"></span><span className="curve">&lt;</span></Col>
                    <Col sm={9} className="contributorCredit">{obj.Author}</Col>
                  </Row>
                  <Row>
                    <Col sm={{ size: 6, offset: 3 }}><img src={'./assets/Illustrations/'+obj.Illustration} alt={obj.Alt} className="contributorImg"/></Col>
                    <Col sm={12}>
                      <div><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                      )}>{obj.Text.split('\n').map(function(item, key) {
                    return (<span key={key}>{item}<br/></span>)
                  })}</Linkify></div>
                    </Col>
                  </Row>

                  <Row className="alt">
                    <Col sm={3}><span className="curve">&lt;</span></Col>
                    <Col sm={9}>
                      <div className="authorHeading">{obj.Author}</div>
                      <div><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                      )}>{obj.Bio.split('\n').map(function(item, key) {
                    return (<span key={key}>{item}<br/></span>)
                  })}</Linkify></div>
                    </Col>
                  </Row>
                </li>
              )
            })
          }
          </ul>
        </Col>
      </Container>

    );
  }
}

export default DesktopRead;