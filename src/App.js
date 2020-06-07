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
      aboutOpen: false,
      isMobile: false
    }
    this.handleKey = this.handleKey.bind(this);
    this.showAbout = this.showAbout.bind(this);
    this.showRead = this.showRead.bind(this);
    this.navOn = this.navOn.bind(this);
    this.navOff = this.navOff.bind(this);
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
    if (this.state.introOpen) return;
    this.setState({ navOpen: true });
  }
  navOff(e) {
    if (this.state.introOpen) return;
    this.setState({ navOpen: false });
  }

  componentDidMount() {
    document.body.className = 'gray';
    document.addEventListener('keyup', this.handleKey);
    document.querySelector('nav').addEventListener('mouseover', this.navOn);
    document.querySelector('nav').addEventListener('mouseout', this.navOff);
    document.getElementById('aboutButton').addEventListener('click', this.showAbout);
    document.getElementById('readButton').addEventListener('click', this.showRead);
    window.addEventListener("resize", this.resize.bind(this));
    this.resize();
  }

  resize() {
    let check = false;
    /* eslint-disable */
    (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
    /* eslint-reenable */
    this.setState({isMobile: check});
  }

  render() {
    const { gridOpen, navOpen, aboutOpen, introOpen } = this.state
    
    return (
      <Container fluid className="h-100">
        <a id='skipToContent' className='sr-only' href='/#contributor-0'>Skip To Content</a>
        <Col xs={12} sm={4} id="headingBox" className={`justify-content-end ${aboutOpen ? "gray" : ""}`}>
          <h1>p5.js 1.0<br/>Contributors Zine&nbsp;</h1>
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
          <nav tab-index="1" className={`${navOpen ? "" : "navCondensed"} ${aboutOpen ? "gray" : ""}`} aria-label="main">
            <ul>
              <li><button id='readButton' className='current'>Read</button></li>
              <li><button id='aboutButton'>About</button></li>
              <li><a href="http://processingfoundation.press/" target="_blank" rel="noreferrer">Purchase</a></li>
            </ul>
            <img id='navButton' src={Asterisk} alt='p5 asterisk logo' aria-expanded={`${navOpen ? "true" : "false"}`}/>
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