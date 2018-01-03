import React, { Component } from 'react'

class GameInfo  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
     this.handleClick=this.handleClick.bind(this)
   } 
    handleClick(index){
        console.log(index)
    }
    render() {
    const showList=this.props.historyShowList
      return (
        <div className=''> 
            <ul>
                {showList.map((v,index)=>{
                    return (
                       <li key={index} onClick={this.handleClick.bind(this,index)}>
                           {v}
                       </li> 
                    )
                })}
            </ul>
           
        </div>
      )
    }
}
export default GameInfo ;