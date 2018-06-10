import React,{Component}from 'react';
import Input from './input'
class Index extends Component {
    constructor(props){ 
        super(props)
        this.state=({
          textarea:'',
        })
      //   this.textarea=React.createRef()
 }
    componentDidMount(){

   }
    componentWillUnMount(){
 
  }
  onChange(e){
      console.log(e)
      //收集文本框输入的数据,然后根据这东西在看是不是需要拼接 
  }
  handleIconClick(e){
    console.log(e)
  }
    render(){
      return(
        <div className=''>
        
                <Input 
                    type="textarea"
                    placeholder='李巴特儿的日记'
                    // autosize={{minRows:2,maxRows:4}}
                    // autosize={false}
                    // autosize={true}
                    onChange={this.onChange.bind(this)}
                    resize="none"
                />

                <Input 
                    type="text"
                    placeholder='李巴特儿的日记'
                    // prepend='姓名'
                    // prepend里面还可以传入其他的组件，不仅仅是汉字或者字符串
                    autoadd='true'
                    size='large'
                    // disabled={true}
                    // onChange={this.onChange.bind(this)}

                    // icon='time'
                    autoFocus={true}
                    onIconClick={this.handleIconClick.bind(this)}
                    // 选了这个就不能选那个事件绑定函数
                    icon="search"
                />
        </div>
      )
    }
   }
export default Index;