import React, { Component } from 'react';
import { Row } from 'reactstrap';

class Intro extends Component {	 


  componentDidMount() {
		var mySVG = document.getElementById('svg');
		mySVG.setAttribute("width", window.innerWidth);
		mySVG.setAttribute("height", window.innerHeight);
		mySVG.style.position = 'absolute';
		mySVG.style.top = 0;
		mySVG.style.left = 0;
  }

	
	render() {
		return (
<div>
	<svg preserveAspectRatio="none" version="1.1" id="svg" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
		width="756px" height="505.09px" viewBox="0 0 756 505.09" enable-background="new 0 0 756 505.09">
	<path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" d="M261.33,17.63c13.6,0,24.62-6.55,24.62-14.62"/>
	<path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" d="M261.33,18.38c13.6,0,24.62,6.55,24.62,14.62"/>
	<line vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" x1="261.33" y1="18" x2="753" y2="18"/>
	<path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" d="M236.33,487.46c-13.6,0-24.62,6.55-24.62,14.62"/>
	<path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" d="M236.33,486.71c-13.6,0-24.62-6.55-24.62-14.62"/>
	<line vectorEffect="non-scaling-stroke" fill="none" stroke="#000000" strokeWidth="2px" x1="236.33" y1="487.09" x2="3" y2="487.09"/>
	<rect vectorEffect="non-scaling-stroke" x="3" y="3" fill="none" width="750" strokeWidth="2px" height="499.09"/>
	<path vectorEffect="non-scaling-stroke" fill="none" stroke="#000000"  strokeWidth="2px" strokeMiterlimit="10" d="M190.75,412.63c0,18.62-33.92,37.23-93.63,37.23
		c-63.42,0-93.62,18.62-93.62,37.23 M190.75,412.63c0-18.61,30.2-37.23,93.62-37.23c59.71,0,93.63-18.61,93.63-37.23L3.5,401.46
		M3.5,401.46c0-18.61,30.2-37.23,93.62-37.23c59.71,0,93.63-18.61,93.63-37.23 M378,252.54c0,18.61-33.92,37.23-93.63,37.23
		c-63.42,0-93.62,18.61-93.62,37.23 M565.25,178.09c0,18.61-33.92,37.23-93.63,37.23c-63.42,0-93.62,18.61-93.62,37.23
		M565.25,178.09c0-18.61,30.2-37.23,93.62-37.23c59.71,0,93.63-18.62,93.63-37.23L378,166.91 M565.25,92.46
		c0,18.62-33.92,37.23-93.63,37.23c-63.42,0-93.62,18.61-93.62,37.23 M565.25,92.46c0-18.61,30.2-37.23,93.62-37.23
		c59.71,0,93.63-18.61,93.63-37.23"/>
	</svg>

</div>
		);
	}
}

export default Intro;