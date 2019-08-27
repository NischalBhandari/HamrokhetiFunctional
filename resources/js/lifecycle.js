import React from 'react';
import './lifecycle.css';
import {Row,Col} from 'reactstrap';

class LifeCycle extends React.Component{
	render(){
		return(
			<div class="info">
			<Row style={{justifyContent:'center',minHeight: '100px'}}>
			<h1 style={{color:'white'}}>How HamroKheti Works ? </h1>
			</Row>
			<Row style={{color:'white'}}>
			<Col xs="12" sm="6" md="3" lg="3">
				<div style={{paddingBottom:'20px'}}>
				<Row style={{minHeight:"100px",justifyContent:'center'}}>
					<i className="material-icons" >account_circle</i>
				</Row>
					<h5>Create an Account</h5>
					<span>Join our large community of digital farmers funding farms, 
					empowering farmers and making a profit. Sign up today using your
					 email to get started.</span>
				</div>
				</Col>
				<Col xs="12" sm="6" md="3" lg="3">

				<div style={{paddingBottom:'20px'}}>
				<Row style={{minHeight:"100px",justifyContent:'center'}}>
					<i className="material-icons" >touch_app</i>
				</Row>
					<h5>Choose a Farm</h5>
					<span>After signing in, choose a farm from the available set of farms, select the number of 
					units you would like to fund and proceed to make the payments.</span>
				</div>
				</Col>

				<Col xs="12" sm="6" md="3" lg="3">
				<Row style={{minHeight:"100px",justifyContent:'center'}}>
					<i className="material-icons" >laptop_windows</i>
				</Row>
				<div style={{paddingBottom:'20px'}} >
					<h5>Get Updates</h5>
					<span>On your personalised dashboard, you would get regular realtime updates for
					 farm progress as well as access details of all the farms you have funded till date.</span>
				</div>
				</Col>

				<Col xs="12" sm="6" md="3" lg="3">
				<Row style={{minHeight:"100px",justifyContent:'center'}}>
					<i className="material-icons" >monetization_on</i>
				</Row>
				<div  style={{paddingBottom:'20px'}}>
						<h5>Get Returns</h5>
					<span>Upon harvest, expected returns of proceeds from produce are distributed 
					to all subscribers to a farm. This is done within the stated tenure period.</span>
				</div>
				</Col>
			</Row>
			</div>
			);
	}
}

export default LifeCycle;

