import React,{Component}from 'react';
import PropTypes from 'prop-types'

// 如何实现对一些小的组件的集合的使用

class CheckboxGroup extends Component {
    constructor(props){
        super(props);
        this.state={
            options:this.props.value||[],
            min:this.props.min,
            max:this.props.max,
        };
   }
    componentDidMount(){

   }
    componentWillUnMount(){
 
  }
    componentWillReceiveProps(nextProps){
      if(nextProps.value!==this.props.value){
        this.setState({
          options:nextProps.value
        })
      }
    }
    onChange(value,checked){
        if(this.state.options.length+1<this.state.max&&this.state.options.length>this.state.min){
          console.log('ok')
          // 反正最大值和最小值都在这个里面
        }
        const index=this.state.options.indexOf(value);
        if(checked){
          if(index===-1){
            this.state.options.push(value);
          }
        }else{
          this.state.options.splice(index,1)
        }

        this.forceUpdate();
        if(this.props.onChange){
          this.props.onChange(this.state.options)
        }

    }
    render(){
      const {options}=this.state;

      const children=React.Children.map(this.props.children,(child,index)=>{
        if(!child){
          return null;
        }


        const elelemtType=child.type.elementType;
       
        if(elelemtType!=='Checkbox'&& elelemtType!=='CheckboxButton'){
         
          return null;
        }
        
        return React.cloneElement(
          child,
          Object.assign({},child.props,{
            key:index,
            checked:child.props.checked||options.includes(child.props.value)||options.includes(child.props.label),
            onChange:this.onChange.bind(this,child.props.value||child.props.label),
          })
        )
      });
   
      return (
        <div className='el-checkbox-group'>
            {children}
        </div>
      )
    }
   }
export default CheckboxGroup;

// CheckboxGroup.childContextTypes = {
//   ElCheckboxGroup: PropTypes.any
// };

CheckboxGroup.propTypes = {
  min: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  max: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  size: PropTypes.string,
  fill: PropTypes.string,
  textColor: PropTypes.string,
  value: PropTypes.any,
  onChange: PropTypes.func,
};