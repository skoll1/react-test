import React,{Component} from 'react';
import PorpTypes from 'prop-types';
import req from 'raf';
export default class Ts extends Component{
    constructor(props){
        super(props);
        const {children} =props;
        this.state=({
            children:children
        })
    }
    render(){
        return this.state.children
    }
}
