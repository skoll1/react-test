import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import '../index.css'

const p0='M0,100 L25,100 C34,20 40,0 100,0';
const p1='M0,100 C5,120 25,130 25,100 C30,60 40,75 58,90 C69,98.5 83,99.5 100,100'

const ease0=TweenOne.easing.path(p0);
const ease1=TweenOne.easing.path(p1);
// 路径缓动，沿着路径动画



class Demo  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            paused:true,
     })
     this.animation=[
      {
        repeatDelay: 500,
        y: -70,
        repeat: -1,
        yoyo: true,
        ease: ease0,
        duration: 1000
      },
      // 决定上下
      {
        repeatDelay: 500,
        appearTo: 0,
        scaleX: 0,
        scaleY: 2,
        repeat: -1,
        yoyo: true,
        ease: ease1,
        duration: 1000,
      }
      // 决定缩放
     ]
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick(){
     this.setState({
       paused:false,
     })
   }
    render() {
      return (
        <div className=''>
            <TweenOne
                animation={this.animation}
                paused={this.state.paused}
                className='code-box-shape'
                style={{
                  position:'absolute',
                  transformOrigin:'center bottom',
                }}      
            />
            <div onClick={this.handleClick}>
              kaishi
            </div>
        </div>
      )
    }
}
export default Demo ;