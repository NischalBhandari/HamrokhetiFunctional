import React from 'react';
import {Doughnut,Bar} from 'react-chartjs-2';
class ShowChart extends React.Component{
	constructor(props){
		super(props);
		this.state={
		chartData:{
			labels:['ktm','Pkr','Dhankuta'],
			datasets:[
			{
				label:'Services given',
				data:[
				120,
				135,
				145
				],
				backgroundColor:[
				'rgb(25,99,10)',
				'rgb(125,145,122)',
				'rgb(125,15,122)'

				],
			}

			]
		}
		}
	}


render(){
	return(
		<div className="container">
		<div className="row">
		<Bar data={this.state.chartData}
			height={100}
			options={{

				maintainAspectRatio: true,
				scales:{
					yAxes:[{
						ticks:{
							beginAtZero: true
						}
					}]
				}
			}}

			/>

		<Doughnut data={this.state.chartData}
			height={100}
			options={{

				maintainAspectRatio:true,
				scales:{
					yAxes:[{
						ticks:{
							beginAtZero: true
						}
					}]
				}
			}}

			/>
			</div>
			</div>


		)
}
}


export default ShowChart;