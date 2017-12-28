import React, { Component } from 'react'

class For extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
      var list=(len)=>{
          var res=[];
          for(var i=0;i<len;i++){
              res.push(<h2 key={i}>hello react</h2>)
          }
          return res;
      }
// react中使用for循环的方法，把他放在外面做成一个函数
      return (
        <div className=''>
            <div>
                hello{list(this.props.len)}
                {/* 直接渲染函数 */}
            </div>
        </div>
      )
    }
}
export default For ;