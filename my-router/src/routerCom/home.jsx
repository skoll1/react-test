import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,NavLink } from 'react-router-dom'
import About from './homeCom/about'
import HomeHome from './homeCom/home'
import Topics from './homeCom/topics'

import './index.css'
class Home extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 

    render() {
      return (
        <div className=''>
            <Router>
                <div>
                    <ul>
                        <li>
                            <Link to="/">home</Link>
                            {/* 默认显示 */}
                            {/* 只是用来跳转页面 */}
                        </li>
                        <li>
                            <NavLink to="/about" activeClassName='active'>About</NavLink>
                        </li>
                        <li>
                            <Link to={{
                                pathname:"/topics",
                                search:"?sort=name",
                                state:{
                                    price:18,
                                    name:'李巴特儿'
                                }
                            }}>topics</Link>
                        </li>
                    </ul>
                    <hr/>
                <Route exact path="/" component={HomeHome}></Route>
                {/* 路径名和当前window.location匹配时才会渲染UI */}
                <Route exact path="/about" component={About}></Route>
                <Route exact path="/topics" component={Topics}></Route>
                </div>
            </Router>
        </div>
      )
    }
}
export default Home ;