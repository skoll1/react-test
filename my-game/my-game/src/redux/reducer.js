import {
    combineReducers
} from 'redux'

import addRedux from './reducers/'
const reducers=combineReducers({
    ...addRedux
})

export default reducers;
// redux中数据的生命周期

// 调用阶段
// store.dsipatch(action)
// action就是一个个的代办列表
// 你可以在任何地方调用store.dispatch()，组件中，xhr回调中，甚至是定时器中


// reducer
// reducer必须是纯函数，他仅仅是用于计算下一个state.他应该是完全可预测的，多次传入相同的输出必然会产生相同的输出。
// 根reducer应该把多个reducer合并成一个单一的state树。

// redux store保存了根reducer返回的完整的state树。这个新的树就是应用的下一个state，



// 使用redux的理由
// 1：后台需要记录某个用户的操作，记录用户的操作时间--后端实现mvc功能。

// 中间件的机制：给你一次改变action的机会
// 在中间件内，你可以向在外面一样轻松的访问store，所以可以很方便的利用当前的store进行条件判断，用dispatch方法拦截老的dispatch或者发送新的action.


// 完整的react-redux流程
// Provider组件接受redux的store作为props,然后通过context往下传。
// connect函数收到Provider传出的store，然后接受三个参数mapStateToProps,mapDispatchToProps和组件，并将connect和actionCreater以props传入组件，这个时候组件就可以调用actionCreater函数来触发reducer函数返回新的state，connect监听到state变化调用setState更新组件并将新的state传入组件。

            