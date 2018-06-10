import React,{Component}from 'react';
import classname from 'classnames'
import PropTypes from 'prop-types'
import textHeight from './textHeight'

// 现在还缺个检测用户的输入，是需要直接在里面做的，比如可以传个正则来做简单的匹配，还是需要放到后台来做验证啊。有的的东西是肯定需要后台验证的，比如是否有重复的数据。
// 各种各样的input类型都要做到

class Input extends Component {
    constructor(props){ 
          super(props)
          this.state=({
            textareaStyle:{
                  resize:props.size
              }
          })
        //   this.textarea=React.createRef()
   }
componentDidMount(){
    this.resizeTextarea()
    const {autoFocus}=this.props;
    if(autoFocus){
        // 这里怎么知道他是第一个input元素呢？
        this.text.focus()
    }
   }
resizeTextarea(){
    const {autosize,type}=this.props;
    if(!autosize||type!=='textarea'){
        return;
    }

    const minRows=autosize.minRows;
    const maxRows=autosize.maxRows;
    const textareaCalcStyle=textHeight(this.textarea,minRows,maxRows)
    this.setState({
        textareaStyle:Object.assign({},this.state.textareaStyle,textareaCalcStyle)
    })
}
focus(){
    console.log('li')
    (this.input||this.textarea).foucs()
}
blur(){
    (this.input||this.textarea).blur()
    // console.log(this.textarea)
}
fixControlledValue(value){
    if(typeof value==='undefined'||value===null){
        return ''
    }
    return value;
}

handleChange(e){
    const {onChange,type,prepend,append,autoadd}=this.props;
    // 前面不加的后面加
    // 前面加后面不加
    // 前后都加 1
    // 前后都不加
    
    if(onChange&&type==='textarea'){
        onChange(e.target.value)
        this.resizeTextarea();
    }

    if(onChange&&type==='text'){
        if(prepend&&append&&autoadd==='true'){
            onChange(prepend+e.target+append)
        }else if(prepend&&autoadd==='true'){
            onChange(prepend+e.target.value)
        }else if(append&&autoadd==='true'){
            onChange(e.target.value+append)
        }else{
            onChange(e.target.value)
        }
        
    }
}
handleFocus(e){
    const {onFocus}=this.props;
    if(onFocus){
        onFocus(e)
    }
    console.log('wai')
}
handleBlur(e){
    const {onBlur}=this.props;
    if(onBlur){
        onBlur(e)
    }else{
        this.blur()
    }
}
handleIconClick(e){
    if(this.props.onIconClick){
        this.props.onIconClick(this.text.value)
    }
}


render(){
    const{type,size,prepend,append,icon,autoComplete,validating,rows,onMouseEnter,onMouseLeave,...otherProps}=this.props;

    let inputClass=classname({
        'is-disabled':this.props.disabled,
        'el-input-group':prepend||append,
        'el-input-group--append':!!append,
        'el-input-group--prepend':!!prepend,
        'el-input':type==='text',
        'el-textarea':type==='textarea',
    })
    if(size){
        inputClass+=` el-input--${size}`
    }

    if('value' in this.props){
        otherProps.value=this.fixControlledValue(this.props.value);
        delete otherProps.defaultValue;
    }
    delete otherProps.resize;
    delete otherProps.style;
    delete otherProps.autosize;
    delete otherProps.onIconClick;
    if(type==='text'){
        return(
            <div className={inputClass}>
            {/* 后面在加className会发生覆盖 */}
                    {/* <h1>textarea输入</h1> */}
                    {
                        prepend&&<div className='el-input-group__prepend'>{prepend}</div>
                        
                    }
            {/* 这样就是一个简单的if判断显示的渲染，如果有。。。如果是。。。*/}
                    {typeof icon==='string'? <i className={`el-input__icon el-icon-${icon}`} onClick={this.handleIconClick.bind(this)}>{prepend}</i>:icon}
                    <input 
                            {...otherProps}
                            ref={(element)=>this.text=element}
                            className='el-input__inner'
                            onMouseEnter={onMouseEnter}
                            onMouseLeave={onMouseLeave}
                            onChange={this.handleChange.bind(this)}
                            type="text"/>
                    {validating&& <i className="el-input__icon el-icon-loading"></i>}
                    {append&& <div className="el-input-group__append">{append}</div>}
                    
            </div>
            )
    }else{
        return(
            <div className={inputClass}>
                    <h1>input输入</h1>
                    <textarea
                        {...otherProps}
                        className='el-textarea__inner'
                        style={this.state.textareaStyle}
                        ref={(element)=>this.textarea=element}
                        rows={rows}
                        autoComplete={autoComplete}
                        onChange={this.handleChange.bind(this)}
                        onFocus={this.handleFocus.bind(this)}
                        onBlur={this.handleBlur.bind(this)}
                    >
                    </textarea>
            </div>
            )
     } 
    }
}
export default Input;
Input.propTypes = {
    // base
    type: PropTypes.string,
    icon: PropTypes.oneOfType([PropTypes.element, PropTypes.string]),
    disabled: PropTypes.bool,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    readOnly: PropTypes.bool,
    autoFocus: PropTypes.bool,
    // 源码就没做

    maxLength: PropTypes.number,
    // 文本的时候么
    minLength: PropTypes.number,
    defaultValue: PropTypes.any,
    value: PropTypes.any,
  
    // type !== 'textarea'
    size: PropTypes.oneOf(['large', 'small', 'mini']),
    prepend: PropTypes.node,
    append: PropTypes.node,
  
    // type === 'textarea'
    autosize: PropTypes.oneOfType([ PropTypes.bool, PropTypes.object ]),
    rows: PropTypes.number,
    resize: PropTypes.oneOf(['none', 'both', 'horizontal', 'vertical']),
  
    // event
    onFocus: PropTypes.func,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onIconClick: PropTypes.func,
    onMouseEnter: PropTypes.func,
    onMouseLeave: PropTypes.func,
  
    // autoComplete
    autoComplete: PropTypes.string,
    inputSelect: PropTypes.func,
  
    // form related
    form: PropTypes.string,
    validating: PropTypes.bool,
  }