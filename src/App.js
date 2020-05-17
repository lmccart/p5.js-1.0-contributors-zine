// https://docs.google.com/spreadsheets/d/e/2PACX-1vTxWyf3LEdE3qsTsyZkOO5ZlvPgbm8gYgULcP4HSo5DHD7SZr9-S7wAB9DrkPBzyB1dG_IcjZpo1b93/pubhtml?gid=581056553&single=true

import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import $ from 'jquery';
import Linkify from 'react-linkify';

import logo from './logo.svg';
import './App.css';

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
    return (
      <Container fluid className="h-100">
        <Col xs={12} sm={4} className="headingBox"><h1>p5.js 1.0<br/>Contributors Zine</h1></Col>
        <Col xs={12} sm={4} className="index">
          <h2>Contributors</h2>
          {
              data.map((obj, index) => {
                return (
                  <div key={index} className="contributorLabel">
                    <a href={"#contributor-"+index}>
                    <p>{obj.Credit}</p></a>
                  </div>
                )
              })
            }
        </Col>
        <Col sx={12} sm={8} className="content">
        {
            data.map((obj, index) => {
              return (
                <div key={index} id={"contributor-"+index} className="contributorEntry">
                  <Row>
                    <Col sm={3}><span className="figLabel">FIG. {index}</span><span className="curve">&lt;</span></Col>
                    <Col sm={9}><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key}>
                      {decoratedText}
                    </a>
                  )}>{obj.Credit}</Linkify></Col>
                  </Row>

                  <Col sm={{ size: 6, offset: 3 }}><img src={obj.Image} alt={obj.Alt} className="contributorImg"/></Col>
                  <Col sm={12}><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                    <a target="blank" href={decoratedHref} key={key}>
                      {decoratedText}
                    </a>
                  )}>{obj.Contribution}</Linkify></Col>

                  <Row>
                    <Col sm={3}><span className="curve">&lt;</span></Col>
                    <Col sm={9}>
                      <div className="altLabel">ALT.TEXT</div>
                      <div>{obj.Alt}</div>
                    </Col>
                  </Row>
                </div>
              )
            })
          }
        </Col>

        <Col sx={12} sm={8} className="menu">
          <nav>
            <span>Read</span>
            <span>Purchase</span>
            <span>About</span>
            <span>Contact</span>
            <span>*</span>
          </nav>
        </Col>
      </Container>
    );
  }
}

export default App;