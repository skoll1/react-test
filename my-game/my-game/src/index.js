import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {
    next
}from './redux/actions'

// redux
import {
    Provider
} from 'react-redux'
// 容器组件和展示组件分离的思想

// 容器组件：
// 位置：最顶层，路由处理的部分。
// 读取数据：从redux读取state.
// 数据修改：向redux派发actions.

// 在复杂的应用中，可能会包含多个容器组件。虽然可以嵌套使用容器组件，但是应该尽量使用props传递的方式。


// 展示组件：
// 位置：中间件和子组件
// 读取数据：从props获取数据
// 修改数据：从props调用回调函数

// 


import {
    createStore
} from 'redux';

import reducers from './redux/reducer'
import reducer from './redux/reducer';
let store = createStore(
    reducers,
)

store.subscribe(() => {
    console.log('dispatch')
    console.log(store.getState())
});

// store.dispatch(next(2))

ReactDOM.render(
    <Provider store={store}>
    {/*所有的store可以被下面的组件所使用，在内部是通过context特性实现的。
      使用context，我们可以自由的在组件中传递参数
      还能构建一个父子组件通讯的api，redux和router都是靠这个来实现的  */}
        <App />
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
