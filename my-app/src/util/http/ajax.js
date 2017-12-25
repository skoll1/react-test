// let getHeades = new Headers({
//     "Content-Type": "text/plain",
//     "Content-Length": 1000,
//     "X-Custom-Header": "ProcessThisImmediately",
// });

// let postHeaders = new Headers({
//     "Content-Type": "application/x-www-form-urlencoded"
// })

var myInit = {
    method: 'GET',
    getHeaders:{
        "Content-Type": "text/plain"
    },
    mode: 'cors',
    cache: 'default'
};
// 写进去有问题
function checkStatus(response) {
    if (response.status >= 200 && response.status < 300) {
        console.log('参数正确')
      return response
    } else {
      var error = new Error(response.statusText)
      error.response = response
      throw error
    }
  }

// header设置不进去。。。
// 默认的参数对象都要这样写
export default async function ajax(url,{method='GET',type='json',getHeaders={"Content-Type": "text/plain",},timeout=1000,}={}){
    if (!window.fetch) {
        console.log('fetch')
        var result = null;
        if (method === 'GET'||method==='get') {
            console.log('options')
            console.log(getHeaders)
            result = await fetch(url, {
                method: method,
                //解决深度拷贝引用地址问题
                headers:JSON.parse(JSON.stringify(getHeaders)),
            }) 
                .then(checkStatus)
                .then((res) => {
                    var fn = null;
                    console.log(res.headers.get("Content-Type"))
                    switch (type) {
                        case 'json':
                            // return res.json();
                            fn = res.json();
                            break;
                        case 'text':
                            fn= res.text();
                            break;
                        case 'Blob':
                            fn=res.blob();
                            break;
                        case 'arrayBuffer':
                            fn=fn.res.ArrayBuffer();
                        default:
                            return res.json();
                    }
                    return fn;
                })
                .catch((err) => {
                    return err;
                })
            return result;
        } else {
            console.log(type)
        }
    } else {
        console.log('ajax')
        
        var result=null;
        var xhr=new XMLHttpRequest();
        // xhr.open('get','https://www.easy-mock.com/mock/594fa9d19adc231f3569cdfc/example/proxy');
        xhr.timeout=timeout;
        
        xhr.open(method,url);
        
          
        xhr.onerror=function(e){
            console.log(e);
        }


        xhr.onload=function(e){
            if(xhr.status==200){
                result=e.target.response;
                // console.log(result)
                return result;
            }
            // 为什么错误也是从这个里面给出的，请求地址的错误是服务器给的么？
        }
        xhr.send(null);

        const promise=new Promise((resolve,reject)=>{
            
        })
        
    }
}