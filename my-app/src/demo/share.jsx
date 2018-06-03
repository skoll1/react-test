import React,{Component}from 'react';
// 几个组件需要反映相同的变化数据，我们建议将共享状态提升至最近的共同祖先
import Share1 from './share1'
function toC(f){
    return (f-32)*5/9
}

function toF(c){
    return (c*9/5)+32
}

class Share extends Component {
    constructor(props){
        super(props)
        this.state=({
            t:0
        })
        // this.handleChange=this.handleChange.bind(this)
        this.handleTchange=this.handleTchange.bind(this)
        this.handleCchange=this.handleCchange.bind(this)

   }
    componentDidMount(){

   }
    componentWillUnMount(){
 
   }
   handleCchange(t){
        this.setState({
            // scale:'c',
            t
        })
   }
   handleTchange(t){
       this.setState({
        //    scale:'t',
           t
       })
   }
   handleCchange
    render(){
      let Boil=(props)=>{
          if(props.boil>=100){
              return <p>水开了</p>
          }
          return <p>水没开</p>
      }
      const c=toC(this.state.t)
      const f=toF(this.state.t)
      return(
        <div className=''>
               <Share1 
                        onTChange={this.handleTchange}
                        t={c}
                        scale='c' />

               <Share1 
                        onTChange={this.handleCchange}
                        t={f}
                        scale='f' />
                <Boil boil={this.state.t}/>
        </div>
      )
    }
   }
export default Share;