import React, { Component } from 'react'
import './index.css'

class GameInfo  extends Component { 
    constructor(props) { 
        super(props);
        this.state={
            reverse:true,
            index:null,
            hang:false,
        };

        [
            'handleClick',
            'handleReverse'
        ].forEach((method)=>this[method]=this[method].bind(this));

   } 
    handleClick(index){
        console.log(index)
        this.props.jump(index)
        this.setState({
            index:index
        })
    }
    handleReverse(){
        console.log('1')
        this.setState({
            reverse:!this.state.reverse
        })
    }
    render() {
        // 行内样式
        // 1.一个style对象
        let hang={
            color:'rgb(18, 18, 83)',
            fontSize:'20px'
        }

        let haha={
            color:this.state.hang?'red':'yellow'
        }
    
    var showList=this.props.historyShowList;

    if(!this.state.reverse){
        showList=this.props.historyShowList.slice();
        showList.reverse()
    }
      return (
        <div className=''> 
            <ul>
                {showList.map((v,index)=>{
                    return (
                       <li key={index} onClick={this.handleClick.bind(this,index)} className={(index==this.state.index)?'show':''}>
                       {/* 按条件渲染一个class是这样的，因为这里必须要用到 */}
                           {v}
                       </li> 
                    )
                })}
            </ul>
           <button onClick={this.handleReverse}>
               正序排列
           </button>
           {/* <div className="hang" style={(this.state.hang)?hang:''}>
                干一架 style不支持这个层级的。但是我们可以在style对象里面进行绑定，也就是说。引入的都是相同的class,但是里面计算的样式早已是千差万别。
                
           </div> */}

           <div style={haha}>
           123
           </div>
        </div>
      )
    }
}
export default GameInfo ;