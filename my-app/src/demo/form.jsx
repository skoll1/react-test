import React,{Component}from 'react';
class Form extends Component {
    constructor(props){
        super(props)
        this.state=({
            value:'请输入你的姓名',
            select:[],
            isgoing:true,
            isnumber:1
        })
        this.textChange=this.textChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
        this.selectChange=this.selectChange.bind(this)
        this.handleCheckChange=this.handleCheckChange.bind(this)
    }
    componentDidMount(){
    }
    componentWillUnMount(){
    }
    textChange(e){
        this.setState({value:e.target.value})
        console.log(e.target.value)
    }
    handleClick(e){
        // e.preventDefault()
        e.preventDefault()
        console.log(this.state)
        console.log('haha')
    }
    selectChange(e){
        let select=e.target.value
        let selected=this.state.select
        selected.push(select)
        this.setState({
            select:selected
        })
        console.log(this.state.select)
    }
    handleCheckChange(e){
        const target=e.target;
        const value=target.type==='checkbox'?target.checked:target.value;
        // 注意是多个等号
        
        const name=target.name;
        this.setState({
            [name]:value
        })
        console.log(this.state)
    }
    render(){
      return(
        <div className=''>
            <form>
                <label htmlFor="Name">
                    name:
                    <input 
                            
                            placeholder={this.state.value}
                            onChange={this.textChange}
                            type="text"/>
                </label>
                <label htmlFor="select">
                pick your favourite color:
                    <select name="" id="" value={this.state.select} onChange={this.selectChange}>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                    </select>
                </label>
                <label htmlFor="isgoing">
                isgoing:
                    <input type="checkbox" 
                           onChange={this.handleCheckChange}
                           checked={this.state.isgoing}
                           name="isgoing" id=""/>
                </label>
                <br/>
                <label htmlFor="isnumber">
                    isnumber or guest
                    <input type="checkbox" 
                           onChange={this.handleCheckChange}
                        //    checked={this.state.isgoing}
                           name="isnumber" />
                </label>
                <input 
                                type="submit" 
                                onClick={this.handleClick}
                                value="submit"/>
            </form>
        </div>
      )
    }
   }
export default Form;