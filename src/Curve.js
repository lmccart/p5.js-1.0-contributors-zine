import React, { Component } from 'react';

class Curve extends Component {	 

	render() {
    return (
      <div className={`${this.props.className ? this.props.className : "indexCurveHolder"}`}>
        {this.props.first ?
        <span className="aboutCurve firstCurve">
          <svg aria-hidden="true" role="img" preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94">
            <path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2" d="M25,0.47c-13.56,0-24.55,3.81-24.55,8.51s10.99,8.5,24.55,8.5"/>
          </svg>
        </span>
        :
        <span className="aboutCurve">
          <svg aria-hidden="true" role="img" preserveAspectRatio="none" version="1.1" className="curve" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="100%" height="100%" viewBox="0 0 25 17.94">
            <path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2" d="M25,0.25c-13.56,0-24.55,3.92-24.55,8.75S11.44,17.74,25,17.74"/>
          </svg>
        </span>
        }
      </div>
    );
  }
}

export default Curve;

