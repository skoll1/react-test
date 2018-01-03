import Tween from 'rc-tween-one';
import React from 'react';
// 使用延迟可以实现两个动画的矢量加和。
// 组合动画如何实现重复执行。setInterval()设置moment
class Demo extends React.Component {
    constructor() {
      super(...arguments);
    }
  
    render() {
      return (<Tween animation={[{ translateX: '500px', delay: 2000 }, { delay: -350, y: 150 }]}
        style={{ opacity: 1, height: 300, transform: 'translate(50px,30px)' }}
      >
        <div>执行动效</div>
      </Tween>);
    }
  }
  export default Demo;