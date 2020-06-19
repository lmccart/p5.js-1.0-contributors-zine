import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Curve from './Curve.js';

class About extends Component {	 
	render() {
		return (
			<div className='aboutText' id="main">
				<h1 id='about-heading' className='sr-only'>About</h1>
				<Col xs={12} sm={12}>
					<p>p5.js is a JavaScript library that aims to make creative expression and coding on the web accessible and inclusive for artists, designers, educators, beginners, and anyone else. It uses the metaphor of “sketching with code”, drawing inspiration from its precursor, Processing.  p5.js is free and open-source because we believe software, and the tools to learn it, should be accessible to everyone.</p>
					<p className="d-none d-lg-block">To the p5.js community, “contributing” means many different things including:</p>
					<Row  className="d-none d-lg-flex" aria-hidden='true'>
						<Col>
							<div className="aboutCurves">
							<Curve first/><Curve/><Curve/>
							</div>
							<ul className="aboutList" aria-label="contributing ideas 1">
								<li>teaching,</li>
								<li>documentation,</li>
								<li>writing code,</li>
								<li>making art,</li>
							</ul>
						</Col>
						<Col xs={12} sm={4}>
							<div className="aboutCurves">
							<Curve first/><Curve/><Curve/>
							</div>
							<ul className="aboutList" aria-label="contributing ideas 2">
								<li>writing,</li>
								<li>design,</li>
								<li>activism,</li>
								<li>curating,</li>
							</ul>
						</Col>
						<Col xs={12} sm={4}>
							<div className="aboutCurves">
							<Curve first/><Curve/><Curve/>
							</div>
							<ul className="aboutList" aria-label="contributing ideas 3">
								<li>bug reporting,</li>
								<li>organizing,</li>
								<li>outreach,</li>
								<li>and more.</li>
							</ul>
						</Col>
					</Row>
					<Row className="d-block d-lg-none sr-only">
						<Col xs={12}>
							<p>To the p5.js community “contributing” means many different things including: teaching, coding, documentation, making art, writing, design, activism, curating, bug reporting, outreach, and more.</p>
						</Col>
					</Row>
					<p className="margTop">We seek to erase the line between user and contributor, and expand the definitions of both as far and wide as possible. Diverse perspectives come together to make a tool that enables many different people to express themselves creatively.</p>
					<p>To celebrate our 1.0 Release in February 2020, all contributors were invited to submit an image representing their contribution. Designer Stefanie Tam worked with Lauren Lee McCarthy to create the p5.js 1.0 Contributors Zine. An edition of 200 copies were printed.</p>
					<p>This is the digital version of the zine publication. It contains manifestations of p5.js through art, code, community events, workshops, educational programs, publications, and more. These 140 entries and 12 essays and illustrations represent a subset of the thousands of p5.js contributors worldwide that worked together toward the p5.js 1.0 Release.</p>
				</Col>
			</div>
		);
	}
}

export default About;