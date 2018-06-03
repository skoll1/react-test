import React,{Component}from 'react';
class Event extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount(){

    }
    componentWillUnMount(){

    }
    handleClick(e){
        e.preventDefault()
        console.log(e)
    }
    render(){
      return(
        <div className=''>
            <h1>
                <a href="#" onClick={(e)=>this.handleClick(e)}>开始</a>
            </h1>
        </div>
      )
    }
   }
export default Event;