import React,{Component} from 'react';
import Alert from './show/alert.jsx'
export default class Index extends Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className='index'>
                    <Alert title="alert" type="success" />
            </div>
        )
    }
}