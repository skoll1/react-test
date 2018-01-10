import React, { Component } from 'react'
import Tween from 'rc-tween-one';
class Blur  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({

     })
   } 
    render() {
      return (
        <div className=''>
            <Tween animation={{
                // blur:'10px',
                duration:2000,
                // sepia:'100%'
            }}>
            <img 
                    src="https://pic.36krcnd.com/201801/03004912/byc8jkl2fvlyqj3j!yestone" alt="" 
                    style={{
                        width:'500px',
                        brightness:'10%'
                        }}/>
            </Tween>
            <ul>
                <li>
                    filter参数
                </li>
                <li>
                    blur():给图片设置高斯模糊，值越大越模糊。
                </li>
                <li>
                    brightness(10%):变亮或者变暗
                </li>
                <li>
                    contrast(10%):调整图像的对比度
                </li>
            </ul>
        </div>
      )
    }
}
export default Blur ;