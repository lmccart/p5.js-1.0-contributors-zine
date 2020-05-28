import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Skew from './Skew.js';

class IndexEntry extends Component {	 
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    if (this.imgRef) {
      if (this.indexRef.clientHeight > 96) {
        this.imgRef.src = './assets/curve-first-quad.svg';
        this.imgRef.style.height = '5.33em';
      }
      else if (this.indexRef.clientHeight > 64) {
        this.imgRef.src = './assets/curve-first-triple.svg';
        this.imgRef.style.height = '4em';
      }
      else if (this.indexRef.clientHeight > 32) {
        this.imgRef.src = './assets/curve-first-double.svg';
        this.imgRef.style.height = '2.67em';
      }
    }
  }

	render() {
    return (
    <li key={this.props.index} className="contentLabel">
    <Row>
      <Col sm={12} className="indexEntry">
        <div className="indexCurveHolder">
        {this.props.last === "false" ?
          <span className="curveLabel firstCurve"><img src='./assets/curve-first.svg' alt='' ref={imgRef => { this.imgRef = imgRef }}/></span>
          : ""}
        </div>
        <span className="indexLabel" ref={indexRef => { this.indexRef = indexRef }}>
          <a href={this.props.prefix+this.props.index}>
            {this.props.title ? <Skew hover="true" text={this.props.title}/> : ( "" )}
            {this.props.title ? <br/> : ( "" )}
            <Skew hover="true" text={this.props.short}/>
          </a>
          </span>
      </Col>
    </Row>
    </li>
    );
  }
}

export default IndexEntry;