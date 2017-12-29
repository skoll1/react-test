import React, { Component } from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import './index.css'

class Demo extends Component {

  constructor(props) {
    super(props);
    this.animation = { left: '20%', yoyo: true, repeat: -1, duration: 1000 };
    this.handleClick=this.handleClick.bind(this)
    this.state=({
        paused:true
    })
  }
  handleClick(e){
      this.setState({
          paused:!this.state.paused
      })
      console.log(this.state)
  }

  render() {
    return (
      <TweenOne
        animation={this.animation}
        paused={this.state.paused}
        style={{ left: '-20%' }}
        className="code-box-shape"
        onClick={this.handleClick}
      />
    );
  }
}
export default Demo;