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
      let singleHeight = this.imgRef.clientHeight;
      if (!singleHeight) return;
      let n = this.indexRef.clientHeight / singleHeight;
      if (n > 1) {
        this.imgRef.style.height = (1.33 * n) + 'em';
        this.imgRef.style.width = '1.84em';
        // this.imgRef.style.marginTop = (0.6-0.05*n) + 'em';

      }
    }
  }

	render() {
    return (
    <li key={this.props.index} className="contentLabel" role="listitem">
    <Row>
      <Col sm={12} className="indexEntry">
        <div className="indexCurveHolder">
        {this.props.type === 0 || this.props.type === -1 ?
          <span className="curveLabel firstCurve">
            <svg focusable="false" aria-hidden="true"  role="img" ref={imgRef => { this.imgRef = imgRef }} preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94">
              <path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2" d="M25,0.47c-13.56,0-24.55,3.81-24.55,8.51s10.99,8.5,24.55,8.5"/>
            </svg>
          </span>
          : ""}
        {this.props.type === -2 ?
          <span className="curveLabel firstCurve">
            <svg focusable="false" aria-hidden="true"  role="img" ref={imgRef => { this.imgRef = imgRef }} preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94"></svg>
          </span>
          : ""}
        {this.props.type > 0 ?
          <span className="curveLabel firstCurve">
            <svg focusable="false" aria-hidden="true"  role="img" ref={imgRef => { this.imgRef = imgRef }} preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94">
              <path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2" d="M25,0C11.44,0,0.45,4.02,0.45,8.97S11.44,17.94,25,17.94"/>
            </svg>
          </span>
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