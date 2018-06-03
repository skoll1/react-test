import React, { Component } from 'react'
import Button from './button'

import Row from './layout/row'
// 负责所有的横排显示
import Col from './layout/col'
// 负责所有的竖排显示

// import Radio from './radio/radio'
// import RadioGroup from './radio/radioGroup'
// import RadioButton from './radio/radioButton'


class Index  extends Component { 
    constructor(props) { 
        super(props)
        this.state=({
            loading:false,
            value:1,
            city:'上海',
            radio:'上海'
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
    //    group的
        console.log(value)
        this.setState({
            city:value
        })
    }
    onChangeGroup(key,value,name){
        // 传值他的顺序是可以颠倒么？看一下事件的传值。。。
        console.log(key)
        console.log(value)
        console.log(name)
        // console.log(this)
        this.setState({
            [key]:value,
        })
    }
    outHandleClick(e){
        console.log('outer')
        console.log(e)
    }
    render() {
      return (
        <div className=''>
            <h1>框架开始工作</h1>
           {/* 按钮部分 */}
            <div>
                
                
                {/* <Button plain={true}>
                   type=null
                </Button>

                <Button type="primary">
                    type=primary
                </Button>

                <Button type="text" disabled={true}>
                   type=text
                </Button>
                <h1>禁用状态</h1>
                <Button type="text" disabled={true}>
                    type=text
                </Button> */}
                {/* <h1>
                    颜色倾向
                </h1>
                <Button type="success" onClick={this.outHandleClick}>
                    type=success
                </Button>
                <Button type="warning" 
                    loading={true}
                    >
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
                {/* <Button type="primary" size="large" icon="edit">大型按钮</Button>
                <Button type="primary" icon="menu">正常按钮</Button>
                <Button type="primary" size="small">小型按钮</Button>
                <Button type="primary" size="mini">超小按钮</Button> */}
            </div>



            {/* <h1>布局</h1> */}
            <div>
                <Row gutter="20" backgroundcolor="red" width="1000" height="200" justify="space-between" align='center'>
                    {/* <Col span="4" width="100" height="100" backgroundcolor="green">
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
                    <Col xs="8" sm="6" md="4" lg="3" offset="1" order="2"><div>1</div></Col>
                    <Col xs="4" sm="6" md="8" lg="9" order="1"><div>2</div></Col>
                    <Col xs="4" sm="6" md="8" lg="9"><div>1</div></Col>
                    <Col xs="8" sm="6" md="4" lg="3"><div>2</div></Col>
                </Row> */}
            </div>

            {/* <h1>input</h1> */}
            <div>
                {/* <Radio  
                        checked={this.state.value===1}
                        value="1"
                        onChange={this.onChange}
                >
                    选项1
                </Radio> */}
                {/* <Radio  
                        // 使用形式如下
                        value="2"
                        checked={this.state.value===2}
                        onChange={this.onChange}
                        >
                    选项2
                </Radio> */}
                {/* 值点完都要传到这个里面 ，适用于选项不多的情况，如果选项太多，建议使用select选项*/}
                {/* <Radio  
                        // 使用形式如下
                        value="3"
                        disabled={this.state.value !==3}
                        checked={this.state.value==3}
                        onChange={this.onChange}
                        >
                    选项3
                </Radio> */}

                <h2>按钮组</h2>
                    {/* <RadioGroup  
                                onChange={this.onChangeGroup.bind(this,'radio1','libateer')} 
                                // 这里要传两个参数，一个是出来的值，一个是key值，在这个里面是radio1,这里这个this为什么会是里面出来的值呢？
                                value={this.state.radio1}
                    > 
                        <RadioButton value="上海" size="large" />
                        <RadioButton value="北京" />
                        <RadioButton value="广州" />
                        <RadioButton value="深圳" />
                    </RadioGroup> */}
                <h2>RadioButton</h2>
                {/* <RadioButton value="上海" 
                             onChange={this.onChange}
                             checked={this.state.city==='上海'}
                             first={true}
                             size="large"
                             >
                    上海
                </RadioButton>
                <RadioButton value="巴厘岛"
                             checked={this.state.city==='巴厘岛'}
                             onChange={this.onChange}
                             size="small"
                             
                >
                    土耳其
                </RadioButton>
                <RadioButton value="天津"
                             checked={this.state.city==='天津'}
                             onChange={this.onChange}>
                    天津
                </RadioButton>
                <RadioButton value="南京"
                             checked={this.state.city==='南京'}
                             onChange={this.onChange}>
                    南京
                </RadioButton> */}
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