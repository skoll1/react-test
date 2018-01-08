import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link,NavLink,Prompt } from 'react-router-dom'
class About  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
    }
    render() {
      let match=this.props.match;
      return (
        <div className='about'>
                home/about
            {/* <Prompt message="不要离开我啊" when='true' /> */}
            <Router>
                <div>
                    <div className="nav">
                        <ul>
                            <li>
                                <NavLink to={`${match.url}/rendering`}>
                                    Render with React
                                </NavLink>
                                <NavLink to={`${match.url}/compont`}>
                                    Render with React
                                </NavLink>
                                <NavLink to={`${match.url}/propsState`}>
                                    Render with React
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                    <div className="show">
                            <Route path={match.url} component={renderDefault} />
                            {/* 这个相当于显示默认的元素，比如一个新的页面里面的banner之类的 */}
                            {/* <Route path={`${match.url}/:name`} render={({match})=>(
                                // name是路径参数，这个是匹配url的
                                <div>
                                    <h1>
                                        {match.params.name}
                                    </h1>
                                </div>
                            )} /> */}

                            <Route path={`${match.url}/:name`}  component={showNext} />

                            {/* 1:render根据参数拼接成新的函数 */}
                            {/* 2：Route把所有的都再次写一遍 */}
                            {/* 3：先传到组件里面，然后再新组件里面选择返回组件 */}
                    </div>
                </div>
            </Router>
        </div>
      )
    }
}
export default About ;
 
// 定义简单的函数组建
function renderDefault(){
    return <h1>默认参数</h1>
}

function rendering (){
    return <h1>rendering</h1>
}

function compont(){
    return <h1>compont</h1>
}

function propsState(){
    return <h1>propsState</h1>
}


function showNext({match}){

    return <h1>next</h1>
}