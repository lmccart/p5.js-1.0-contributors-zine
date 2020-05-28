import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';
import Skew from './Skew.js';

class MobileRead extends Component {	 
	render() {
		return (
			<Container className='aboutText'>
				<Col xs={12} sm={12}>
					<p><Skew text='This zine is so good we want you to read it at full size! Please open this on a desktop or tablet.'/></p>
				</Col>
			</Container>
		);
	}
}

export default MobileRead;