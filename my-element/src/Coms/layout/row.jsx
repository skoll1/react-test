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
        return style;
    }
    // 辅助计算函数

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
    // 包括以下属性
    // flex-wrap
    // align-content

    // 相应的，项目属性也要有相应的取舍

}
Row.Proptypes={
    tag:Proptypes.string,
    gutter:Proptypes.number,
    flex:Proptypes.string,
    justify:Proptypes.string,
    align:Proptypes.string,
    direction:Proptypes.string,
}