import React, { Component } from 'react'
import Board from './Board'

class Game  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            squares:Array(9).fill(null),
            name:'123',
            xIsNext:true
     })
   } 

    render() {
      return (
        <div className=''>
            <h1>Game Ok!</h1>
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">

            </div>
        </div>
      )
    }
}
export default Game ;