import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { setConfiguration } from 'react-grid-system';
import $ from 'jquery';
import './App.css';

import Grid from './Grid';
import About from './About';
import Read from './Read';

import Asterisk from './assets/asterisk.png';

setConfiguration({ defaultScreenClass: 'sm', gridColumns: 12, gutterWidth: 50 });

class App extends Component {
  constructor() {
    super()
    this.state = {
      gridOpen: true,
      navOpen: true,
      introOpen: false,
      aboutOpen: false
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
    console.log('about')
    this.setState({ navOpen: false, introOpen: false, aboutOpen: true });
  }
  showRead(e) {
    console.log('about')
    this.setState({ navOpen: false, introOpen: false, aboutOpen: false });
  }
  toggleNav(e) {
    const { navOpen } = this.state;
    this.setState({ navOpen: !navOpen });
  }

  componentDidMount() {
    $(document).keyup(this.handleKey);
    $('#navButton').click(this.toggleNav);
    $('#aboutButton').click(this.showAbout);
    $('#readButton').click(this.showRead);
  }

  render() {
    const { gridOpen, navOpen, aboutOpen, introOpen } = this.state
    
    return (
      <Container fluid className="h-100">
        <a id='skipToContent' className='sr-only' href='/#contributor-0'>Skip To Content</a>
        {gridOpen && (					
          <Grid/>
        )}
        {!introOpen && aboutOpen && (					
          <About/>
        )}

        <Col xs={12} sm={4}>
          <div id="headingBox" className={`${aboutOpen ? "gray" : ""}`}>
            <h1>p5.js 1.0<br/>Contributors Zine&nbsp;&nbsp;</h1>
          </div>
        </Col>

      
        <Col sx={12} sm={8} className="menu">
          <nav className={`${navOpen ? "" : "navCondensed"} ${aboutOpen ? "gray" : ""}`}>
            <h2 id='mainNav' className="sr-only">Main Nav</h2>
            <ul aria-labelledby='mainNav'>
              <li><button id='readButton' className='current'>Read</button></li>
              <li><button id='aboutButton'>About</button></li>
              <li><a href="http://processingfoundation.press/" target="_blank">Purchase</a></li>
              <li><a href="mailto:hello@p5js.org" target="_blank">Contact</a></li>
            </ul>
            <img id='navButton' src={Asterisk} alt='p5 asterisk logo'/>
          </nav>
        </Col>
        {!introOpen && !aboutOpen && (					
          <Read/>
        )}
      </Container>
    );
  }
}

export default App;