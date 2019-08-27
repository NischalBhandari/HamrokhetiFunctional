import React from 'react';
import './Filter.css';
import {  Form, FormGroup, Label, Input } from 'reactstrap';


class SearchBar extends React.Component{
	constructor(props){
		super(props);
		this.state={sliderChange:'myslider'}
		this.handleFilterTextChange=this.handleFilterTextChange.bind(this);
		this.handleInStockChange=this.handleInStockChange.bind(this);
		this.handlePriceSearchChange=this.handlePriceSearchChange.bind(this);

	}
	handleFilterTextChange(e){
		this.props.onFilterTextChange(e.target.value);
	}
	handleInStockChange(e){
		this.props.onInStockChange(e.target.checked);
	}
	handlePriceSearchChange(e){
		this.props.onPriceSearchChange(e.target.value);
		this.setState({
			sliderChange: 'changeslider'
		});
	}

	render(){
		const SearchWord=this.props.SearchWord;
		return(
			 
			<div>
			<Form>
			<FormGroup>

			<Label for="serachName" >Search</Label>

			<Input
			name="searchInput"
			 type="text" 
			placeholder="search"
			value={SearchWord}
			id="searchName"
			onChange={this.handleFilterTextChange}

			/>

			</FormGroup>
		
			<FormGroup>
			<Label for="sliderRange">Search By price</Label>

			<input type="range" min="1" max={this.props.max}  className={this.state.sliderChange} id="sliderRange"
			value={this.props.priceSearch}
			onChange={this.handlePriceSearchChange}
			/>

			</FormGroup>
			<FormGroup check>
			<Label check>

			<Input
			name="checkInput"
			type="checkbox"
			checked={this.props.stocked}
			onChange={this.handleInStockChange}
			id="stockInput"
			/>{' '}
			Show only in stock
			</Label>
			</FormGroup>


			
			</Form>
			
			</div>


			);
	}
}

export default SearchBar;