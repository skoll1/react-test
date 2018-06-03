import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classname from 'classnames'
import 'element-theme-default/lib/button.css'
import 'element-theme-default/lib/icon.css'
// 这个主要是原来的css支持比较好

// 一个button所需要做的事情：显示的样子，里面接受图标文字,点击事件



class Button  extends Component { 
    constructor(props) { 
        super(props)
        this.state={
            isActive:false,
            // active事件是需要绑定在
            isHover:false,
            // 
     };
    //  这里必须有个分号是什么意思？
     [
        'handleClick',
     ].forEach((method)=>this[method]=this[method].bind(this));

   }
    handleClick(e){
        // if(!this.props.loading){
        //     this.props._onClick&&this.props._onClick(e);
        // }

        this.props.onClick&&this.props.onClick(e);
        // 向外广播事件
        console.log('clickinner')
        
        // 如果是loading状态，那么点击无效
    } 


    render() {
      let btnClass=classname({
          'el-button':true,
          'is-disabled':this.props.disabled,
          'is-loading':this.props.loading,
          'is-plain':this.props.plain
          //点击颜色

      })
    //  1:静态设置

    // 2：动态替换
      if(this.props.type){
          btnClass+=` el-button--${this.props.type}`
        //   注意这里的空格是为了让各个css有间隔
      }
      
     if(this.props.size){
          btnClass+=` el-button--${this.props.size}`
      }
     if(this.props.loading){
        //  优化：loading的时候不显示其他文字，没有点击事件
        return (
            <div className='button'>
                <button 
                        disabled={true}
                        type={this.props.nativeType}
                        // 也有可能是submit
                        className={btnClass}
                >   
                    <i className="el-icon-loading"></i>
                    <span>正在加载中...</span>
                </button>
            </div>
          )
     }else{
        return (
            <div className='button'>
                <button 
                        disabled={this.props.disabled}
                        type={this.props.nativeType}
                        // 也有可能是submit
                        onClick={this.handleClick}
                        className={btnClass}
    
    
                >   
                    {/* children显示的两种情况：1.直接从上面的child继承，2.根据传入的props来实现条件渲染 */}
                    {this.props.icon && !this.props.loading && <i className={`el-icon-${this.props.icon}`}></i>}
                    {/* 难道这个还会按照顺序依次执行是否符合条件么？,这里还是一个坑 */}
                    {/* 显示图标 */}
    
                    <span>{this.props.children}</span>
                    {/* 显示文字 */}
                </button>
            </div>
          )
     }
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

