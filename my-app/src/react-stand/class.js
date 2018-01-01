class Person{
    static info='haha';
    constructor(name,age){
        // 实例属性只能写在这个里面
        this.name=name;
        this.age=age;
        // return Object.create(null)
        this.getAll=function(){
            console.log(this)
            return this.name
        }
        // 这种定义的话，这个getAll会变成一个属性，那就是这样的。根本没必要啊。
    }

    getAge(){
        return this.age;
    }
    get name(){
        return this.setName.toUpperCase();
    }
    set name(name){
        console.log('change name')
        // this.name=name;
        // 上面这个方法会导致循环调用，栈溢出。
        this.setName=name;
    }
}
var p1=new Person('haha',20);

// var p2=new Person('lala',20);
// // 类的实例对象
// p1.hasOwnProperty('name');
// // true
// p1.hasOwnProperty('getAll')

// // 实例的属性定义在this，他自己本身的对象上面

// // 方法定义在prototype上面
// p1.__proto__.hasOwnProperty('getAge')


// p1.__proto__==p2.__proto__
// p1.__proto__.getName=function(){
//     return this.name;
// }


// Person.getAll()
// p1.getAll()



// 获取实例对象的原型Object.getPrototypeOf 



