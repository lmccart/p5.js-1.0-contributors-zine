import React, { Component } from 'react';

class Skew extends Component {	 
  constructor() {
    super()
    this.state = {
    }
  }

	render() {
    return (
      <>
      {this.props.text.split(' ').map((item, key) => {
        return (
          <span key={key} className={(this.props.hover ? "skewHover" : "skew")}>{item}&nbsp;</span>
        )
      })}
      </>
    );
  }
}

export default Skew;