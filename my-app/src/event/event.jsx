import React,{Component} from 'react';
import './index.css'

// 图片定义的事件
class IMG extends Component{
    constructor(props){
        super(props)

        // this._imgOnBort=this._imgOnBort.bind(this);
        this._imgOnLoad=this._imgOnLoad.bind(this)
    }
    componentDidMount(){
        const imgWidth=this.img.naturalWidth;
        
        console.log(imgWidth)
    }
    _imgOnLoad(){
        console.log('ok')
        const imgWidth=this.img.naturalWidth;
        
        console.log(imgWidth)

    }
    _onAbort(){
        console.log('abort')
    }
    _onError(){
        console.log('onError');
        // 这个可以触发/
    }
    _onBlur(){
        console.log('onBlur');
    }
    render(){
        return(
            <div className="dom1">
                <img ref={(img)=>{this.img=img}} onLoad={this._imgOnLoad} onAbort={this.onAbort} onError={this._onError} onBlur={this._onBlur} src="https://c10.neweggimages.com.cn/Hero_Banner/171215_MonAndBaby40off/171215_MonAndBaby40off@Web.jpg" alt=""/>
            </div>
        )
    }
}
export default IMG;