import React,{Component}from 'react';
// 几个组件需要反映相同的变化数据，我们建议将共享状态提升至最近的共同祖先
const scaleNames={
    c:'Celsius',
    f:'Fahrenheit'
}

class Share1 extends Component {
    constructor(props){
        super(props)
        
        this.handleChange=this.handleChange.bind(this)
   }
   
   handleChange(e){
       this.props.onTChange(e.target.value)
   }
    render(){
      const {t,scale}=this.props;
      return(
        <div className=''>
        <h1>输入温度in {scaleNames[scale]}</h1>
        <h2>{this.props.t}</h2>
                <input 
                    onChange={this.handleChange}
                    type="text"/>
        </div>
      )
    }
   }
export default Share1;