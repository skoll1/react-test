import React, { Component } from 'react'

// 文件名：大写驼峰
// 组件名：和文件名一致，一个目录的跟组建使用index.js来命名。


class Stand extends Component {
    // 组件内部方法定义顺序
    static

        constructor(props) {
        super(props)
        this.state = ({

        })
    }
    //  getChildContext() { return } redux可以替代

    componentWillMount() {

    }

    componentDidMount() {
        var str = 'EN-US';
        const [la, co] = str.split('-');
    }

    componentWillReceiveProps({ active }) {
        //  使用对象解构newPropsw为active
        this.setState({ active })
        //    使用简短属性来调用setState
    }

    shouldComponentUpdate() {

    }
    componentWillUpdate() {

    }

    componentDidUpdate() {

    }

    componentWillUnmount() {

    }

    //事件处理函数    
    handleClick() {

    }

    onChangeDescription() {

    }

    //getters and  setters 
    get attr() {

    }

    renderAlert({hello}) {
        // 当没有state和ref的时候，使用一个渲染函数而不是定义一个class组件。
        return <div>{hello}</div>
    }


    render() {
        return (
            <div className=''>
                <h1
                    key='123'
                    data-key='123'
                >
                    {/*  */}
                </h1>
            </div>
        )
    }
}
export default Stand;

//将props声明写在类外
const propTypes = {

}

const defaultProps = {

}

Stand.propTypes = propTypes;
Stand.defaultProps = defaultProps;



// 规范和设计模式
// 1.每个文件只包含一个react组件。
// 2.使用jsx语法
// 3.使用es6
// 4.所有子组件都用一个index.js来导出，使用的时候直接引用这个index.js