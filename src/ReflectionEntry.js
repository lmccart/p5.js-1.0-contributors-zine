import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Linkify from 'react-linkify';

class ReflectionEntry extends Component {	 
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
      <li key={this.props.index} id={"reflection-"+this.props.index} className="contributorEntry">
        <Row sm={12}>
          <Col sm={3} className="contributorCurve">
              <span className="figLabel">TEXT <Pad n={this.props.index+1} d='2'/></span>
              <span className="curveLabel firstCurve"><img src='./assets/curve-first.svg' alt=''/></span>
              <span className="figLabel">&nbsp;</span>
              <span className="curveLabel"><img src='./assets/curve.svg' alt=''/></span>
              {this.props.obj.Title.split('\n').map(function(item, key) {
                  return (
                    key !== 0 ? 
                    <span key={key}>
                      <span className="figLabel">&nbsp;</span>
                      <span className="curveLabel"><img src='./assets/curve.svg' alt=''/></span>
                    </span>
                    : ""
                  )
              })}
            </Col>
            <Col sm={9} className="contributorCredit">
              <div className="headingPiece">Reflection</div>
              <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key} className='link'>
                {decoratedText}
              </a>
            )}>{this.props.obj.Title.split('\n').map(function(item, key) {
              return (<div className="headingPiece" key={key}>{item}</div>)
            })}</Linkify>
            <div className="headingPiece">{this.props.obj.Author}</div>
          </Col>
        </Row>
        <Row>
          <Col sm={{ size: 6, offset: 3 }}><img src={'./Illustrations/'+this.props.obj.Illustration} alt={this.props.obj.Alt} className="contributorImg"/></Col>
          <Col sm={12}>
            <div><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
              <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
            )}>{this.props.obj.Text.split('\n').map(function(item, key) {
          return (<span key={key}>{item}<br/></span>)
        })}</Linkify></div>
          </Col>
        </Row>
        <br/>

        {this.props.obj.Bio.map((i, k) => {
        return(
          <Row key={k}>
            <Col sm={3}  className="contributorCurve">
              <span className="figLabel">&nbsp;</span>
              <span className="curveLabel firstCurve"><img src='./assets/curve.svg' alt=''/></span>
            </Col>
            <Col sm={9}>
                <div className="authorHeading">{this.props.obj.Author}</div>
                <div>
                  <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                  <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                )}>{i.split('\n').map(function(item, key) {
                return (<span key={key}>{item}<br/></span>)
                })}</Linkify>
                </div>
            </Col>
          </Row>
        )})}
      </li>
    );
  }
}

export default ReflectionEntry;