import React, { Component } from 'react'
import classname from 'classnames'
import PropTypes from 'prop-types'
// 组件做的事：接收点击，传出去点的值
// 他的设计目的是参考radio，所有的选项中选择一个来实现。

class Radio  extends Component {
    static elementType='Radio' 

    constructor(props) { 
        super(props)
        this.state={
            // checked:this.getChecked(props),
            checked:false,
            focus:false,
     }
     this.handleChange=this.handleChange.bind(this)
     
   }
    onBlur(){
        this.setState({
            focus:false
        })
    }
    onFocus(){
        this.setState({
            foucus:true
        })
    }
    handleChange(){
        const checked=!this.props.isChecked
        if(checked&&!this.props.disabled){
            if(this.props.onChange){
                this.props.onChange(this.props.value)
            }
        }else if(!this.props.disabled){
            this.props.onChange('null')
        }
    }
    render() {
      const {focus,checked} =this.state;
      const {disabled,value,children,isChecked} =this.props;

      let radioClass=classname({
            'el-radio__input':true,
            'is-disabled':disabled,
            'is-checked':isChecked,
            'is-focus':focus
      })
      return (
        <label className="el-radio">
                <span className={radioClass} disabled>
                    <span 
                            
                            className="el-radio__inner"
                            onClick={this.handleChange}
                            onFocus={this.onFocus}
                            onBlur={this.onBlur}
                            ></span>
                    {/* 页面上显示的是这个 */}


                    {/* <input 
                            type="radio" 
                            checked={checked}
                            disabled={disabled}
                            className="el-radio__original"
                            style={{width:15,height:15,zIndex:0}}
                            onChange={this.handleChange}
                            /> */}
                    {/* 这个被隐藏 ,那我可以直接抛弃原来的样式从而实现更好的效果,显示和需要触发的事件都绑定到上面的span元素上面*/}
                </span>
                <span className="el-radio__label">
                    {children||value}
                </span>

        </label>
      )
    }
}
export default Radio ;
Radio.PropTypes={
    value:PropTypes.oneOfType([PropTypes.string,PropTypes.number]).isRequired,
    onChange:PropTypes.func,
    disabled:PropTypes.bool,
    checked:PropTypes.bool,
}
// 这个好像是没法加默认属性的