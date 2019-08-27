	import React from 'react';


	class PicsToShow extends React.Component{

		render(){

			return(
				
	<div className="container ">

		<Row>

		<Col sm="4">
		<div className="hovering">
		<img src={TruckAndVehicles} alt="Avatar" class="image"/>
 		 <div class="overlap">
   			<div class="text">We have abundant vehicles</div>
  		</div>
			</div>

			</Col>

			<Col sm="4">
						<div className="hovering">
			<img src={employees} alt="Avatar" class="image"/>
 		 <div class="overlap">
   			 <div class="text">We have the best man power </div>
  		</div>
			</div>
			</Col>
			<Col sm="4">
			<div className="hovering">
			<img src={Loading} alt="Avatar" class="image"/>
 		 <div class="overlap">
   			 <div class="text">We take care of your goods </div>
  		</div>
			</div>

			</Col>
			</Row>

			</div>
				);
		}

	}

	export default PicsToShow;


