import React, { Component } from 'react'
import PropTypes from 'prop-types'

// 实现这个组件的必要性，为了调用组件更加方便。使用更加方便。当多个单个组件大量使用的时候。
// 这样的话使用很是麻烦，要实现一组选项的话需要做的东西太多了，每个都需要绑定这些东西

// 从使用形式上来看:要实现的功能，代理所有子组件的事件，和不必要的属性

// 那这个的前提就是radio和radioButton的所有事件写法完全一样，这样才有可能实现组件的复用

// 涉及的知识点，父子组件小程度的结合
class RadioGroup  extends Component { 
    constructor(props) { 
        super(props)

        this.onChange=this.onChange.bind(this);
   }
   
    onChange(value){
        // 克隆元素绑定的是这个函数，
        console.log('你点了克隆元素的函数')
        console.log(value)
        if(this.props.onChange){
            this.props.onChange(value);
        }
    }

    getChileContext(){
        return {
            component:this
        }
    }
   
    render() {
      return (
        <div className='el-radio-group'>
            {/* 这里不再仅仅是显示this.props.children,还需要判断 */}
           {
               React.Children.map(this.props.children,(element,index)=>{
                   if(!element){
                       return null
                   }
                //    if(index==0){
                //         isChecked=true
                //    }else{
                //        isChecked=false
                //    }
                // 这一段没看懂

                   const {elementType}=element.type;

                   if(elementType!=='Radio' && elementType!=='RadioButton'){
                       return null
                   }

                    return React.cloneElement(element,Object.assign({},element.props,{
                        // 此处的element.props是为了给子元素留出一个自定义的接口。比如我可以在这个子组件里面加上一个size.也就是说扩展方面还可以从这里添加参数
                       
                         onChange:this.onChange,
                         //这个仅仅是起了一个连接的作用。
                        
                         isChecked:this.props.value===element.props.value,
                         size:this.props.size  
                    }))
               })
           }
        </div>
      )
    }
}
export default RadioGroup ;

// reactClone
// RadioGroup.childContextTypes = {
//     component: PropTypes.any
//   };
  
RadioGroup.propTypes = {
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    size: PropTypes.string,
    textColor: PropTypes.string,
    fill: PropTypes.string,
    onChange: PropTypes.func
}