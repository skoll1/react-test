import React,{Component} from 'react';

// react中表单组件分为约束组件和无约束组件
// 约束组件：表单组件中的值并不是由自身来决定，而是通过父组件传递或者本身的state来控制。他的内容的每次变化都会被保存，需要时仅需要通过this.state便能获取。
// 非约束组件：value值不是通过props或者state来设置，仅有其自身来决定。表单组件的值的变化也不会被记录，只能通过dom节点的方式来获取。


// 事件 onChange/onSubmit/onInput
// 在react中，改变state的唯一是this.setState,该方法可以是react系统的扳机，正常情况下（除了直接的操作dom）下多有的页面更新都是由这个方法来触发的。


// 多个输入的解决方法
// 通过给每个元素添加一个name属性，来让处理函数根据event.target.name的值来选择什么？
class INPUT extends Component{
    constructor(props){
        super(props);

        this.state=({
                value1:'',
                option:'',
                sex:'man',
                sing:false,
                swim:false,
                ball:false,

        })
        this.handleChange1=this.handleChange1.bind(this);
        this.handleInput1=this.handleInput1.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
        this.handleRadio=this.handleRadio.bind(this);
        this.handleCheckbox=this.handleCheckbox.bind(this);
    }
    handleChange1(e){
        let value=e
        // console.log(e.target.value);
        this.setState({
            value1:e.target.value
        })
    }
    handleInput1(e){
        // console.log(e.target.value)
    }
    handleSelect(e){
        this.setState({
            option:e.target.value
        },()=>{
            console.log(this.state.option)
        })
        console.log(this.state)
    }
    componentWillUpdate(){
        console.log(this.state.option)
        // 这个是不会得到异步数据
    }
    componentDidUpdate(){
        console.log(this.state.option)
        // 这个之后才会得到异步数据
    }
    handleRadio(e){
        this.setState({
            sex:e.target.value
        })
    }
    handleCheckbox(e){
        let type=e.target.value;
        let checked=e.target.checked;
        console.log(checked)
        console.log(type)
        
        this.setState({
            [type]:checked
        });
        console.log(this.state);
    }
    select(e){
        var a=this.input.selctionStart
        var b=this.input.selectionEnd
        //只是会获得开头和结尾的数字index
        // console.log(this.input.value.substr(a,b))
    }
    render(){
        return(
            <div>
               <div className="in1">
                    <input type="text" value={this.state.value1} onChange={this.handleChange1} onInput={this.handleInput1}/>
                    <p>{this.state.value1}</p>
               </div>
               <div className="select">
                <select name="" id="" value={this.state.option} onChange={this.handleSelect}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <h1>{this.state.option}</h1>
               </div>
               <div className="radio">
                    <input type="radio" name='sex' value='man' checked={this.state.sex==='man'} onChange={this.handleRadio}/>man
                    <input type="radio" name='sex' value='woman' checked={this.state.sex==='woman'} onChange={this.handleRadio}/>woman
                    <h1>{this.state.sex}</h1>
               </div>
               <div className="checkboxs">
                    <p>love</p>
                    <input type="checkbox" name="" id="" checked={this.state.ball} value='ball' onChange={this.handleCheckbox}/>ball
                    <input type="checkbox" name="" id="" checked={this.state.swim} value='swim' onChange={this.handleCheckbox}/>swim
                    <input type="checkbox" name="" checked={this.state.sing} value='sing' onChange={this.handleCheckbox}/>sing
                    
               </div>
            </div>
        )
    }
}
export default INPUT