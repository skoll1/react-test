import React,{Component} from 'react'
class KeyBoard extends Component{
    constructor(props){
        super(props);
    }
    handleKeyDown(e){
        console.log(e);
        console.log(e.charCode)
    }
    render(){
        return(
            <div>
                <textarea name="" id="" cols="30" rows="10" onKeyDown={this.handleKeyDown}></textarea>
            </div>
        )
    }
}
export default KeyBoard;