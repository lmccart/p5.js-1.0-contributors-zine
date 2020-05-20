import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';

class Grid extends Component {	 
	render() {
		return (
      <Row id='grid'>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
        <Col xs={12} sm={2} className="grid"><span className="inner"><span className="halfInner"></span></span></Col>
      </Row>
		);
	}
}

export default Grid;