import React, { Component } from 'react'
import classname from 'classnames'
import PropTypes from 'prop-types'

class Radio  extends Component {
    static elementType='Radio' 
    constructor(props) { 
        super(props)
        this.state={
            focus:true,
     }
     this.handleChange=this.handleChange.bind(this)
     this.onBlur=this.onBlur.bind(this);
     this.onFocus=this.onFocus.bind(this);
   } 
    handleChange(){
        // if(this.props.onChange){
        //     console.log('click')
        //     this.props.onChange(Number(this.props.value))
        //     // 根据里面的true，false来把接收的
        // }

        if(this.props.disabled){
            return false;
        }else if(this.props.onChange){
                console.log('click')
                this.props.onChange(Number(this.props.value))
                // 根据里面的true，false来把接收的,这个万一传入的不是number该怎么办
            }
        }

    onBlur(){
        // console.log('111')
        //这两个事件都不会输出东西
        this.setState({
            focus:false
        })
    }

    onFocus(){
        // console.log('111')
        this.setState({
            focus:true
        })
    }


    render() {
      const {focus} =this.state;
      const {disabled,value,children,checked} =this.props;

      let radioClass=classname({
            'el-radio__input':true,
            'is-disabled':disabled,
            'is-checked':checked,
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
                    {/* 这个被隐藏 ,那我可以直接抛弃原来的样式从而实现更好的效果*/}
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
    value:PropTypes.oneOfType([Proptypes.string,Proptypes.number]).isRequired,
    onChange:PropTypes.func,
    disabled:PropTypes.bool,
    checked:PropTypes.bool,
}
// 这个好像是没法加默认属性的