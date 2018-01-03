// 断点动画.现在仅仅是知道this.animation可以传入一个数组来对应自己想要的css效果。
import React,{Component} from 'react';
import TweenOne from 'rc-tween-one';
import './index.css'

class Demo extends Component{
    constructor(props){
        super(props);
        this.moment = null;
        // 这样的话在animation里面就有一些是不能使用的属性，
        this.animation = [
                { left: '20px',scale:0 },
                // { left: '40%' },
                // { top: '30px' },
                { scale: 0.7 },
                { scale: 1 },
                // { top: 0 },
                // { left: '0%' },
        ];
        this.state = {
            moment: null,
            paused:false,
        };

    }

    onChange = (e) => {
        console.log(e)
        if (e.mode === 'onComplete' && e.index === 6) {
          setTimeout(() => {
            this.setState({
              moment: 0,
            });
          }, 0);
        } else {
          this.setState({
            moment: null,
          });
        }
      } 
    render(){
        return(
            <div>
               <TweenOne
        animation={this.animation}
        paused={this.state.paused}
        onChange={this.onChange}
        moment={this.state.moment}
        style={{ transform: 'scale(1)' }}
        className="code-box-shape"
      /> 
            </div>
        )
    }


}
export default Demo;