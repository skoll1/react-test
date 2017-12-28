import React, { Component } from 'react'

class ErrorBoundary  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            hasError:false,
     })
   } 
   componentDidCatch(error,info){
       this.setState({
           hasError:true
       })
    //    把错误信息发送给服务器
   }
    render() {
      return (
        <div className=''>
            {this.state.hasError?this.props.children:'发生了一些不可预知的错误'}
        </div>
      )
    }
}
export default ErrorBoundary ;
// 所有的组件都可以使用这个组件包起来进行错误判断，这个只能捕获组件的错误，函数代码内部的错误需要使用try-catch来捕获。