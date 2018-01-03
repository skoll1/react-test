import React, { Component } from 'react'
import Tween from 'rc-tween-one';
// 绑定事件的新方法
// this.state={}。没有括号包着
// 了解了momet: // 设置动画的间隔，从1000帧以后开始执行原动画，之前理解成动画时间到这个数
class Control extends React.Component {
    constructor(props) {
      super(props);
      this.state ={
        paused: true,
        reverse: false,
        reverseDelay: 0,
        restart: false,
      };
      [
        'onPlay',
        'onPause',
        'onReverse',
        'onReverseDelay',
        'onRestart',
        'onMoment',
      ].forEach((method) => this[method] = this[method].bind(this));
    }
  
    onPlay() {
      this.setState({
        paused: false,
        reverse: false,
        moment: null,
      });
    }
  
    onPause() {
      this.setState({
        paused: true,
        moment: null,
      });
    }
  
    onReverse() {
      this.setState({
        reverse: true,
        reverseDelay: 0,
        paused: false,
        moment: null,
      });
    }
  
    onReverseDelay() {
      this.setState({
        reverse: true,
        reverseDelay: 1000,
        paused: false,
        moment: null,
      });
    }
  
    onRestart() {
      this.setState({
        moment: 0,
        paused: false,
        reverse: false,
      });
    }
  
    onMoment() {
      this.setState({
        moment: 1000,
      });
    }
    handleChange(e){
        console.log(e);
    }
  
    render() {
      return (
        <div>
          <div style={{ height: 200 }}>
            <Tween animation={[{ translateX: '500px', duration: 1000 }, { y: 100 }, { x: 100 }]}
              paused={this.state.paused}
              reverse={this.state.reverse}
              reverseDelay={this.state.reverseDelay}
              moment={this.state.moment}
              style={{ opacity: 1, width: 100, transform: 'translate(50px,30px)'
            }}
            onChange={this.handleChange}
            >
              <div>执行动效</div>
            </Tween>
          </div>
          <button onClick={this.onPlay}>play</button>
          <button onClick={this.onPause}>pause</button>
          <button onClick={this.onReverse}>reverse</button>
          <button onClick={this.onReverseDelay}>reverse Delay 1000</button>
          <button onClick={this.onRestart}>restart</button>
          <button onClick={this.onMoment}>moment to 500</button>
        </div>);
    }
  }
export default Control ;