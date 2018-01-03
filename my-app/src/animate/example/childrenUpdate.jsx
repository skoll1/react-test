import React, { Component } from 'react'
// 1.父动画容器包含着子动画，成为一个系统
// 2.延时设置动画。
import Tween from 'rc-tween-one';
class Child  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            tweenData:{
                translateX:'100px',
                duraction:3000,
            },
            childData:{
                translateY:'200px',
                duraction:1000,
            }
     })
   }
   componentDidMount(){
       setTimeout(()=>{
           this.setState({
               tweenData:{opacity: 0.5, marginTop: 100, duration: 1000}
           })
       },2000);

       setTimeout(()=>{
           this.setState({
                childData:[
                    { translateY: 100 },
                    { rotateY: 180, duration: 1000 },
                    { rotateY: 0, duration: 1000 },
                    { delay: -800, translateY: 0 }, 
                ]
           })
       },10000)
   } 
    render() {
      return (
        <div className=''>
            <Tween 
                animation={this.state.tweenData}
                style={{height:300,width:60,textAlign:'center'}}
                // 名称不加‘’,值是数值的也不加‘’，除非是字符串。
            >
                <div>
                    大面包
                </div>
                <Tween
                    animation={this.state.childData}
                    key='tween'
                >
                小馒头
                </Tween>
            </Tween>
        </div>
      )
    }
}
export default Child ;