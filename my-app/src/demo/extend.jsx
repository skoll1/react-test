import React, { Component } from 'react'
// 使用组合而不是继承来实现功能

// 组件可以接受任何的道具，包括原始值，react元素或者函数。
//如果想在组件之间重用非UI元素，建议将其压缩到单独的js模块中
class Extend extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
       const children=React.Children.toArray(this.props.children);
       return(
           <div className='test'>
               <div className="left">
                    {this.props.left}
               </div>
               <div className="right">
                    {this.props.right}
               </div>
               <div className="child">
                    {this.props.children}
               </div>
               <div className="count">
                  <p>{React.Children.count(this.props.children)}</p>
               </div>
               {/* <div className="toArray">
                    {children}
               </div> */}
           </div>
       )
    }
}
export default Extend ;
// 为模块指定默认输出，当其他模块加载该模块的时候，import命令可以为该匿名函数指定任意的名字