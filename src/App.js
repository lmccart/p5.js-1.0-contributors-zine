import React, { Component } from 'react';
import { Container, Col } from 'reactstrap';
import './App.scss';

import Grid from './Grid';
import Intro from './Intro';
import About from './About';
import MobileRead from './MobileRead';
import DesktopRead from './DesktopRead';
import Asterisk from './Assets/asterisk.png';

class App extends Component {
  constructor() {
    super()
    const hash = window.location.hash;
    this.state = {
      gridOpen: true,
      navOpen: true,
      introOpen: (!hash.includes('contributor') && !hash.includes('reflection') && !hash.includes('about')),
      aboutOpen: hash === '#about'
    }
    
    this.handleKey = this.handleKey.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showRead = this.showRead.bind(this);
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
  toggleNav(e) {
    // if (this.state.introOpen) return;
    if (this.state.navOpen) this.setState({ navOpen: false });
    else this.setState({ navOpen: true });
    
  }

  componentDidMount() {
    document.body.className = window.location.hash === '#about' ? 'orange' : 'gray';
    document.addEventListener('keyup', this.handleKey);
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
          <h1 role="text"><span className="border-bottom">&nbsp;p5.js 1.0&nbsp;</span> <br aria-hidden='true'/> <span className="border-bottom">&nbsp;Contributors Zine&nbsp;</span></h1>
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
          <nav id='mainNav' tabIndex="1" className={`${navOpen ? "navExpanded" : "navCondensed"}`} aria-label="main">
            <ul className={`${aboutOpen ? "gray" : ""}`}>
              <li><a href="#read" id='readButton' className='current'>Read</a></li>
              <li><a href="#about" id='aboutButton'>About</a></li>
              <li><a href="http://processingfoundation.press/" target="_blank" rel="noopener noreferrer">Purchase</a></li>
              <li id='p5'><a href="https://p5js.org/" target="_blank" rel="noopener noreferrer">p5.js</a></li>
            </ul>
            <button id='navButton' aria-expanded={`${navOpen ? true : false}`} className={`${aboutOpen ? "gray" : ""}`}><img src={Asterisk} alt=''/></button>
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