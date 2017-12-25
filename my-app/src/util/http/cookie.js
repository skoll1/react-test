// 首先这个工具函数必须写在src下面，还有就是es6的模块机制还有些不熟悉
// 对cookie功能进行封装
var defaultCookie={
    expires:1,
    secure:true,
    path:'libateer/',
    domain:'www.baidu.com'
}
function Cookie(name, value, options=defaultCookie) {
    if (navigator.cookieEnabled) {
        if (typeof value !== 'undefined') {
            // 如果第二个参数存在，初始化第三个参数
            options = options || {}

            if (value === null) {
                // 如果第二个参数为null,删除这个cookie的值
                value = '';
                options.expires = -1;
            }

            var expires = '';
            if (options.expires && (typeof options.expires === 'number' || options.expires.toUTCString())) {
                // 如果存在时间选项并且这个值类型是数字或者为具体时间
                var date;
                if (typeof options.expires === 'number') {
                    date = new Date();
                    date.setTime(date.getTime() + (options.expires * 24 * 60 * 60 *1000));
                    // 把天数转化为毫秒并加入到时间对象中。
                    // console.log(date)
                    // 这个时间转化有问题
                } else {
                    date = options.expires;
                }
                expires = ';expires=' + date.toUTCString();
            }
            var path = options.path ? ';path=' + options.path : '';
            var domain = options.domain ? ';domain=' + options.domain : '';
            var secure = options.secure ? ';secure=' + options.secure : '';

            var a=[name,'=',encodeURIComponent(value),expires,path,secure,domain].join('');
            // 一旦加上那个东西，就会失效，连时间都没了
            var aa=[name,'=',encodeURIComponent(value),expires,].join('');
            document.cookie=aa;
            // console.log(aa);
            // console.log(a);
            // 把所有的函数写入数字，然后转为字符串。
        } else {
            // 如果第二个值不存在，表示要读取这个cookie的值;
            // console.log('123')
            var value=null;
            if(document.cookie&&document.cookie!=''){
                var cookie=String(document.cookie);
                var newCookie=String(document.cookie).replace(/\s/g,'');
                var Cookie=newCookie.split(';');
                var len=name.length;

                for(var i=0;i<Cookie.length; i++){
                    var get=Cookie[i].substr(0,len);
                    if(get===name){
                        value=Cookie[i].substr(len+1,)
                        return value;
                    }
                   
                }
            }
        }
    } else {
        return '您的浏览器不支持cookie操作'
    }
    // console.log(this)
}
// console.log(this)
// this表示所有的类
const name = "cookie"

const info = {
    name: 'Bill',
    age: 30,
    work: 'web'
}

// 大括号指定要输出的一组变量。这样可以直观的看出到底输出了哪些变量。
export {
    info,
    name,
    // 变量
    Cookie,
    // 类
}