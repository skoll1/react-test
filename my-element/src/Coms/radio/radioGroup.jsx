import React, { Component } from 'react'

class RadioGroup  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   }
   
    onChange(value){
        if(this.props.onChange){
            this.props.onChange(value);
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
                   console.log('come here')
                //    console.log(element)
                //    console.log(element.type.name !=='Radio')
                // 这个type为什么是个function
                   if(element.type.name !=='Radio' && element.type.name !=='RadioButton'){
                       return null
                   }
                   console.log('come here')
                   return React.cloneElement(element,Object.assign({},element.props,{
                        //第一个参数是想要clone的元素，第二个参数是想要给这个元素添加的对象。总体就是返回一个新添加了许多对象的新儿子组件。    
                       onChange:this.onChange.bind(this),
                       model:this.props.value,
                       size:this.props.size
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