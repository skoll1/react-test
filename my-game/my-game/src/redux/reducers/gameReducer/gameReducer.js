import {
    NEXT,
    // 接收到action的type即可
    JUMP

    // next
}from '../../actions'

let first=Math.round(Math.random())

const initialState={
    squares:Array(9).fill(null),
    xIsNext:true,
    nextWho:first,
    name:'你咋不敢和旅长干一架呢？',
    historyShowBoard:[],
    historyShowList:[],
    currentIndex:null,
}

const nextReducer=function(state=initialState,action){
    switch(action.type){
       case NEXT:
            var squares=Object.assign([],state.squares);
            // 这个数据是都必须先取出来，
            squares[action.index]=state.xIsNext?'X':'O';
            // 然后再操作数据

            // 更新数组

            let nextWho=(state.nextWho==1)?'0':'1';
            // 决定下一个是谁
            // 这里好像可以省一个

            const historyShowList=Object.assign([],state.historyShowList);
            const historyShowBoard=Object.assign([],state.historyShowBoard);
            const n2=action.index%3+1;
            const n1=Math.floor(action.index/3)+1;
            const newStr=n1+','+n2
            historyShowList.push(newStr);
            historyShowBoard.push(squares);
             // 添加历史记录

            const xIsNext=!state.xIsNext
            // 决定下一个是什么棋子
            return{
                ...state,
                nextWho,
                squares,
                xIsNext,
                historyShowBoard,
                historyShowList,
                // 返回新的数据



            }
        case JUMP:
            let currentIndex=state.currentIndex;
            nextWho=(action.index%2)?'0':'1';
            currentIndex=action.index
         
            
            return {
                ...state,
               currentIndex,
               nextWho
            }
            
            


        default:
            console.log('123')
            return {
                ...state
            }
    }
}
export default nextReducer;
// 这个里面有一部分数据是自己计算的。整个事件真正提交的只是一个i的值，然后这边自己算出了一些属性


// 渲染层那个页面也是很多根据传来的一个数据来计算出其他的状态。


// 时隔两个星期再次出现了变量名拼错的sb行为