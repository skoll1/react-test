import React, { Component } from 'react'

class For extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            number:[1,2,3,4,5,6,7,8,9,10]
     })
     this.handleClick=this.handleClick.bind(this)
   }
   handleClick(e){
       const dateKey=e.target.getAttribute('data-key')
       let number=this.state.number;

       //添加和删除都必须先把state里面的数据取出来    
       number.splice(dateKey,1)
       console.log('state')
       this.setState({
           number
       })
       console.log(this.state.number)
   }

    render() {

      let NumberList=(props)=>{
          const number=props.number;
          console.log('number')
          console.log(number)
          const listItems = number.map((number,index) =>
          <li   
                onClick={this.handleClick}
                data-key={index}
                key={number.toString()}>
            {number}
          </li>
        );
         
         return (
             <ul>
                 {listItems}
             </ul>
         )
      }

      
      let UserGreeting=(props)=>{
          return <h1>welcome back!</h1>
      }
      let GuestGreeting=(props)=>{
          return <h2>please sign up!</h2>
      }

      let Greeting=(props)=>{
        const isLoggedIn=props.isLoggedIn;
        if(isLoggedIn){
            return <UserGreeting />
        }else{
            return <GuestGreeting/>
        }
        // finally{
        //     return null:如果希望某种情况下不输出组件，那么return null就可以了。
        // }
      }

      // react中使用for循环的方法，把他放在外面做成一个函数
      return (
        <div className=''>
            <div>
                <NumberList number={this.state.number} />
                {/* 直接渲染函数 */}
            </div>
            <div className="if">
                <Greeting isLoggedIn={true} />
            </div>
        </div>
      )
    }
}
export default For ;