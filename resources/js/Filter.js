import React from 'react';
import './Filter.css';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';


class Filter extends React.Component{
constructor(props){
	super(props);
	this.state={

	datas:	[
  {category: "Sporting Goods", price: "$49.99", stocked: true, name: "Football"},
  {category: "Sporting Goods", price: "$9.99", stocked: true, name: "Baseball"},
  {category: "Sporting Goods", price: "$29.99", stocked: false, name: "Basketball"},
  {category: "Electronics", price: "$99.99", stocked: true, name: "iPod Touch"},
  {category: "Electronics", price: "$399.99", stocked: false, name: "iPhone 5"},
  {category: "Electronics", price: "$199.99", stocked: true, name: "Nexus 7"},
  {category: "Electronics", price: "$509", stocked: true, name: "Nexus 8"}
],
priceSearch:10000000000000000,
isStocked: false,
SearchWord:''
	}
	this.handleCheckChange=this.handleCheckChange.bind(this);
	this.handleSearchChange=this.handleSearchChange.bind(this);
	this.handlePriceSearchChange=this.handlePriceSearchChange.bind(this);
}

handleCheckChange(inStockOnly){
	const state = this.state.isStocked;
	this.setState({
		isStocked: inStockOnly
	});
}
handleSearchChange(filterText){
	this.setState({
		SearchWord: filterText
	});

}
handlePriceSearchChange(price){
	this.setState({
		priceSearch: price
	});
}


	render(){
		var maximum=0;
		const max = this.state.datas.forEach((data)=>{
			var dataPrice=parseFloat(data.price.slice(1));
			if(dataPrice>maximum){
				maximum=dataPrice;
			}

		})

		return(

			<div className="FilterBox blackContainer">
			<SearchBar
			SearchWord={this.state.SearchWord}
			stocked={this.state.isStocked}
			priceSearch={this.state.priceSearch}
			onFilterTextChange={this.handleSearchChange}
			onInStockChange={this.handleCheckChange}
			onPriceSearchChange={this.handlePriceSearchChange}
			max={maximum+1}
			 />



			<ProductTable
			products={this.state.datas}
			show={this.state.isStocked}
			price={this.state.priceSearch}
			filterText={this.state.SearchWord}
			
			 />
			
			
			
			
			</div>
			);
	}
}
export default Filter;