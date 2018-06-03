import React, { Component } from 'react';
import reactDOM from 'react-dom'
import logo from './logo.svg';
import './App.css';
// 所有的组件的呈现容器


// componsnts
import IMG from './demo/image'
// props

import Clock from './demo/clock'
// state

import Event from './demo/event'
// event

import For from './demo/for'
// if

import Form from './demo/form'
// form

import Extends from './demo/extend'

import Share from './demo/share'

import Ref from './demo/ref'
// ref
import Error from './demo/error'
// error

class App extends Component {
  constructor(){
    super()
    
  }
  componentDidMount() {
  }
  componentDidCatch(err,info){   
  }
  
  render() {
    return (
      <div className="App" ref={(app)=>{this.app=app}}>
      <h1>李巴特儿</h1>
      {/* image组件 */}

      {/* <IMG name="libateer"
             url="http://pic4.nipic.com/2001217/3885730_124701000519_2.jpg"
             alt="libateer"
      /> */}

      <Clock  step='1000' />
      {/* <Clock step='2000' /> */}
      {/* <Clock step='3000'/> */}
      {/* <Event /> */}
      {/* <For /> */}
      {/* <Form /> */}
      {/* <Share /> */}

      {/* <Extends 
        left={<h1>左边</h1>}
        right={<Clock steo='2000' />}
      >
        <span>children</span>
      </Extends> */}
      {/* <Ref /> */}
      <Error>
        {/* 作为父组件 */}
        <Clock step="sdfsdf" />
      </Error>
      </div>


    );
  }
}


export default App;
