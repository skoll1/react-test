import React, { Component } from 'react'

// 实现禁止复制文本，只要能看到就不可能实现不了这个功能啊。过滤字符，只允许粘贴文字，使用粘贴的时候加上一些东西，版权。
class Board extends Component {
    constructor(props) {
        super(props)
        this.state = ({

        })
        this.handleCopy = this.handleCopy.bind(this);
        this.handleCut = this.handleCut.bind(this);
        this.handlePaste = this.handlePaste.bind(this);
    }
    handleCopy(e) {
        console.log(e)
        // console.log(e.clipboardData.getData())
        // 所有的数据存储在这个里面
        // e.preventDefault();
        console.log(e.clipboardData.setData('text','本复制来自俄罗斯的境外服务器，你小心点'))
        // 只有ie才会给出一个是否加到里面的布而值
    }

    handleCut(e) {
        // console.log(e)
        console.log(e.clipboardData.setData('text','本复制来自俄罗斯的境外服务器，你小心点'))
        // 所有的数据存储在这个里面
       
    }
    handlePaste(e) {
        console.log(e)
        e.clipboardData.setData('text','本复制来自俄罗斯的境外服务器，你小心点')

        // setData不成功啊
        // 这个里面是不能使用这个的
        console.log(e.clipboardData.getData('text'))
        // e.clipboardData.setData('text','本复制来自俄罗斯的境外服务器，你小心点')
        // 获取数据的格式 text,url
        // 这个事件只能在paste事件触发,IEcopy和cut中事件的getData()方法始终返回null.其他浏览器返回空字符串
    }
    render() {
        return (
            <div className='board'>
                <p
                    onCopy={this.handleCopy}
                    onCut={this.handleCut}
                    onPaste={this.handlePaste}

                >ClipboardEvent 接口描述了与修改剪切板相关的事件，这些事件包括 cut 、copy 和 paste 事件。</p>
            </div>
        )
    }
}
export default Board;
