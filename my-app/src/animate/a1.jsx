import React, { Component } from 'react'
import TweenOne from 'rc-tween-one';
import PropTypes from 'prop-types';
import './index.css'

class Demo extends Component {

  constructor(props) {
    super(props);
    this.animation = {  
                      // left: '100px',
                      // 位移变化
                      // 这个里面的所有属性都是初始的状态。
                      // scale:1,
                      // 缩放变化
                      // width:'500px',
                      // 宽度变化
                      // rotate:360,
                      // 旋转
                      // opacity:1,
                      // 渐变
                      // blur:'10px',
                      // 模糊

                      yoyo: true, 
                      repeat: -1, 
                      duration: 1000,
                      type:'from',
                      // ease:'easeOutBack',
                      // color:'white'
                      onComplete:function(e){
                        console.log(e)
                      }
                    };
    this.handleStart=this.handleStart.bind(this)
    this.handlePause=this.handlePause.bind(this)
    this.handleReverse=this.handleReverse.bind(this)
    this.state=({
        paused:true,
        reverse:false,
    })
  }
  handlePause(){
    this.setState({
      paused:true
    })
  }
  handleStart(){
    this.setState({
      paused:false
    })
  }
  handleReverse(){
    this.setState({
      reverse:true
    })
    console.log(this.state)
  }
  handleChange(e){
    // console.log(e)
  }

  render() {
    return (
      <div>
        <ul>
          <li>组件更新的参数</li>
          <li onClick={this.handleStart}>
            start
          </li>
          <li onClick={this.handlePause}>
            pause
          </li>
          <li onClick={this.handleReverse}>
            reverse
          </li>
          <li>
            animation参数
          </li>
        </ul>
        <TweenOne
        animation={this.animation}
        paused={this.state.paused}
        reverse={this.state.reverse}
        style={
                { 
                  // left:'700px',
                  // transform:'scale(2)'
                  // transform:'rotate(180deg)'
                  // opacity:0.2
                }}
        // 这个里面都是想要变化之后的样子
        className="code-box-shape"
        onClick={this.handleClick}
        onChange={this.handleChange}
      >SB</TweenOne>
      </div>
    );
  }
}
export default Demo;