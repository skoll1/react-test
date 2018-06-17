import React,{Component}from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types'
class Checkbox extends Component {
    static elementType='Checkbox'
    // 打下的标记，唯一ID
    
    constructor(props){
        super(props)
        this.state={
            checked:props.checked,
            // state的值还可以使用根据传入的props来初始化
            focus:props.focus,
            label:this.getLabel(props),
            // 这个定义state的时候还可以使用函数么？

            
        }
   }
  componentWillReceiveProps(nextProps){
    this.setState({
        checked:nextProps.checked,focus:nextProps.focus,label:this.getLabel(nextProps)
    })
  }
  componentDidMount(){
    //   console.log(this.state.label)
  }
  getLabel(props){
    if(props.truelabel||props.falseLabel){
        return props.checked ? props.trueLabel:props.falseLabel;
        // 大小写搞错了
    }else{
        
        return props.label;
    }
  }

  onFocus(){
      this.setState({
          focus:true
      })
  }

  onBlur(){
      this.setState({
          focus:false
      })
  }
  onChange(e){
        if(e.target instanceof HTMLInputElement){
            const {label}=this.state;
            const {trueLabel,falseLabel}=this.props;
            const checked=e.target.checked;
            const group=this.context.ElCheckboxGroup;

            if(group){
                const length=group.state.options.length+(checked?1:-1)
                if(group.props.min!==undefined&&length<group.props.min){
                    return;
                }

                if(group.props.max!==undefined&&group.props.max){
                    return;
                }
            }
            let newLabel=label;
            if(this.props.trueLabel||this.props.falseLabel){
                newLabel=checked?trueLabel:falseLabel;
            }
    
            this.setState({
                checked:checked,
                label:newLabel,
            },()=>{
                if(this.props.onChange){
                    this.props.onChange(checked)
                }
            })
        }
  }
    render(){
      let checkboxClass=classNames({
            'el-checkbox__input':true,
            'is-disabled':this.props.disabled,
            'is-checked':this.state.checked,
            'is-indeterminate':this.props.indeterminate,
            'is-focus':this.state.focus
      })   
      return(
        <label className="el-checkbox">
            <span className={checkboxClass}>
                    <span className='el-checkbox__inner'>

                    </span>
                    <input 
                            className="el-checkbox__original"
                            checked={this.state.checked}
                            disabled={this.props.disabled}
                            onFocus={this.onFocus.bind(this)}
                            onBlur={this.onBlur.bind(this)}
                            onChange={this.onChange.bind(this)}
                            type="checkbox"/>
            </span>
            <span className="el-checkbox__label">
                    {this.props.children||this.state.label}
            </span>
        </label>
      )
    }
   }
export default Checkbox;
Checkbox.propTypes = {
    label: PropTypes.string,
    trueLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    falseLabel: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    disabled: PropTypes.bool,
    checked: PropTypes.bool,
    indeterminate: PropTypes.bool,
    focus: PropTypes.bool,
    onChange: PropTypes.func
  };
  
  Checkbox.defaultProps = {
    checked: false,
    focus: false
  };