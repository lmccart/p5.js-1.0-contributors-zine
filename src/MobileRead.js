import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

class MobileRead extends Component {	 
	render() {
		return (
			<Container id='MobileRead'>
				<Row>
				<Col xs={12} sm={12}>
					<p>Please open on a desktop or tablet to read the Zine.</p>
				</Col></Row>
			</Container>
		);
	}
}

export default MobileRead;