import React,{Component} from 'react'
import './index.css'

class MOUSE extends Component{
    constructor(props){
        super(props)
    }
    click(e){
        // console.log(e.screenX)
        // 相对于屏幕，并不是浏览器的左上点

        console.log(e.pageX)
        // 以document坐上角为原点，不兼容ie，测试的时候可以

        // console.log(e.clientX)
        // 以浏览器左上角为基准，但是不兼容apple
        //所以只要这两个事件互相补充就可以得到结果 



        // console.log(e.x)
        // 无效

        // console.log(e.offsetX)
        // 也无效。相对于父级定位元素的水平和垂直坐标

        // console.log(e.layerX)
        // 元素内部的相对位置。


        // 鼠标的修改键，只有按下了这些键才可以出发对应的事件

        // shiftKey
        // ctrlKey
        // altKey
        // metaKey

    }
    contextmenu(e){
        e.preventDefault();
        // console.log(e)
    }
    mousemove(e){
        // 必须设置触发开关，比如mouseDown的时候
        // console.log(e.type);
    }
    mousedown(e){
        e.preventDefault()
        // console.log(e.type)
    }
    mouseup(e){
        // console.log(e.type)
    }
    mouseover(e){
        // console.log(e.type)
        // 鼠标进入事件，可以实现类似hover的js特效
    }
    mouseout(e){
        // console.log(e.type)
    }
    focus(){
        console.log('hahah')
    }
    render(){
        return (
            <div className="mouse" 
                onClick={this.click} 
                onContextMenu={this.contextmenu}
                onMouseMove={this.mousemove}
                onMouseDown={this.mousedown}
                onMouseUp={this.mouseup}
                onMouseOver={this.mouseover}
                onMouseOut={this.mouseout}
                onFocus={this.focus}
            >
                    <p>123123</p>
            </div>
        )
    }
}
export default MOUSE;