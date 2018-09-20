import React,{Component}from 'react';
import T1 from './tOne/t1'
class Index extends Component {
    constructor(props){

 super(props) 
   }
    componentDidMount(){

   }
    componentWillUnMount(){
 
  }
    render(){
      return(
        <div className=''>
                <h1>测试</h1>
                <hr/>
                <T1 />
        </div>
      )
    }
   }
export default Index;