import React, { Component } from 'react'

class Extend  extends Component { 
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