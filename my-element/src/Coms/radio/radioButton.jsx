import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import './index.css'

import Radio from './radio.jsx'
class RadioButton extends Component { 
    static elementType='Radio'
    constructor(props) { 
        super(props)
        this.state=({
            checked:false,
     })
   }
// 这样使用context真的没关系么？ ,炸掉了，this.context.component根本就不行，进行重构，这个方法我不要了。
   parent() {
    // return this.context.component;
    }
   size(){
    //    return this.parent().props.size;
   } 
   isDisabled(){
    //    return this.props.disabled||this.parent().props.disabled;
   }
   activeStyle(){
      
            // return {
            //     backgroundColor:this.parent().props.fill||'',
            //     borderColor:this.parent().props.fill||'',
            //     color:this.parent().props.textColor||'',
            // }
   }
   componentDidMount(){
       console.log(this.props)
   }
   onChange(value){
        if(this.props.onChange&&!this.props.disabled){
            this.setState({
                checked:!this.state.checked
            })
            this.props.onChange(this.props.value)
        }
   }
    render() {
      let radioClass=classname({
        'el-radio-button':true,
        'is-active':this.props.checked
      })

      let spanClass=classname({
        'el-radio-button__inner':true,
        'first':this.props.first
      })

      if(this.props.size){
        radioClass+= ` el-radio-button--${this.size()}`
      }
      return (
        <label 
                className={radioClass}
                checked={this.state.checked}
                disabled={this.props.disabled}
                onClick={this.onChange.bind(this)}
        >
            <span className={spanClass} style={this.state.checked?this.activeStyle():{}}>
                {this.props.children||this.props.value}
            </span>
        </label>
      )
    }
}
export default RadioButton ;