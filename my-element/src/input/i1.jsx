import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import calcTextareaHeight from './computedHeight'

class Input  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
          textAreaStyle:{
            resize:props.resize
          }
     })
   }




   
    render() {
      // 枚举传进来的props值

      const {
             type,size,prepend,append,icon,autoComplete,validating,
             rows,onMouseEnter,onMouseLeave,
            //  也就是说剩下所有的东西都是传到这个
             ...otherProps
      }=
        this.props;

      let inputClass=classname({
          'is-disabled':this.props.disabled,
          'el-input-group':prepend||append,
          'el-input-group--append':!!append,
          'el-input-group--prepend':!!prepend
      })

      if(size){
        inputClass+=`el-input--${size}`;
      } 
      
      if(type==='textarea'){
        inputClass+='el-textarea'
      }else{
        inputClass+='el-input'
      }


      // return (
      //   <div className=''>
      //        {this.props.placeholder}
      //   </div>
      // )

      // 原来是只有一个return,因为只有一种dom结构，现在可能有两种，所以需要if判断返回两个return.
      if(type==='textarea'){
        return(
          <div className='inputClass'>
              <h1>Now is textarea</h1>
          </div>
        )
      }else{
        return (
          <div  className='inputClass'>
              <h1>Now is input</h1>
              <input 
                      type={type}
                      className="el-input__inner"
                      autoComplete={autoComplete}
                      ref={(input)=>{this.textInput=input}}
                      size={size}

              />
          </div>
        )
      }

    }
}
export default Input ;

Input.defaultProps={
    type:'text',
    autosize:false,
    rows:2,
    autoComplete:'off',
    size:'mini'
}


// 写一个组件首先需要确定的，他可以传入什么值
Input.Proptypes={

   //base
   type: PropTypes.string,
   icon:PropTypes.oneOfType([PropTypes.element,PropTypes.string]),
   disabled:PropTypes.bool,
   name:PropTypes.string,
   placeholder:PropTypes.string,
   readOnly:PropTypes.bool,
   autoFocus:PropTypes.bool,
   maxLength:PropTypes.number,
   minLength:PropTypes.number,
   defaultValue:PropTypes.any,
   value:PropTypes.any,
   
  //  type==text
  size:PropTypes.oneOf(['large','small','mini']),
  // 设置枚举值
  prepend:PropTypes.node,
  append:PropTypes.node,


  // type==textarea
  autosize:PropTypes.oneOfType([PropTypes.bool,PropTypes.object]),
  // 枚举类型
  rows:PropTypes.number,
  resize:PropTypes.oneOf(['none','both','horizontal','vertical']),


  // event
  onFocus:PropTypes.func,
  onBlur:PropTypes.func,
  onChange:PropTypes.func,
  onIconClick:PropTypes.func,
  onMouseEnter:PropTypes.func,
  onMouseLeave:PropTypes.func,


  // autocomplete
  autoComplete:PropTypes.string,
  inputSelect:PropTypes.func,

  // from related
  from:PropTypes.string,
  validating:PropTypes.bool,







}