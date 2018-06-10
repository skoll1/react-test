let hiddenTextarea;
const HIDDEN_STYLE=`
height:0 !important;
visibility:hidden !important;
overflow:hidden !important;
position:absolute !important;
z-index:-1000 !important;
top:0 !important;
right:0 !important
`;

const context_style=[
    'letter-spacing',
    'line-height',
    'padding-top',
    'padding-bottom',
    'font-family',
    'font-weight',
    'font-size',
    'text-rendering',
    'text-transform',
    'width',
    'text-indent',
    'padding-left',
    'padding-right',
    'border-width',
    'box-sizing'
]

function calculateNodeStyle(node){
    const style=window.getComputedStyle(node);

    const boxSizing=style.getPropertyValue('box-sizing');

    const paddingSize=(
        parseFloat(style.getPropertyValue('padding-bottom'))+parseFloat(style.getPropertyValue('padding-top'))
    )

    const borderSize=(
        parseFloat(style.getPropertyValue('border-bottom-width'))+parseFloat(style.getPropertyValue('border-top-width'))
    )
    const contextStyle=context_style.map(name=>`${name}:${style.getPropertyValue(name)}`).join(';')
    return {
        contextStyle,
        paddingSize,
        borderSize,
        boxSizing
    }
}


export default function textHeight(targetNode,minRows,maxRows){
    if(!hiddenTextarea){
        hiddenTextarea=document.createElement('textarea');
        document.body&&document.body.appendChild(hiddenTextarea)
    }

    let{
        paddingSize,
        borderSize,
        boxSizing,
        contextStyle,
    }=calculateNodeStyle(targetNode);
    

    hiddenTextarea.setAttribute('style',`${contextStyle};${HIDDEN_STYLE}`)
    hiddenTextarea.value=targetNode.value||targetNode.placeholder||'';

    let height=hiddenTextarea.scrollHeight;
    if(boxSizing==='border-box'){
        height=height+paddingSize;
    }else if(boxSizing==='content-box'){
        height=height-paddingSize;
    }
    // 
    hiddenTextarea.value='';
    let singleRowHeight=hiddenTextarea.scrollHeight-paddingSize;

    if(minRows!==undefined){
        let minHeight=singleRowHeight*minRows;
        if(boxSizing==='border-box'){
            minHeight=minHeight+paddingSize+borderSize;
        }
        height=Math.max(minHeight,height);

    }
    
    if(maxRows!==undefined){
        let maxHeight=singleRowHeight*maxRows;
        if(boxSizing==='border-box'){
            maxHeight=maxHeight+paddingSize+borderSize;
        }
        height=Math.min(maxHeight,height);
    }
// 创建一个看不见的操作元素的东西，同步内容然后算出他的高度在改变另一个的样式。
    return {
        height:height+'px'
    }
}