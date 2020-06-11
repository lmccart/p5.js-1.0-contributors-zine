import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import './App.css';

import Grid from './Grid';
import Intro from './Intro';
import About from './About';
import MobileRead from './MobileRead';
import DesktopRead from './DesktopRead';
import Asterisk from './Assets/asterisk.png';

class App extends Component {
  constructor() {
    super()
    this.state = {
      gridOpen: false,
      navOpen: true,
      introOpen: true,
      aboutOpen: false
    }
    this.handleKey = this.handleKey.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showRead = this.showRead.bind(this);
    this.navOn = this.navOn.bind(this);
    this.navOff = this.navOff.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }

  handleKey(e) {
    const { gridOpen, aboutOpen } = this.state;
    if (e.key === 'g') {
      this.setState({ gridOpen: !gridOpen });
    }
    else if (e.key === 'a') {
      this.setState({ aboutOpen: !aboutOpen });
    }
  }

  showAbout(e) {
    this.setState({ navOpen: false, introOpen: false, aboutOpen: true });
    document.body.className = 'orange';
  }
  showRead(e) {
    this.setState({ navOpen: false, introOpen: false, aboutOpen: false });
    document.body.className = 'gray';
  }
  navOn(e) {
    console.log('oh')
    if (this.state.introOpen) return;
    this.setState({ navOpen: true });
  }
  navOff(e) {
    if (this.state.introOpen) return;
    this.setState({ navOpen: false });
  }
  toggleNav(e) {
    if (this.state.introOpen) return;
    else if (this.state.navOpen) this.setState({ navOpen: false });
    else this.setState({ navOpen: true });
    
  }

  componentDidMount() {
    document.body.className = 'gray';
    document.addEventListener('keyup', this.handleKey);
    document.querySelector('nav').addEventListener('mouseover', this.navOn);
    document.querySelector('nav').addEventListener('mouseout', this.navOff);
    document.getElementById('navButton').addEventListener('click', this.toggleNav);
    document.getElementById('aboutButton').addEventListener('click', this.showAbout);
    document.getElementById('readButton').addEventListener('click', this.showRead);
  }

  render() {
    const { gridOpen, navOpen, aboutOpen, introOpen } = this.state
    
    return (
      <Container fluid className="h-100">

        {!introOpen && (	
          <a id='skipToContent' className='sr-only' href='#main'>Skip To Content</a>
        )}
        <Col xs={12} sm={4} id="headingBox" className={`justify-content-end ${aboutOpen ? "gray" : ""}`}>
          {/* <div>p5.js 1.0 <br/> Contributors Zine&nbsp;</div> */}
          <h1>p5.js 1.0 <br aria-hidden='true'/> Contributors Zine&nbsp;</h1>
        </Col>
        
        {gridOpen && (					
          <Grid/>
        )}
        {introOpen && (					
          <Intro/>
        )}
        {!introOpen && aboutOpen && (					
          <About/>
        )}
      
        <Col sx={12} sm={8} className="menu">
          <nav id='mainNav' tabIndex="1" className={`${navOpen ? "" : "navCondensed"} ${aboutOpen ? "gray" : ""}`} aria-label="main">
            <ul>
              <li><a href="#read" id='readButton' className='current'>Read</a></li>
              <li><a href="#about" id='aboutButton'>About</a></li>
              <li><a href="http://processingfoundation.press/" target="_blank" rel="noreferrer">Purchase</a></li>
            </ul>
            <button id='navButton' aria-expanded={`${navOpen ? true : false}`}><img src={Asterisk} alt=''/></button>
          </nav>
        </Col>
        {!introOpen && !aboutOpen && (		
          <>			
          <MobileRead />
          <DesktopRead />
          </>
        )}
      </Container>
    );
  }
}

export default App;