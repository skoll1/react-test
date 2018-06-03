import React, { Component } from 'react'
class Clock extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            data:new Date(),
            step:this.props.step
     })
   }
   componentDidMount(){
     this.timeId=setInterval(()=>{
        this.setState({
          data:new Date(),
          age:'age'
        })
     },this.state.step)
   }
   componentWillUnmount(){
     clearInterval(this.timeId)
   }
    render() {
      return (
        <div className='clock'>
            <h1>hello,world</h1>
            <h2>{this.state.data.toLocaleTimeString()}</h2>
        </div>
      )
    }
}
export default Clock;