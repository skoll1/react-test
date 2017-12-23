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