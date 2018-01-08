import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import 'element-theme-default/lib/button.css'
import 'element-theme-default/lib/icon.css'
// 这个主要是原来的css支持比较好

class Button  extends Component { 
    constructor(props) { 
        super(props)
        this.state={

     };

     [
        'handleClick',
     ].forEach((method)=>this[method]=this[method].bind(this));

   }
    handleClick(e){
        // if(!this.props.loading){
        //     this.props._onClick&&this.props._onClick(e);
        // }

        this.props._onClick&&this.props._onClick(e);
        // 向外广播事件
        
        // 如果是loading状态，那么点击无效
    } 


    render() {
      let btnClass=classname({
          'el-button':true,
          'is-disabled':this.props.disabled,
          'is-loading':this.props.loading,
          'is-plain':this.props.plain

      })
    //  1:静态设置

    // 2：动态替换
      if(this.props.type){
          btnClass+=` el-button--${this.props.type}`
        //   注意这里的空格是为了让各个css有间隔
      }else if(this.props.size){
          btnClass+=` el-button--${this.props.size}`
      }
    
      return (
        <div className='button'>
            <button 
                    disabled={this.props.disabled}
                    type={this.props.nativeType}
                    onClick={this.handleClick.bind(this)}
                    className={btnClass}


            >   
                {/* children显示的两种情况：1.直接从上面的child继承，2.根据传入的props来实现条件渲染 */}
                {this.props.loading && <i className="el-icon-loading"></i>}
                {this.props.icon && !this.props.loading && <i className={`el-icon-${this.props.icon}`}></i>}
                {/* 难道这个还会按照顺序依次执行是否符合条件么？ */}

                <span>{this.props.children}</span>
            </button>
        </div>
      )
    }
}
export default Button ;

Button.propTypes={
    onClick:PropTypes.func,
    type:PropTypes.string,
    size:PropTypes.string,
    icon:PropTypes.string,
    loading:PropTypes.bool,
    nativeType:PropTypes.string,
    disabled:PropTypes.bool,
    plain:PropTypes.bool,
}
// 为什么找不到他的项目的文件夹
Button.defaultProps={
    type:'default',
    nativeType:'button',
    loading:false,
    disabled:false,
    plain:false,
    icon:'left',
}

