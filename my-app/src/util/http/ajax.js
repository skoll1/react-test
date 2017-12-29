// let getHeades = new Headers({
//     "Content-Type": "text/plain",
//     "Content-Length": 1000,
//     "X-Custom-Header": "ProcessThisImmediately",
// });

// let postHeaders = new Headers({
//     "Content-Type": "application/x-www-form-urlencoded"
// })

// mode cors:同域和带有cors响应头的跨域下可以请求成功。same-origin:只是同域下才能请求成功
// credentials:include 跨域的时候携带cookie.same-origin：相同域名才会发送cookie.
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
export default async function ajax(url,{method='GET',type='json',getHeaders={"Content-Type": "text/plain",},timeout=1000,mode="cors",credentials="include",cache="default"}={}){
    if (window.fetch) {
        console.log('fetch')
        var result = null;
        if (method === 'GET'||method==='get') {
            result = await fetch(url, {
                method: method,
                //解决深度拷贝引用地址问题
                headers:JSON.parse(JSON.stringify(getHeaders)),
            }) 
                .then(checkStatus)
                .then((res) => {
                    console.log(res.headers.get('Last-Modified'))
                    // 这里为什么只能读到一个参数。。
                    res.headers.forEach((data)=>{
                        console.log(data);
                    })
                    console.log(res)
                    var fn = null;
    
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


// 问题headers加不到里面去
// 错误处理机制不完善。