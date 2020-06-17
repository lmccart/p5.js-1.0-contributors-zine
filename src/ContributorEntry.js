import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Hyphenated from 'react-hyphen';
import Linkify from 'react-linkify';
import Curve from './Curve.js';

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
      <div key={this.props.index} id={"contributor-"+this.props.obj.Short.replace(/ /g, '-').toLowerCase()} className="contributorEntry">
      <h3>
        <Row>
          <Col sm={3} className="contributorCurve">
            <span className="figLabel">FIG. <Pad n={this.props.index+1} d='3'/></span>
            <div className="curveHolder">
              <Curve first/>
              {this.props.obj.Credit.split('\n').map(function(item, key) {
                  return (
                    key !== 0 ? 
                    <Curve key={key}/>
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
            </h3>
        <Row>
          <Col sm={{ size: 6, offset: 3 }} className="contributorImgContainer"><img src={this.props.obj.Image} alt={this.props.obj.Alt} className="contributorImg"/></Col>
          <Col sm={12}>
            <Hyphenated><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
            )}>{this.props.obj.Contribution}</Linkify></Hyphenated>
          </Col>
        </Row>
        <Row className="alt">
        <Col sm={3} className="contributorCurve">
            <div className="curveHolder">
              <Curve first/>
            </div>
          </Col>
          <Col sm={9} aria-hidden='true'>
            <div className="altLabel">ALT.TEXT</div>
            <div>{this.props.obj.Alt}</div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default ContributorEntry;