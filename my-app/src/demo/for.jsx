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

      return (
        <div className=''>
            <div>
                hello{list(this.props.len)}
            </div>
        </div>
      )
    }
}
export default For ;