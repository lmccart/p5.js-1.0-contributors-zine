import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { setConfiguration } from 'react-grid-system';
import $ from 'jquery';
import Linkify from 'react-linkify';
import './App.css';

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 12, gutterWidth: 50 });

class App extends Component {
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
    const { data } = this.state

    const Pad = (data) => {
      let n = data.n + '';
      return n.length >= 3 ? n : new Array(3 - n.length + 1).join('0') + n;
    }
    
    return (
      <Container fluid className="h-100">
      <Row id='grid'>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
      </Row>
      
      <a id='skipToContent' className='sr-only' href='/#contributor-0'>Skip To Content</a>
        <Col xs={12} sm={4}><div className="headingBox"><h1>p5.js 1.0<br/>Contributors Zine</h1></div></Col>
        <Col xs={12} sm={4} className="index">
          <h2 aria-labelledby='contributorsList'>Contributors</h2>
          <ul id='contributorsList'>
          {
            data.map((obj, index) => {
              return (
                <li key={index} className="contributorLabel">
                  <a href={"#contributor-"+index}>
                  <p>{obj.Credit}</p></a>
                </li>
              )
            })
          }
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 aria-labelledby='contributorsEntries' className='sr-only'>Contributors Entries</h2>
          <ul id='contributorsEntries'>
          {
            data.map((obj, index) => {
              return (
                <li key={index} id={"contributor-"+index} className="contributorEntry">
                  <Row sm={12}>
                    <Col sm={3}><span className="figLabel">FIG. <Pad n={index}/></span><span className="curve">&lt;</span></Col>
                    <Col sm={9}><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key}>
                      {decoratedText}
                    </a>
                  )}>{obj.Credit}</Linkify></Col>
                  </Row>
                  <Row>
                    <Col sm={{ size: 6, offset: 3 }}><img src={obj.Image} alt={obj.Alt} className="contributorImg"/></Col>
                    <Col sm={12}>
                      <div><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key}>{decoratedText}</a>
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
        </Col>

        <Col sx={12} sm={8} className="menu">
          <nav>
            <h2 id='mainNav' className="sr-only">Main Nav</h2>
            <ul aria-labelledby='mainNav'>
              <li className='current'>Read</li>
              <li><a href="http://processingfoundation.press/" target="_blank">Purchase</a></li>
              <li><a href="#about" target="_blank">About</a></li>
              <li><a href="mailto:hello@p5js.org" target="_blank">Contact</a></li>
              <li className="clickable">*</li>
            </ul>
          </nav>
        </Col>
      </Container>
    );
  }
}

export default App;