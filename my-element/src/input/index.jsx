import React, { Component } from 'react'
import Input from './i1'

class Index  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
      return (
        <div className=''>
          <h1>测试input</h1>
          <Input placeholder="这就是需要输入东西的输入框么？" />
        </div>
      )
    }
}
export default Index ;