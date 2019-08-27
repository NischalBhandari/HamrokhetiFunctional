import React from 'react';
import ProductRowCategory from './ProductRowCategory';
import ProductRow from './ProductRow';



class ProductTable extends React.Component{

render(){
	const filterText=this.props.filterText;
	const inStockOnly=this.props.show;
	const priceSearch = this.props.price;
	const rows=[];
	let lastCategory = null;

	this.props.products.forEach((product)=>{
		let productPrice= parseFloat( product.price.slice(1));

		if(product.name.indexOf(filterText)===-1 || productPrice > priceSearch ){
			return ;
		}
		if(inStockOnly && !product.stocked){
			return ;
		}

		if(product.category!==lastCategory){
			rows.push(

				<ProductRowCategory
				category={product.category}
				key={product.category}/>
				);
		}
		rows.push(

			<ProductRow
			product={product}
			show={this.props.show}
			key={product.name}/>
			);
		lastCategory=product.category;
	});

	return(

		<table>
		<thead>
		<tr>
		<th>Name</th>
		<th>Price</th>
		</tr>
		</thead>
		<tbody>
		{rows}
		</tbody>
		</table>
		);
}


}

export default ProductTable;