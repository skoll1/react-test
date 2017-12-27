// 绑定react未提供的事件

import React, { Component } from 'react'

class Bind  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    componentDidMount(){
        Window.addEventListener('resize',this.onWindowResize);
        // 绑定react未提供的事件
        // 进行ajax请求。
    }
    componentWillUnmount(){
        Window.removeEventListener('resize',this.onWindowResize);
    }
    onWindowResize(e){
        console.log(e);
    }
    
    render() {
      return (
        <div className=''>
 
        </div>
      )
    }
}
export default Bind ;
