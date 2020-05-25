import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Linkify from 'react-linkify';
import curveFirst from './assets/curve-first.svg';
import curve from './assets/curve.svg';

class DesktopRead extends Component {	 
  constructor() {
    super()
    this.state = {
      data: [],
      reflections: [],
      lastShort: ''
    }
  }

  componentDidMount() {
    let component = this;
    fetch('./data.json')
    .then(res => res.json())
    .then(result => {
      component.setState({ data: result })
    });

    fetch('./reflections.json')
    .then(res => res.json())
    .then(result => {
      component.setState({ reflections: result })
    });
  }

	render() {
    const Pad = (data) => {
      let n = data.n + '';
      return n.length >= data.d ? n : new Array(data.d - n.length + 1).join('0') + n;
    };
    const { data, reflections } = this.state
		return (
      <Container id="DesktopRead">
        <Col xs={12} sm={4} className="index">
          <h2 id='contributorsList'>Contributors</h2>
          <ul aria-labelledby='contributorsList'>
          {
            data.map((obj, index) => {
              if (obj.Short !== this.lastShort) { 
                this.lastShort = obj.Short;
                return (
                  <li key={index} className="contributorLabel">
                    <Row>
                      <Col sm={12} className="indexEntry">
                        <span className={`indexCurveLabel ${index === 0 ? "firstCurve" : ""}`}><img src={curveFirst} alt=''/></span>
                        <span className="indexLabel"><a href={"#contributor-"+index}>{obj.Short}</a></span>
                      </Col>
                    </Row>
                  </li>
                )
              }
            })
          }
          </ul>
          <h2 id='reflectionsList'>Contributor<br/>Reflections</h2>
          <ul aria-labelledby='reflectionsList'>
          {
            reflections.map((obj, index) => {
                return (
                  <li key={index} className="authorLabel">
                    <Row>
                      <Col sm={12} className="indexEntry">
                        <span className={`indexCurveLabel ${index === 0 ? "firstCurve" : ""}`}><img src={curveFirst} alt=''/></span>
                        <span className="indexLabel"><a href={"#reflection-"+index}>{obj.Title}<br/>{obj.Author}</a></span>
                      </Col>
                    </Row>
                  </li>
                )
              })
          }
          </ul>
        </Col>
        <Col sx={12} sm={8} className="content">
          <h2 id='contributorsEntries'className='sr-only'>Contributors Entries</h2>
          <ul aria-labelledby='contributorsEntries'>
          {
            data.map((obj, index) => {
              return (
                <li key={index} id={"contributor-"+index} className="contributorEntry">
                  <Row>
                    <Col sm={3} className="contributorCurve">
                      <span className="figLabel">FIG. <Pad n={index+1} d='3'/></span>
                      <span className="curveLabel firstCurve"><img src={curveFirst} alt=''/></span>
                      {obj.Credit.split('\n').map(function(item, key) {
                          return (
                            key !== 0 ? 
                            <span key={key}>
                            <span className="figLabel">&nbsp;</span>
                            <span className="curveLabel"><img src={curve} alt=''/></span>
                            </span>
                            : ""
                          )
                      })}
                    </Col>
                    <Col sm={9} className="contributorCredit">
                      <div className="headingPiece">Contributor</div>
                      <Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                      <a target="blank" href={decoratedHref} key={key} className='link'>
                        {decoratedText}
                      </a>
                    )}>{obj.Credit.split('\n').map(function(item, key) {
                      return (<div className="headingPiece" key={key}>{item}</div>)
                    })}</Linkify>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={{ size: 6, offset: 3 }}><img src={obj.Image} alt={obj.Alt} className="contributorImg"/></Col>
                    <Col sm={12}>
                      <div ><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                      )}>{obj.Contribution}</Linkify></div>
                    </Col>
                  </Row>
                  <Row className="alt">
                    <Col sm={3}>
                      <span className="figLabel">&nbsp;</span>
                      <span className="curveLabel firstCurve"><img src={curveFirst} alt=''/></span>
                    </Col>
                    <Col sm={9}>
                      <div className="altLabel">ALT.TEXT</div>
                      <div>{obj.Alt}</div>
                    </Col>
                  </Row>
                </li>
              )
            })
          }
          </ul>

          <h2 id='reflectionsEntries'>Contributor Reflections</h2>
          <ul aria-labelledby='reflectionsEntries'>
          {
            reflections.map((obj, index) => {
              return (
                <li key={index} id={"reflection-"+index} className="contributorEntry">
                  <Row sm={12}>
                    <Col sm={3} className="contributorCurve">
                        <span className="figLabel">TEXT <Pad n={index+1} d='2'/></span>
                        <span className="curveLabel firstCurve"><img src={curveFirst} alt=''/></span>
                        <span className="figLabel">&nbsp;</span>
                        <span className="curveLabel"><img src={curve} alt=''/></span>
                        {obj.Title.split('\n').map(function(item, key) {
                            return (
                              key !== 0 ? 
                              <span key={key}>
                                <span className="figLabel">&nbsp;</span>
                                <span className="curveLabel"><img src={curve} alt=''/></span>
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
                      )}>{obj.Title.split('\n').map(function(item, key) {
                        return (<div className="headingPiece" key={key}>{item}</div>)
                      })}</Linkify>
                      <div className="headingPiece">{obj.Author}</div>
                    </Col>
                  </Row>
                  <Row>
                    <Col sm={{ size: 6, offset: 3 }}><img src={'./Illustrations/'+obj.Illustration} alt={obj.Alt} className="contributorImg"/></Col>
                    <Col sm={12}>
                      <div><Linkify componentDecorator={(decoratedHref, decoratedText, key) => (
                        <a target="blank" href={decoratedHref} key={key} className='link'>{decoratedText}</a>
                      )}>{obj.Text.split('\n').map(function(item, key) {
                    return (<span key={key}>{item}<br/></span>)
                  })}</Linkify></div>
                    </Col>
                  </Row>
                  <br/>

                  {obj.Bio.map(function(i, k) {
                  return(
                    <Row key={k}>
                      <Col sm={3}  className="contributorCurve">
                        <span className="figLabel">&nbsp;</span>
                        <span className="curveLabel firstCurve"><img src={curve} alt=''/></span>
                      </Col>
                      <Col sm={9}>
                          <div className="authorHeading">{obj.Author}</div>
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
              )
            })
          }
          </ul>
        </Col>
      </Container>

    );
  }
}

export default DesktopRead;