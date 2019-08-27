import React from 'react';
import {Row , Col,Container} from 'reactstrap';
import Calculate from './Calculate';
import Branch from './Branches';

class Services extends React.Component{

	render(){
		return(
			<div class="container blackContainer">
			
			<center><h1  style={{color: 'black'}}>Our Services</h1></center>
			<Calculate />
			<Branch />
			</div>
			);
	}
}
export default Services;