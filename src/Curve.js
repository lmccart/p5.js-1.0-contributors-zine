import React, { Component } from 'react';

class Curve extends Component {	 

	render() {
    return (
      <div className={`${this.props.className ? this.props.className : "indexCurveHolder"}`}>
        <span className={`aboutCurve ${this.props.first ? "firstCurve" : ""}`}>
          <svg aria-hidden="true" role="img" preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94">
            <path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2" d="M25,0.45c-13.56,0-24.55,3.82-24.55,8.52S11.44,17.49,25,17.49"/>
          </svg>
        </span>
      </div>
    );
  }
}

export default Curve;
