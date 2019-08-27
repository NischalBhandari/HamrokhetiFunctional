import React from 'react';

class ProductRowCategory extends React.Component{
render(){
	const category = this.props.category;
	return(
		<tr>
		<th colSpan="5">
		<h1>{category}</h1>
		</th>
		</tr>
		);
}

}
export default ProductRowCategory;