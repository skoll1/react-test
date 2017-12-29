const name="123";
// 算是一个类的私有属性了吧，在react中
import React, { Component } from 'react'

// 文件名：大写驼峰
// 组件名：和文件名一致，一个目录的跟组建使用index.js来命名。


class Stand extends Component {
    // 组件内部方法定义顺序
        static staticFunction(){
            console.log(this.handleClick());
            // this指的是类，而不是实例
        }
        // 这个方法不会被继承，而是直接通过类来调用，这就是静态方法。

        constructor(props) {
            // 他所有的继承都是通过props来实现的。这就是在为什么所有的属性值，甚至方法都要从props传入。难道这个props不仅从component里面，还会从他的定义组件里面把这些东西集合起来？
            super(props)
            // super方法
            this.state = ({

            })
            this.handleClick=this.handleClick.bind(this)
        // es6规范：类方法内部如果有this，他会正式指向类的实例。但是，必须非常小心，一旦单独使用该方法，很可能报错。
        // 一个简单的方法就是在构造方法中绑定this,这样就不会丢失this,出现找不到方法的尴尬。
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

    handleClick(e){
        console.log(e)
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
                    onClick={this.handleClick}
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
// 怪不得这样使用，父类的静态方法可以被子类继承。
// 这个已经明确是组件属性
Stand.defaultProps = defaultProps;
// 好像错了，这个难道是静态属性，按照实现功能来说是静态方法，但是使用形式确实静态属性的样式。





// 规范和设计模式
// 1.每个文件只包含一个react组件。
// 2.使用jsx语法
// 3.使用es6
// 4.所有子组件都用一个index.js来导出，使用的时候直接引用这个index.js



//当创建组建的实例并将其插入DOM时，会依次调用这些方法。
// constructor
// componentWillMount
// render
// componentDidMount


// 编程带给我的是可以不断学习的方向
// 但是说了算是一个终极的目标。