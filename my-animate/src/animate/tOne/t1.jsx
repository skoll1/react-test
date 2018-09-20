import React, { Component } from 'react'
import TweenOne from 'rc-tween-one'
import PropTypes from 'prop-types'
import '../index.css'

class An  extends Component { 
    constructor(props) { 
        super(props)
        this.state={
            paused:false,
            animation:[
                { left: '-40%' },
                { left: '40%' },
                { top: '60px' },
                { scale: 0.7 },
                { scale: 1 },
                { top: 0 },
            ]
     }
     this.handleClick=this.handleClick.bind(this)
   }
   componentDidMount(){
       console.log(this.state.paused)
   } 
   onstart(e){
    console.log(e)
   }
   onUpdate(e){
    //    console.log(e)
    // index指的是什么啊
   }
   handleClick(){
       this.setState({
           animation:[
            { left: '0%' },
           ]
       })
   }
    render() {
      return (
        <div className=''>
            <TweenOne
                // animation={{
                //     x: 80, 
                //     scale: 0.5, 
                //     rotate: 120, 
                //     yoyo: true, // demo 演示需要
                //     repeat: -1, // demo 演示需要
                //     duration: 1000,
                //     type:'from',
                //     delay:100,
                //     // 只会在第一帧的时候等
                //     repeatDelay:1000,
                //     ease:'easeInOutQuad',
                //     // 缓动函数
                //     onStart:this.onstart,
                //     onUpdate:this.onUpdate
                   
                // }}
                animation={this.state.animation}
                paused={this.state.paused}
                className="code-box-shape"
            >

            </TweenOne>
            <button onClick={this.handleClick}>add</button>
        </div>
      )
    }
}
export default An ;