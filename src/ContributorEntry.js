import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Linkify from 'react-linkify';

class ContributorEntry extends Component {	 
  constructor() {
    super()
    this.state = {
    }
  }

  componentDidMount() {

  }

  shouldComponentUpdate() {
    return false;
  }

	render() {    
    const Pad = (data) => {
      let n = data.n + '';
      return n.length >= data.d ? n : new Array(data.d - n.length + 1).join('0') + n;
    };
    return (
      <li key={this.props.index} id={"contributor-"+this.props.index} className="contributorEntry">
        <Row>
          <Col sm={3} className="contributorCurve">
            <span className="figLabel">FIG. <Pad n={this.props.index+1} d='3'/></span>
            <div className="curveHolder">
              <span className="curveLabel firstCurve"><img src='./assets/curve-first.svg' alt=''/></span>
              {this.props.obj.Credit.split('\n').map(function(item, key) {
                  return (
                    key !== 0 ? 
                    <span key={key} className="curveLabel"><img src='./assets/curve.svg' alt=''/></span>
                    : ""
                  )
              })}
            </div>
          </Col>
          <Col sm={9} className="contributorCredit">
            <div className="headingPiece">Contributor</div>
            <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
            <a target="blank" href={decoratedHref} key={key} className='link'>
              {decoratedText}
            </a>
          )}>{this.props.obj.Credit.split('\n').map(function(item, key) {
            return (<div className="headingPiece" key={key}>{item}</div>)
          })}</Linkify>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}><img src={this.props.obj.Image} alt={this.props.obj.Alt} className="contributorImg"/></Col>
          <Col sm={12}>
            <div ><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
            )}>{this.props.obj.Contribution}</Linkify></div>
          </Col>
        </Row>
        <Row className="alt">
        <Col sm={3} className="contributorCurve">
            <div className="curveHolder">
              <span className="curveLabel firstCurve"><img src='./assets/curve-first.svg' alt=''/></span>
            </div>
          </Col>
          <Col sm={9}>
            <div className="altLabel">ALT.TEXT</div>
            <div>{this.props.obj.Alt}</div>
          </Col>
        </Row>
      </li>
    );
  }
}

export default ContributorEntry;