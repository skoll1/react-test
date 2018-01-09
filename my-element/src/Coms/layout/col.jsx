import React, { Component } from 'react'
import Proptypes from 'prop-types'
import classname from 'classnames'
import 'element-theme-default/lib/col.css'

class Col  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   }

    getStyle(){
        const style={}
        if(this.props.gutter){
            style.paddingLeft=`${this.props.gutter/2}px`
            style.paddingRight=`${this.props.gutter/2}px`
        }

        return style;
    }
    render() {

      let btnClass=classname({
        'el-col':true,
      }) 

      if(this.props.span){
          btnClass+= ` el-col-${this.props.span}`
      }

      if(this.props.order){
          btnClass+= ` el-col-order${this.props.order}`
      }

      if(this.props.offset){
          btnClass+= ` el-col-offset-${this.props.offset}`
      }
      
      if(this.props.xs){
          btnClass+= ` el-col-xs-${this.props.xs}`
      }
      if(this.props.sm){
        btnClass+= ` el-col-sm-${this.props.xs}`
      }
      if(this.props.md){
        btnClass+= ` el-col-xs-${this.props.md}`
     }
     if(this.props.lg){
        btnClass+= ` el-col-lg-${this.props.lg}`
     }

     if(this.props.align){
         btnClass+= ` el-col-align-${this.props.align}`
     }

    //  扩展子组件的align-self

      return (
        <div className={btnClass} style={this.getStyle()}>
            {this.props.children}
        </div>
      )
    }
}
export default Col ;
Col.Proptypes={
    span: Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),

    order:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
    gutter:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
    sm:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
    xs:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
    md:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
    lg:Proptypes.oneOfType([
        Proptypes.string,
        Proptypes.number,
    ]),
}
Col.defaultProps={
    span:24,
    order:1,
    gutter:10,
    // offset:6,
    // offset的比例也是24份
    // 因为限制不能实现的属性
    // order
}