import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';
import Linkify from 'react-linkify';

class DesktopRead extends Component {	 
  constructor() {
    super()
    this.state = {
      data: []
    }
  }

  componentDidMount() {
    let component = this;
    $.ajax({
        url: 'data.json',
        type: 'GET',
        dataType: 'JSON',
        success: function (data) {
            component.setState({
                data: data
            });
        }
    });
  }

	render() {
    const Pad = (data) => {
      let n = data.n + '';
      return n.length >= 3 ? n : new Array(3 - n.length + 1).join('0') + n;
    };
    const { data } = this.state
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
          <h2 id='reflectionsList'>Contributor Reflections</h2>
          <ul aria-labelledby='reflectionsList'>
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 id='contributorsEntries'className='sr-only'>Contributors Entries</h2>
          <ul aria-labelledby='contributorsEntries'>
          {
            data.map((obj, index) => {
              return (
                <li key={index} id={"contributor-"+index} className="contributorEntry">
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel">FIG. <Pad n={index}/></span><span className="curve">&lt;</span></Col>
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
          }
          </ul>

          <h2 id='reflectionsEntries'>Contributor Reflections</h2>
          <ul aria-labelledby='reflectionsEntries'>
          </ul>
        </Col>
      </Container>

    );
  }
}

export default DesktopRead;