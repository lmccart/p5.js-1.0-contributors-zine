import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class IndexEntry extends Component {	 
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {
    if (this.indexRef.clientHeight > 64) {
      this.curveRef.src = './assets/curve-first-triple.svg';
    }
    else if (this.indexRef.clientHeight > 32) {
      this.curveRef.src = './assets/curve-first-double.svg';
    }

  }

	render() {
    return (
    <li key={this.props.index} className="contentLabel">
    <Row>
      <Col sm={12} className="indexEntry">
        <span className={`indexCurveLabel ${this.props.index === 0 ? "firstCurve" : ""}`}><img src='./assets/curve-first.svg' alt='' ref={curveRef => { this.curveRef = curveRef }}/></span>
        <span className="indexLabel" ref={indexRef => { this.indexRef = indexRef }}>
          <a href={this.props.prefix+this.props.index}>
            {this.props.title ? (this.props.title) : ( "" )}
            {this.props.title ? <br/> : ( "" )}
            {this.props.short}
          </a>
          </span>
      </Col>
    </Row>
    </li>
    );
  }
}

export default IndexEntry;