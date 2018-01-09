import React, { Component } from 'react'
import Button from './button'
import Row from './layout/row'
import Col from './layout/col'
import Radio from './radio/radio'

class Index  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            loading:false,
            value:1
     });


     [
        'handleClick',
        'onChange'
     ].forEach((method)=>this[method]=this[method].bind(this));
   } 
    handleClick(e){
        this.setState({
            loading:!this.state.loading,
        })
        // 模拟加载资源
        setTimeout(()=>{
            this.setState({
                loading:!this.state.loading
            })
        },2000)
        
    }
    onChange(value){
        console.log(value)
        this.setState({value})
    }
    render() {
      return (
        <div className=''>
            <h1>框架开始工作</h1>
           
            <div>
                {/* <h1>基础用法</h1>
                <Button>
                   type=null
                </Button>

                <Button type="primary">
                    type=primary
                </Button>

                <Button type="text">
                   type=text
                </Button>
                <h1>禁用状态</h1>
                <Button type="text" >
                    type=text
                </Button>
                <h1>
                    颜色倾向
                </h1>
                <Button type="success">
                    type=success
                </Button>
                <Button type="warning" >
                    type=warning
                </Button>
                <Button type="danger" >
                    type=danger
                </Button>
                <Button type="info" >
                    type=info
                </Button>
                <h1>hover显示颜色</h1>
                <Button type="danger" plain={true}>
                    plain=true 
                </Button>
                <Button type="info" plain={true}>
                    plain=true 
                </Button>
                <Button type="success" plain={true}>
                    plain=true 
                </Button>
                <Button type="warning" plain={true}>
                    plain=true 
                </Button>
                <h1>
                    添加图标
                </h1>
                <Button type="primary"  icon="edit">
                    icon=edit
                </Button>
                <Button type="danger" icon="share">
                    icon=share 
                </Button>
                <Button  icon="search">
                    icon=search
                </Button>
                <Button type="primary">
                    上传<i className="el-icon-upload el-icon-right"></i>
                </Button>
                <h1>按钮组</h1>
                <Button.Group>
                    <Button type="primary" icon="arrow-left">上一页</Button>
                    <Button type="primary">下一页<i className="el-icon-arrow-right el-icon-right"></i></Button>
                </Button.Group>

               
                <Button.Group>
                    <Button type="primary" icon="edit"></Button>
                    <Button type="primary" icon="share"></Button>
                    <Button type="primary" icon="delete"></Button>
                </Button.Group> */}

                <h1>加载事件,组件交互</h1>
                {/* <Button type="primary" icon="edit" _onClick={this.handleClick} loading={this.state.loading}>
                    
                </Button> */}

                <h1>按钮大小</h1>
                {/* <Button type="primary" size="large">大型按钮</Button>
                <Button type="primary">正常按钮</Button>
                <Button type="primary" size="small">小型按钮</Button>
                <Button type="primary" size="mini">超小按钮</Button> */}
            </div>
            <div>
                <h1>布局</h1>
                <Row>
                    {/* <Col span="4" gutter="20">
                        1
                    </Col>
                    <Col span='8'>
                        2
                    </Col>
                    <Col span='12'>
                        3
                    </Col> */}
                    {/* 整个布局是24份的 */}
                </Row>
                {/* <Row>
                    <Col xs="8" sm="6" md="4" lg="3"><div>1</div></Col>
                    <Col xs="4" sm="6" md="8" lg="9"><div>2</div></Col>
                    <Col xs="4" sm="6" md="8" lg="9"><div>1</div></Col>
                    <Col xs="8" sm="6" md="4" lg="3"><div>2</div></Col>
                </Row> */}
            </div>
            <div>
                <h1>按钮</h1>
                <Radio  
                        checked={this.state.value===1}
                        value="1"
                        onChange={this.onChange}
                >
                    选项1
                </Radio>
                <Radio  
                        // 使用形式如下
                        value="2"
                        checked={this.state.value===2}
                        onChange={this.onChange}
                        >
                    选项2
                </Radio>
                {/* 值点完都要传到这个里面 ，适用于选项不多的情况，如果选项太多，建议使用select选项*/}
                <Radio  
                        // 使用形式如下
                        value="3"
                        disabled={this.state.value !==3}
                        checked={this.state.value==3}
                        onChange={this.onChange}
                        >
                    选项3
                </Radio>
            </div>

        </div>
      )
    }
}

// 
export default Index ;

// 注意问题：<箭头的className拼接的时候都是加-arrow-
// 图标这里的话还要想想怎么和阿里妈妈的结合。使用class这种形式来显示icon 
// 这样在写组件的时候必须要先约定好css样式。或者说跟样式有关的显示全都靠className来呈现，然后靠着传入数据来轻易实现。