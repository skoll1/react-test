// 在数据流外面需要强制修改子代。

// 修改的子代是react组建

// 修改的子代是dom元素

// 使用场景
// 1.处理焦点，文本选择和媒体控制
// 2.触发强制动画
// 集成第三方dom库

// 1.ref在有状态组件中的使用：可以通过对组件的ref访问到子组件的props，state,refs。实例方法等。这个是必须访问refs才能找到这个属性。
// console.log(this.ref.state)

// 注意：不要再组件的render方法中访问ref引用，render方法只是返回一个虚拟dom.这时组件不一定能够挂载到dom中或者render返回虚拟dom不一定会更新到dom中

// reactDOM.findDOMNode(this.ref)
// 不管ref设置的值是回掉函数还是字符串，也不管他挂在的地方是组件还是真实的dom元素，这个方法都可以找到真实的dom元素。

// ref属性表示对组建真正实例的引用，render函数渲染组件的时候返回的是组件实例，而渲染dom的时候，返回的是真正的dom节点。如果先要找到组件的真正dom节点，需要使用上面的方法。


import React, { Component } from 'react'

class Refs extends Component {
    constructor(props) {
        super(props)
        this.state = ({
            name:'libateer'
        })
    }
    componentDidMount() {
        this.input.focus();
    }
    render() {
        return (
            <div className=''>
                <input type="text" ref={(input) => { this.input = input }} placeholder=".....haha!" defaultValue="Bob" />
            </div>
        )
    }
}
export default Refs;