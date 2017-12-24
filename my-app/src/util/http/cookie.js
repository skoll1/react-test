// 首先这个工具函数必须写在src下面，还有就是es6的模块机制还有些不熟悉
// 对cookie功能进行封装
function Cookie(name,value,options){
    if(navigator.cookieEnabled){
        console.log('123')
    }else{
        return '您的浏览器不支持cookie操作'
    }
    console.log(this)
}
// console.log(this)
// this表示所有的类
const name="cookie"

const info={
    name:'Bill',
    age:30,
    work:'web'
}

// 大括号指定要输出的一组变量。这样可以直观的看出到底输出了哪些变量。
export {
        info,
        name,
        // 变量
        Cookie,
        // 类
    }