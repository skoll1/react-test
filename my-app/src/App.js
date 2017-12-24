import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// componsnts
import IMG from './event/event.jsx'
import INPUT from './event/input.jsx'
import MOUSE from './event/mouse.jsx'
// 引入eport default输出的函数不用使用括号，还可以为该函数指定任意的名字。

// demo
// import ULMAP from './demo/Object.jsx'
import Extends  from './demo/extend.jsx'
import ThinkInReact  from './demo/thinkInReact.jsx'


// 引入js函数，只要是输出的时候使用的是export输出，引入的时候必须加大括号{}才不会出错
import {name,Cookie,info,} from './util/http/cookie.js'

class App extends Component {
  componentDidMount(){
    Cookie();
    console.log(info)
  }
  render() {
    return (
      <div className="App">
          {/* 官方demo练习 */}
          {/* <ULMAP/> */}
          {/* <Extends left={<IMG />} right={<INPUT />} /> */}

          {/* <Extends>
              <MOUSE/>
              hahahahah
              <MOUSE/> 
          </Extends> */}

          <ThinkInReact/>
          


      </div>
    );
  }
}


export default App;
