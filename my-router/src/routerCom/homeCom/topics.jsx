import React, { Component } from 'react'

class Topics  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
   componentDidMount(){
       console.log(this.props.match)
       console.log(this.props.location)
      //  上一个传递的参数都在location参数里面
   }
    render() {
      return (
        <div className=''>
                home/topics
                <div className="showObject">
                  <ul>
                    <li>
                      {this.props.location.state.name}
                      {/* 这个如果单独显示的时候只能是单个数据，绝对不能再里面渲染出来数组 */}
                    </li>
                  </ul>
                </div>
        </div>
      )
    }
}
export default Topics ;