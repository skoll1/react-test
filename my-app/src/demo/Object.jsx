import React,{Component} from 'react';

import './index.css'

class ULMAP extends Component{
    constructor(props){
        super(props)
        this.state=({
            number:[1,2,3,4,5,6,7,8,9,10],
            info:{
                name:'李巴特儿',
                age:22,
                work:'web',
                likes:['apple','book']
            },
            numbers:[1,2,this.info]

        })
        // 这样设计state本身就是有问题的。一定要拆分
    }
    onClick(e){
        console.log('ok')
    }
    mousewhell(e){
        console.log(e)
        console.log('scroll')
    }
    render(){
        var renderInfo=[];
        renderInfo.push(this.state.info);       

        // return (
            // <div>
            //     <ol>
            //         {this.state.number.map((n,index)=>{
            //             return (
            //                 <li key={index} onClick={this.onClick}>{n}</li>
            //             )
            //         })}
            //     </ol>
            // </div>

            // 渲染纯数组

            // <div>
            //     <ul>
            //         {
            //             renderInfo.map((v)=>{
            //                 return (
            //                     <li>
            //                             <div>
            //                                 {v.name}
            //                             </div>
            //                             <div>
            //                                 {v.age}
            //                             </div>
            //                             <div>
            //                                 {v.work}
            //                             </div>
            //                             <div>
            //                                 {
            //                                         v.likes.map((k)=>{
            //                                             return (
            //                                                 <span>{k}</span>
            //                                             )
            //                                         })
                                             
            //                                 }
            //                             </div>
            //                     </li>
            //                 )
            //             })
            //         }
            //     </ul>
            // </div>
            
            //渲染纯对象,里面也可以有数组

            // 纯数组里面有对象

            // 多层级嵌套怎么办？


        //    <div className="mouseWhell" onWheel={this.mousewhell}>

        //     </div>

            
        // )
    }
}

export default ULMAP;