import React,{Component} from 'react'
// import PropTypes from 'prop-type'

export default class Alert extends Component{
    constructor(props){
        super(props);

        this.state={
            visiable:true
        }
    }
    close(){
        this.setState({
            visiable:false
        })
    }
    onAfterLeave(){
        if(this.props.onClose){
            this.props.onClose();
        }
    }
    render(){
        const {title,type}=this.props
        return (
            <div>
                <div className="top" className={`${this.props.type}`}>
                    {this.props.title}
                </div>
            </div>
        )
    }
}