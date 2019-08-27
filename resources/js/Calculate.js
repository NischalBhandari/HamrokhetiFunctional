import React from 'react';
import {Form ,FormGroup,Label,Input } from 'reactstrap';
class Calculate extends React.Component{
	constructor(props){
		super(props);
		this.state={

			value:'',

			amount:1,
			price:'',
			rate:10
		}
		this.calculatePrice=this.calculatePrice.bind(this);
		this.changeAmount=this.changeAmount.bind(this);
	}

	calculatePrice(e){
/*		const targetPrice=parseInt(e.target.value);
		console.log(targetPrice);
		this.setState({
			value: targetPrice
		});
		const value=parseInt(this.state.value);
		const amount=parseInt(this.state.amount);
		const calculate = value*this.state.rate;
		this.setState({
			price: calculate
		});*/

		this.setState({

			value: e.target.value,
			price: e.target.value*10*this.state.amount
		});
	}
	changeAmount(e){
		this.setState({
			amount: e.target.value,
			price: e.target.value*10*this.state.value
		});

	}

	calculation(){
	}

	render(){
		return(
			<div className="container blackContainer">
			<h2 style={{color: 'black'}}>Calculate how much it costs</h2>
			<Form>
			<FormGroup>
			<Label for="idQuantity">Quantity</Label>
			<Input type="text" name="Quantity" id="idQuantity" placeholder="How much do you want to export in KGs"

			onChange={this.calculatePrice}
			/>
			</FormGroup>
			<FormGroup>
			<Label for="idProduct">Product</Label>
			<Input type="select" name="select" id="idProduct"
			onChange={this.changeAmount}
			>
			<option>1</option>
			<option>2</option>
			<option>3</option>
			<option>4</option>
			<option>5</option>
			</Input>
			</FormGroup>
			</Form>

			<h2 style={{color: 'black'}}>Your Cost will be :  Rs <span>{this.state.price}</span></h2>


			</div>

			);
	}
}

export default Calculate;