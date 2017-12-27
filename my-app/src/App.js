import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import ck from 'js-cookie';
// 

// componsnts
// import IMG from './event/event.jsx'
// import INPUT from './event/input.jsx'
// import MOUSE from './event/mouse.jsx'
// 引入eport default输出的函数不用使用括号，还可以为该函数指定任意的名字。

// demo
// import ULMAP from './demo/Object.jsx'
// import Extends  from './demo/extend.jsx'
// import ThinkInReact  from './demo/thinkInReact.jsx'


// 引入js函数，只要是输出的时候使用的是export输出，引入的时候必须加大括号{}才不会出错
// import {Cookie} from './util/http/cookie.js'

import ajax from './util/http/ajax.js'

// import Transition from './element/util/transition.jsx'; 

import IndexElem from './element/index.jsx'
import Alert from './element/show/alert.jsx'

class App extends Component {
  componentDidMount() {
    // Cookie('123','hahahah');
    // Cookie('hahah','789');
    // Cookie('888','1123123')
    // var a=Cookie('888');
    // console.log(a)


    // ajax
    // 图片
    // http://pic4.nipic.com/20091217/3885730_124701000519_2.jpg
    ajax('https://cnodejs.org/api/v1/topics')
      .then((data) => {
        console.log(data)
      })
      .catch((e) => {
        console.log(e)
      })

    
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

        {/* <ThinkInReact/> */}

        {/* <Transition>
          <h1>hahah</h1>
        </Transition> */}
        
        <IndexElem />

      </div>
    );
  }
}


export default App;
