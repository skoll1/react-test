import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';

// componsnts
import IMG from './event/event.jsx'
import INPUT from './event/input.jsx'
import MOUSE from './event/mouse.jsx'

// demo
// import ULMAP from './demo/Object.jsx'
import Extends  from './demo/extend.jsx'
import ThinkInReact  from './demo/thinkInReact.jsx'

class App extends Component {
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
