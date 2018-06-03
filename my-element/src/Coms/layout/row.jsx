import React, { Component } from 'react'
import Proptypes from 'prop-types'
import classname from 'classnames'
import 'element-theme-default/lib/row.css'

class Row  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            
     })
   }
   
    getStyle(){
        const style={};
        if(this.props.gutter){
           style.marginLeft=`-${this.props.gutter/2}px`
           style.marginRight=style.marginLeft
        }
        if(this.props.width){
            style.width=`${this.props.width}px`
        }
        if(this.props.height){
            style.height=`${this.props.height}px`
        }
        if(this.props.backgroundcolor){
            style.backgroundColor=`${this.props.backgroundcolor}`
        }
        return style;
    }
    // 辅助计算函数-控制间隔

    render() {
      let btnClass=classname({
          'el-row':true,
          'el-row--flex':this.props.type==='flex',
          'row-bg':true,
      })

      if(this.props.justify){
          btnClass+= ` is-justify-${this.props.justify}`
      }

      if(this.props.align){
          btnClass+= ` is-align-${this.props.align}`
      }
    //也就是说，这就是返回样式的两种方法，一种是根据传入参数的值直接在getStyle函数里面进行js加工，一种就是替换之前写好的css表
    
      const PropDiv=this.props.tag?this.props.tag:'div'
      console.log(PropDiv)
      return (
            <PropDiv className={btnClass} style={this.getStyle()}>
                {this.props.children}
            </PropDiv>
      )
    }
}
export default Row ;
Row.defaultProps={
    tag:'div',
    gutter:50,
    type:'flex',
    justify:'center',
    align:'center',
    // direction:'row',
    // 决定排列顺序
    // 因为他的使用场景决定了只是单行的UI框架，所以不存在所谓的整体布局下的列排布

    // 那这样怎么渲染换行的情况，需要单独做一个列表么？

}
Row.Proptypes={
    tag:Proptypes.string,
    gutter:Proptypes.number,
    flex:Proptypes.string,
    justify:Proptypes.string,
    align:Proptypes.string,
    direction:Proptypes.string,
}