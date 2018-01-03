import React, { Component } from 'react'
import Board from './Board'
import {connect} from 'react-redux'
import {next} from '../redux/actions'
import GameInfo from './gameInfo'
// 引入方法


class Game  extends Component { 
    render() {
      return (
        <div className=''>
            <h1>Game Ok!</h1>
            <div className="game-board">
                <Board 
                        squares={this.props.squares}  
                        name={this.props.name} 
                        nextWho={this.props.nextWho} 
                        _handleClik={this.props.next} 
                        // {...this.props}这个里面就不这样使用了
                />
            </div>
            <div className="game-info">
                <GameInfo  historyShowList={this.props.historyShowList} />
            </div>
        </div>
      )
    }
}
export default connect(
    mapStateToProps,
    // 把状态绑定到组件的属性中去。
    mapDispatchToProps,
    // 用store.dispatch来触发操作，这个是封装函数，绑定方法
    // 一共四个参数
)(Game)
// 如果我这里直接connect到Board上面，就不用传值了。

// 原则：尽量只绑定一个顶层组件，或者router处理。从技术上你可以将应用中的任何一个组件connect()到

function mapStateToProps(state){
    // 把状态绑定到组件的属性中
    return {
        squares:state.nextReducer.squares,
        name:state.nextReducer.name,
        // 这里也要弄,也就是说如果我要想在组件中用这样的形式取到数据this.props.nextWho。必须要有如下几步才可以
        // initialState-reducer(return)-provider(store)-mapStateToProps-父组件传入prop-使用this.prop.nextWho
        nextWho:state.nextReducer.nextWho,
        historyShowBoard:state.nextReducer.historyShowBoard,
        historyShowList:state.nextReducer.historyShowList,
    }
}
function mapDispatchToProps(dispatch){
    return {
        next:(index)=>{
            dispatch(next(index))
        }
    }
}