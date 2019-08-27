import React from 'react';


class ProductRow extends React.Component{

render(){
const product=this.props.product;
const name= this.props.show ? (product.stocked  ? product.name :<span style={{color:"red"}}>{product.name}</span>):product.name;

	return(

		<tr>
		<td>{name}</td>
		<td>{product.price}</td>
		</tr>

		);
}
}

export default ProductRow;