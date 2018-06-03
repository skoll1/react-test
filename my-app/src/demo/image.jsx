import React, { Component } from 'react'
import './index.css'
class Better  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
     this._imgOnLoad=this._imgOnLoad.bind(this)
    //  为什么onload事件需要绑定
   }
   componentDidMount(){
     const imgWidth=this.img.naturalWidth;
     console.log(imgWidth)
    //在这里还是0
   }
   _imgOnLoad(e){
    //  图片onload之后才可以取到这些属性
     console.log('ok')
     let imgWidth=this.img.naturalWidth;
     console.log(this.img.src)
     console.log(imgWidth)
     console.log(e.target)
   }
   _onError(){
     console.log('error');
   }
   _onClick(){
     console.log('onClick')
   }
   _onMouseEnter(){
     console.log('mouseenter')
   }
   _onMouseLeave(){
     console.log('mouseleave')
   }
    render() {
      const {name,alt,url}=this.props
      // 解构赋值更加的简单
      return (
        <div className='demo1'>
          {name}
          <img  
                ref={(img)=>{this.img=img}}
                onLoad={this._imgOnLoad}
                onAbort={this._onAbort}
                onError={this._onError}
                onMouseEnter={this._onMouseEnter}
                onClick={this._onClick}
                onMouseLeave={this._onMouseLeave}
                alt={alt}
                src={url}/>
        </div>
      )
    }
}
export default Better ;