const name="123";
// 算是一个类的私有属性了吧，在react中
class Person{
    constructor(name,age){
        this.name=name;
        this.age=age;
        // return Object.create(null)
    }
    // 这也是个方法，只不过默认返回的是这个对象实例本身，即使返回的是一个空类，js也会自动添加一个空的constructor方法。当然也可以认为的改变指向.

    getAge(){
        return this.age;
    }
    getConst(){
        return name
    }
    // 还可以使用Object.assign()来一次添加多个prototype方法函数。
}
var p1=new Person('haha',20);

var p2=new Person('lala',20);
// 类的实例对象
p1.hasOwnProperty('name');
// true
// 实例的属性定义在this，他自己本身的对象上面

// 方法定义在prototype上面
p1.__proto__.hasOwnProperty('getAge')


p1.__proto__==p2.__proto__
p1.__proto__.getName=function(){
    return this.name;
}



// 获取实例对象的原型Object.getPrototypeOf 