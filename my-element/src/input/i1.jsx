import React, { Component } from 'react'
import PropsTypes from 'props-types'
import classname from 'classnames'
import calcTextareaHeight from './computedHeight'

class Input  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
      return (
        <div className=''>
             
        </div>
      )
    }
}
export default Input ;

Input.defaultProps={
    type:'text',
    autosize:false,
    rows:2,
    autoComplete:'off'
}

Input.Proptypes={

}