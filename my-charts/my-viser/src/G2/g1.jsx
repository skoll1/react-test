import React,{Component} from 'react'

import {Chart,Tooltip,Axis,Line,Point} from 'viser-react'

class G2 extends Component{
    constructor(props){
        super(props)
    }
    render(){
        const data = [
            { year: '1991', value: 3 },
            { year: '1992', value: 4 },
            { year: '1993', value: 3.5 },
            { year: '1994', value: 5 },
            { year: '1995', value: 4.9 },
            { year: '1996', value: 6 },
            { year: '1997', value: 7 },
            { year: '1998', value: 9 },
            { year: '1999', value: 13 },
          ];

          const scale = [{
            dataKey: 'value',
            min: 0,
          },{
            dataKey: 'year',
            min: 0,
            max: 1,
          }];
        return (
            <div>
                <Chart height={400} data={data} scale={scale} forceFit>
                    <Tooltip />
                    <Axis />
                    <Line position="year*value" />
                    <Point position="year*value" />
                </Chart>
            </div>
        )
    }
}
export default G2;