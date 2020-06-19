import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';

class MobileRead extends Component {	 
	render() {
		return (
      <main id="main">
			<Container className='aboutText d-block d-sm-none'>
				<h1 id='read-heading' className='sr-only'>Read</h1>
				<Col xs={12} sm={12}>
					<p>Because this zine is so special to us, we ask that you read it at full size! Please open this link on a desktop or tablet.</p>
				</Col>
			</Container>
			</main>
		);
	}
}

export default MobileRead;