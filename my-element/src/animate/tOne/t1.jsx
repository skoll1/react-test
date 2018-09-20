import React,{Component}from 'react';
import Tween from 'rc-tween-one'
import './t1.css'
class T1 extends Component {
    constructor(props){

 super(props) 
   }
    componentDidMount(){

   }
    componentWillUnMount(){
 
  }
    render(){
      return(
        <div className='t2'>
        <Tween 
                animation={{ 
                    x:90,
                    // scale:0.5,
                    // rotate:320,
                    // width:200,
                    // opacity:0,
                    borderRadius:5,
                    yoyo:true,
                    repeat:-1,
                    duration: 2000 
                }}
                className="t1"

        
        >
        </Tween> 
        </div>
      )
    }
   }
export default T1;