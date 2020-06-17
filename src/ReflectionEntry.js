import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import Linkify from 'react-linkify';
import Curve from './Curve.js';

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
      return n.length >= data.d ? data.name+' '+n : data.name+' '+new Array(data.d - n.length + 1).join('0') + n;
    };
    return (
      <div key={this.props.index} id={"reflection-"+(this.props.obj.Author.replace(/ /g, '-').toLowerCase())} className="contributorEntry">
        <Row sm={12}>
        <Col sm={3} className="contributorCurve">
          <span aria-label="text label" className="figLabel">{this.props.obj.Illustration ? <Pad name="TEXT" n={this.props.index+1} d='2'/> : "IMAGES"}</span>
          <div className="curveHolder">
            <Curve first/>
            {this.props.obj.Title.split('\n').map(function(item, key) {
                return (
                  <Curve key={key} />
                )
            })}
          </div>
          </Col>
            <Col sm={9} className="contributorCredit">
              <h3>
                <div className="headingPiece">Reflection</div>
                <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                <a target="blank" href={decoratedHref} key={key} className='link'>
                  {decoratedText}
                </a>
              )}>{this.props.obj.Title.split('\n').map(function(item, key) {
                return (<div className="headingPiece" key={key}>{item}</div>)
              })}</Linkify>
              <div className="headingPiece">{this.props.obj.Author}</div>
            </h3>
          </Col>
        </Row>
        <Row>
          { this.props.obj.Illustration ? 
            <Col sm={{ size: 6, offset: 3 }} className="contributorImgContainer"><img src={'./Illustrations/'+this.props.obj.Illustration} alt={this.props.obj.Alt} className="contributorImg"/></Col>
            : <Col sm={{ size: 6, offset: 3 }}>&nbsp;</Col>}
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
            <Col sm={3} className="contributorCurve">
              <Curve className="curveHolder" first/>
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
      </div>
    );
  }
}

export default ReflectionEntry;