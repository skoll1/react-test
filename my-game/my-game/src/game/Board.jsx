import React, { Component } from 'react'
import Square from './Square'
class Board  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            squares:Array(9).fill(null),
            name:'123',
            xIsNext:true
     })
     this.handleClick=this.handleClick.bind(this);
   }
   componentDidMount(){
        let num=['花花','毛毛'];
        let first=Math.round(Math.random())
        this.setState({
            index:first
        })
        
    }

   handleClick(i){
    //    console.log(i);
       const squares=this.state.squares.slice();
    //    如果有人获胜就无法在落子
       if(this.getSuccess(squares)){
           this.setState({
               infoValue:'有人获胜了，不能再点了'
           })
           return false;
       }

       squares[i]=this.state.xIsNext?'X':'O';
       const index=this.state.index==1?'0':'1'
       this.setState({
           squares:squares,
           xIsNext:!this.state.xIsNext,
           index:index
       });
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
       return <Square 
                        value={this.state.squares[i]} 
                        handleClick={this.handleClick.bind(this,i)}
                        // props传递函数的时候把state的参数也传递到里面
                        // name={this.state.name}
              />
   } 
    render() {
      let winner=this.getSuccess(this.state.squares);
      let status;
      if(winner){
          if(winner=='X'){
              winner='花花'
          }else{
              winner='毛毛'
          }
          status='获胜的一方是：'+winner;
      }else{
          status='下一个出发的是：'+(this.state.index==0?'花花':'毛毛');
        //   这是个什么用法，
      }
      return (
        <div className=''>
                <h1>Board</h1>
                <div className="status">
                    {status}
                    {this.state.infoValue?this.state.infoValue:''}
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
        </div>
      )
    }
}
export default Board ;
