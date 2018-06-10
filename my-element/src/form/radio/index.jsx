import React, { Component } from 'react'
import Radio from './radio'
// radio主要在他的使用部分需要注意以下几点
// 传入
// 1：value:选择的值
// 2：ischecked
// 3: onChange函数
// 5:disabled的时候尽量不要设置默认的state
// 2:state，维护所有radio值的集合
// 
import RadioButton from './radioButton'
import RadioGroup from './radioGroup'

class Index  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            key:'',
            radio3: '上海',
            radio4: '上海',
            radio5: '上海'
     });


     [
      'onChange',  
     ].forEach((method)=>this[method]=this[method].bind(this));
   } 
    
    onChange(value){
        this.setState({key:value})
    }
    onRadioButtonChange(key,value){
        this.setState({[key]:value})
    }
    render() {
      return (
        <div className=''>
            <h1>radio</h1>
            {/* <div>
                <Radio 
                        value="apple"
                        onChange={this.onChange}
                        isChecked={this.state.key==='apple'}
                        disabled={true}
                        >apple</Radio>
                <Radio 
                        value="banana"
                        onChange={this.onChange}
                        isChecked={this.state.key==='banana'}
                        >banana</Radio>   
            </div> */}
            <h1>radioButton</h1>
            <div>
                {/* <RadioGroup value={this.state.key} onChange={this.onChange}>
                    <Radio 
                            value="apple"
                            disabled={true}
                            >apple</Radio>
                    <Radio 
                            value="banana"
                            >banana</Radio>
                    <Radio 
                            value="orange"
                            >orange</Radio>

                </RadioGroup> */}
            </div>
            <h1>radioButton</h1>
            <div>
                <RadioButton
                    value="apple"
                    >
                </RadioButton>
                {/* <RadioButton
                    value="banana"
                    disabled={true}
                    >
                </RadioButton> */}
            </div>
            <span>{this.state.key}</span>

        </div>
      )
    }
}
export default Index ;