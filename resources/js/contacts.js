import React from 'react';
import {Table } from 'reactstrap';

class Contacts extends React.Component{

render(){
	return(
		<div className="table-responsive" style={{paddingLeft: '80px'}}>
		<Table>
		<thead>
		<tr>
		<th>pokhara(golpark)</th>
		<th>narayanghat(diyalo road)</th>
		<th>butwal</th>
		<th>bhairawa</th>
		<th>kathmandu(thulo bharyang)</th>

		</tr>
		</thead>
		<tbody>
		<tr>
		<td>9801076028-ktm delivery</td>
		<td>056-531323- butwal delivery</td>
		<td>071-545980</td>
		<td>071-524975</td>
		<td>9801076019</td>
		</tr>
		<tr>
		<td>061-537274-ktm delivery</td>
		<td>9869847674- butwal delivery</td>
		<td>9857025980</td>
		<td>9812981717</td>
		<td>9801076020</td>
		</tr>
		<tr>
		<td>061-550199-butwal delivery</td>
		<td>056-530118- pokhara booking</td>
		<td></td>
		<td></td>
		<td>01-549074</td>
		</tr>
		<tr>
		<td>061-523602-baglung delivery</td>
		<td>9801076029- pokhara booking</td>
		<td></td>
		<td></td>
		<td></td>
		</tr>
		<tr>
		<td>9801076025-baglung delivery</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		</tr>
		<tr>
		<td>9857029272-butwal delivery</td>
		<td></td>
		<td></td>
		<td></td>
		<td></td>
		</tr>

		</tbody>
		</Table>
		</div>

		);
}
}
export default Contacts;