import React, { Component } from 'react'
import PropTypes from 'prop-types';
import classname from 'classnames'
import './index.css'
class RadioButton extends Component { 
    static elementType='RadioButton'
    constructor(props) { 
        super(props)
        
     this.handleChange=this.handleChange.bind(this);
   }

   activeStyle(){
            return {
                backgroundColor:this.props.fill||'',
                borderColor:this.props.fill||'',
                color:this.props.textColor||'',
            }
   }

   handleChange(value){
       if(this.props.disabled){
           return false;
       }else if(this.props.onChange){
           this.props.onChange(this.props.value)
       }else{
           console.log('请传入函数')
       }
   }
    render() {
      let radioClass=classname({
        'el-radio-button':true,
        'is-active':this.props.checked
      })

      let spanClass=classname({
        'el-radio-button__inner':true,
        'first':this.props.first,
        'is-active':this.props.checked,
      })

      if(this.props.size){
        radioClass+= ` el-radio-button--${this.props.size}`
      }

      return (
        <label 
                className={radioClass}
                // 原来他的checked是根据radio里面传来的state
                disabled={this.props.disabled}
                onClick={this.handleChange.bind(this)}
        >
            <span className={spanClass} style={this.props.checked?this.activeStyle():{}}>
                {this.props.children||this.props.value}
            </span>
        </label>
      )
    }
}
export default RadioButton;
RadioButton.defaultProps={
    checked:true,
},
RadioButton.propTypes={
    // value:PropTypes.oneOfType([PropTypes.string,PropsTypes.number,PropTypes.bool]),
    disabled:PropTypes.bool,
    name:PropTypes.string,
    // name用于表单提交之后想服务器端传送数据，或者在js引用表单数据，注意的是表单提交之后，只有表单元素的name属性才会传递数值。
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}