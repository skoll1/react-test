import React, { Component } from 'react';
import reactDOM from 'react-dom'
// import logo from './logo.svg';
import './App.css';
// import ck from 'js-cookie';
// 

// componsnts
// import IMG from './event/event.jsx'
import INPUT from './event/input.jsx'
// import MOUSE from './event/mouse.jsx'
// 引入eport default输出的函数不用使用括号，还可以为该函数指定任意的名字。

// demo
// import ULMAP from './demo/Object.jsx'
// import Extends  from './demo/extend.jsx'
// import ThinkInReact  from './demo/thinkInReact.jsx'
import For  from './demo/for.jsx'
import Ref  from './demo/ref.jsx'


// 引入js函数，只要是输出的时候使用的是export输出，引入的时候必须加大括号{}才不会出错
// import {Cookie} from './util/http/cookie.js'

import ajax from './util/http/ajax.js'

import Pro from './demo/portals.jsx';

// import Transition from './element/util/transition.jsx'; 

import IndexElem from './element/index.jsx'
import Alert from './element/show/alert.jsx'

import Board from './event/ClipboardEvent.jsx'


import AA from './animate/a1'

class App extends Component {
  constructor(){
    super()
    this.state=({
      showModel:false,
      name:'haha'
    })
    this.handleShow=this.handleShow.bind(this)
  }
  componentDidMount() {
    // Cookie('123','hahahah');
    // Cookie('hahah','789');
    // Cookie('888','1123123')
    // var a=Cookie('888');
    // console.log(a)


    // ajax
    // 图片
    // http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg
    // ajax('https://cnodejs.org/api/v1/topics')
    //   .then((data) => {
    //     console.log(data)
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   }) 
   
    // render()渲染组件时返回的是组件实例，render()渲染dom的时候，返回的是具体的dom节点。
    // console.log(this.app)
    // console.log(reactDOM.findDOMNode(this.ref).state)

  }
  componentDidCatch(err,info){
    
  }
  handleShow(){
    this.setState({
      showModel:true,
    })
    console.log(this.state)
  }
  render() {
    return (
      <div className="App" ref={(app)=>{this.app=app}}>
        {/* 官方demo练习 */}
        {/* <ULMAP/> */}
        {/* <Extends left={<IMG />} right={<INPUT />} /> */}


        {/* <INPUT /> */}
        {/* <Extends>
              <MOUSE/>
              hahahahah
              <MOUSE/> 
          </Extends> */}

        {/* <ThinkInReact/> */}


        {/* <For len='10'/> */}


        {/* <Transition>EAD
          <h1>hahah</h1>
        </Transition> */}
        
        {/* <IndexElem /> */}

        {/* <For len='10'/> */}


        {/* <Ref ref={(ref)=>{this.ref=ref}}/> */}

          {/* <button onClick={this.handleShow}>show</button>
          {this.state.showModel?<Pro />:null}
           */}
           {/* <Board /> */}
           
           <AA />
      </div>
    );
  }
}


export default App;
