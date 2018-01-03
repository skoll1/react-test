import React, { Component } from 'react'
import Square from './Square'
class Board  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            // 还是可以有自己的单独的state.
     })
     this.handleClick=this.handleClick.bind(this);
   }
   handleClick(i){
       console.log(i);
       const squares=this.props.squares.slice();
    // //    如果有人获胜就无法在落子
       if(this.getSuccess(squares)){
           this.setState({
               infoValue:'有人获胜了，不能再点了'
           })
           return false;
       }
       squares[i]=this.props.xIsNext?'X':'O';
       this.props._handleClik(i)
    
    //    他们还是解耦的，使用原来的数据改造成redux还是很简单的。
   }

   getSuccess(squares){
       const lines=[
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
       ]

       for(let i=0;i<lines.length;i++){
           const [a,b,c]=lines[i];
           if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
          }
       }
       return null;
   }

   renderSquare(i){
       //这个i传的真是很有意思，很多需要找到量都直接可以从这个里面拿了。
       return <Square 
                        value={this.props.squares[i]} 
                        handleClick={this.handleClick.bind(this,i)}
                        // props传递函数的时候把state的参数也传递到里面
                        // name={this.state.name}
              />
   } 
    render() {
      let winner=this.getSuccess(this.props.squares);
      let status;
      if(winner){
          if(winner=='X'){
              winner='毛毛'
          }else{
              winner='花花'
          }
          status='获胜的一方是：'+winner+':'+'游戏结束';
      }else{
          status='下一个出发的是：'+(this.props.nextWho==0?'花花':'毛毛');
        //   这是个什么用法，
      }
      return (
        <div className=''>
                <h1>Board</h1>
                <div className="status">
                    {status}
                </div>
                <div className="board-row">
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>
                <div className="show">
                    {this.props.name}
                </div>
        </div>
      )
    }
}
export default Board ;
