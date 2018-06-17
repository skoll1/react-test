import React,{Component}from 'react';
import Checkbox from './checkbox'
import CheckboxGroup from './checkboxGroup'
class Index extends Component {
    constructor(props){
      super(props) 
      // 组合框的state
      this.state={
        checkList:['1','2',3],
        checkAll:false,
        isIndeterminate:false,
        cities:['上海','广州','北京'],
        checkedCities:[]
      }   
   }
    componentDidMount(){

   }
    componentWillUnMount(){
 
  }
  onChange(e){
      console.log(e)
  }
  handleCheckAllChange(checked){
    const checkedCities=checked?['上海','北京','广州']:[];

    this.setState({
      isIndeterminate:false,
      checkAll:checked,
      checkedCities:checkedCities,
    })
  }

  handleCheckAllCitiesChange(value){
      const checkedCount=value.length;
      const citiesLength=this.state.cities.length;

      this.setState({
        checkedCities:value,
        checkAll:checkedCount===citiesLength,
        isIndeterminate:checkedCount>0&&checkedCount<citiesLength,
      })
  }
    render(){
      return(
        <div className=''>
                {/* <Checkbox   
                            // disabled
                            checked
                            trueLabel="选中"
                            falseLabel="未选中"
                            onChange={this.onChange.bind(this)}></Checkbox> */}

                <Checkbox 
                  checked={this.state.checkAll}
                  indeterminate={this.state.isIndeterminate}
                  onChange={this.handleCheckAllChange.bind(this)}
                > 
                ALl
                </Checkbox>
                <CheckboxGroup  
                                onChange={this.handleCheckAllCitiesChange.bind(this)}
                                min='1'
                                max='2'
                                value={this.state.checkedCities}>

                        {/* <Checkbox label="复选框 A"></Checkbox>
                        <Checkbox label="复选框 B"></Checkbox>
                        <Checkbox label="复选框 C"></Checkbox> */}

                        {
                          // this.state.cities.map((city,index)=>{
                          //   <Checkbox key={index} label='123'>
                      
                          //   </Checkbox>
                           
                          // })
                        }
                        <Checkbox label="北京"></Checkbox>
                        <Checkbox label="上海"></Checkbox>
                        <Checkbox label="广州"></Checkbox>


                </CheckboxGroup>


        </div>
      )
    }
   }
export default Index;