class Point{
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
    toX(){
        console.log(this.x);
    }
}

class Color extends Point{
    constructor(x,y,z){
        super(x,y);
        // 调用父类的constructor（x,y）；
        // 子类必须在constructor中调用super方法，子类的this对象是继承自父类的this对象，然后对其进行加工，如果不调用super方法，子类就得不到this对象。
        // 只有super之后，才能调用this，也就是说es6的继承机制实质上是先创造父类的实例，所以先super，然后再用子类修改this.只有调用this，才能调用this关键字。
        this.z=z;

    }
    toZ(){
        return this.z+this.x;
    }
}
Color.__proto__===Point;
// Color.prototype
// Point.prototype

Color.prototype.__proto__===Point.prototype;

var a=new Color(1,2,'z');

class Hello{
    constructor(){
        // super()
    }
}

// 狗屁，这个根本不是上面的语法实现
Object.setPrototypeOf(Hello.prototype,Point.prototype);
Object.setPrototypeOf(Hello,Point);
Object.setPrototypeOf = function (obj, proto) {
    obj.__proto__ = proto;
    return obj;
  }
var n=new Hello(1,2)




// 可以深挖的地方
// super
// extend 的继承目标。
// 1：只要是有prototype的值，都可以实现继承。
// 2：继承原生的构造函数，在原生的数据结构基础上定义自己的数据结构 myArray(),myArray()，


// mixin:把多个对象合并为一个对象，新对象具有各个组成成员的接口。