import React, { Component } from 'react'

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
    componentDidMount(){
        // console.log(value)
    }
    render() {
      return (
        <div className='el-radio-group'>
            {/* 这里不再仅仅是显示this.props.children,还需要判断 */}
           {
               React.Children.map(this.props.children,(element,index)=>{
                   let isChecked;
                   if(!element){
                       return null
                   }
                   if(index==0){
                        isChecked=true
                   }else{
                       isChecked=false
                   }
                   const {elementType}=element.type;

                   if(elementType!=='Radio' && elementType!=='RadioButton'){
                       return null
                   }

                //    return React.cloneElement(element,Object.assign({},element.props,{
                //        onChange:this.onChange.bind(this),
                //        model:this.value,
                //        size:this.size,
                //        checked:this.props.value===element.props.valu  
                //    }
                

                //    return React.cloneElement(element,{'index':index})
                // 初级版本
                    
                    return React.cloneElement(element,Object.assign({},element.props,{
                        // 此处的element.props是为了给子元素留出一个自定义的接口。比如我可以在这个子组件里面加上一个size。
                        'index':index,
                         onChange:this.onChange,
                         //这个仅仅是起了一个连接的作用。
                           
                         checked:this.props.value===element.props.value     
                    }))
                
                //    console.log(element)
                //    console.log(this.props.children)
                // 这两个值是一样的   
               })
           }
        </div>
      )
    }
}
export default RadioGroup ;

// reactClone