import React, { Component } from 'react';
import 'element-theme-default';
// import logo from './logo.svg';
// 连svg都可以使用import么？
// import Index from './Coms'
// 按钮，icon,布局


// import Index from './form/radio/index'
import Index from './form/input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Index />
        {/* <Input /> */}
      </div>
    );
  }
}

export default App;
