import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import Skew from './Skew.js';

class MobileRead extends Component {	 
	render() {
		return (
      <main id="main">
			<Container className='aboutText d-block d-sm-none'>
				<h1 id='read-heading' className='sr-only'>Read</h1>
				<Col xs={12} sm={12}>
					<p><Skew text='This zine is so good we want you to read it at full size! Please open this on a desktop or tablet.'/></p>
				</Col>
			</Container>
			</main>
		);
	}
}

export default MobileRead;