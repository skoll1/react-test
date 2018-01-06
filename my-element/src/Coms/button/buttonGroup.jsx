import React, { Component } from 'react'
import className from 'classnames'

class ButtonGroup  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
      return (
        <div className="el-button-group">
            {this.props.children}
        </div>
      )
    }
}
export default ButtonGroup ;