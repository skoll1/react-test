import React, { Component } from 'react';
import 'element-theme-default';
// import logo from './logo.svg';
// 连svg都可以使用import么？
import Index from './Coms'
import Input from './input'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Index /> */}
        <Input />
      </div>
    );
  }
}

export default App;
