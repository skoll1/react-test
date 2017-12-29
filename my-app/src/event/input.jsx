import React,{Component} from 'react';

class INPUT extends Component{
    constructor(props){
        super(props);

        this.state=({
            value:'hahah',
            select:'name'
        })
        this._inputChange=this._inputChange.bind(this)
        this.select=this.select.bind(this)
        this.handleChange=this.handleChange.bind(this)
        this.radioChange=this.radioChange.bind(this)
        this.radioSelect=this.radioSelect.bind(this)


    }
    _inputChange(e){
        // console.log(e)
    }
    focus(e){
        // console.log(e)
    }
    select(e){
        var a=this.input.selctionStart
        var b=this.input.selectionEnd
        //只是会获得开头和结尾的数字index
        // console.log(this.input.value.substr(a,b))
    }
    keydown(e){
        console.log('输入汉字')
        console.log(e.charCode);
        // console.log(e.type+"："+e.keyCode)
    }
    keyup(e){
        console.log('松开按键')
    }
    handleChange(e){
       
        // console.log(e.target.value)
        var value=e.target.value;
        // this.setState((value)=>{
        //     // console.log(value.select)
        //     select:value
        // },()=>{
        //     console.log(this.state)
        // })

        this.setState({
            select: value
        },()=>{
                console.log(this.state)
            })
    }
    radioChange(e){
        // console.log(e.target.checked)
    }
    radioSelect(e){
        console.log(e.target.checked)
    }
    render(){
        return(
            <div>
                {/* <input type="text" onChange={this._inputChange} 
                                   onFocus={this.focus}
                                   onSelect={this.select}
                                   ref={(input)=>{this.input=input}}
                                   onKeyDown={this.keydown}
                                   onKeyUp={this.keyup}
                /> */}

                {/* <textarea name="" id="" cols="30" rows="10" value={this.state.value} onChange={this.handleChange}>
                </textarea> */}
                <input type="radio" onChange={this.radioChange} onSelect={this.radioSelect}/>

                <select name="" id="" onChange={this.handleChange}>
                    <option value="name">name</option>
                    <option value="age">age</option>
                    <option value="work">work</option>
                </select>
                <span>{this.state.select}</span>
            </div>
        )
    }
}
export default INPUT