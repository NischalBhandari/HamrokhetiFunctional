import React from 'react';
import { Row,Col,Card,CardImg,CardText,CardBody,CardTitle,Button,Modal,ModalHeader,ModalFooter,ModalBody} from 'reactstrap';
import Kathmandu from './dhuwaniCollection/kathmandu.jpg';
import Pokhara from './dhuwaniCollection/gadi.jpg';
import Butwal from './dhuwaniCollection/yellow house.jpg';
import Baglung from './dhuwaniCollection/topviewtruck.jpg';
const items=[
{
	src: Kathmandu,
	altText: 'We Give to the World',
	Heading: 'Kathmandu',
	Phone: '01-549074',
	Mobile1:'9801076020',
	Mobile2:'9801076019',
	returns: '20%'
},
 {
 	src: Pokhara,
    altText: 'Hamro ramro pokhara',
    Heading: 'Pokhara',
    Phone: '9801076025',
    Mobile1:'061-523602',
  	returns: '20%'
  },
  {
	src: Butwal,
	altText: 'garmi cha yeta dherai ',
	Heading: 'Butwal ',
	Phone: '071-545980',
	Mobile1: '9857025980',
	returns: '20%'
},
 {
 	src: Baglung,
    altText: 'Here you can find different materials ',
    Heading: 'Bhairawa',
    Phone: '071-524975',
    Mobile1:'9812981717',
    returns: '20%'
  },


];

class Branches extends React.Component{
	constructor(props){
		super(props);
		this.state={
			modal:false,
			Heading:'',
			About: '',
			pic: '',
			Number:'',
			mobile1:''
		};
		this.closeBox=this.closeBox.bind(this);
}
doSomething(head,img,number,mobile1){
	this.setState({
		modal: !this.state.modal,
		Heading: head,
		pic: img,
		Number: number,
		mobile1: mobile1
	});

};
closeBox(){
	this.setState({
		modal: !this.state.modal
	});
}
render(){
	const color="white";
	const textColor="#21c570";
	const padding= "20px";
	const slides=items.map((item)=>{
		return (
			<Col xs="12" sm="6" md="3" lg="3" style={{padding: padding}}>
			<Card body inverse style={{backgroundColor:color,color:textColor,border:'1px solid #90cc42'}} >
			<CardImg top width="100%" src={item.src}/>
		<CardBody style={{color:'black',backgroundColor:'white'}}>
			<CardTitle>{item.Heading}</CardTitle>

			<span style={{color:textColor}} ><h3>Return expected : {item.returns}</h3></span>

			 <CardText>{item.altText}</CardText>
		</CardBody>

			</Card>
			</Col>
			);

	});

	return(
		<div className="container-fluid">

		<h1 style={{color:'#21c570'}}><center>Our Farms </center></h1>
		<Row>
		{slides}
		</Row>
		 <Modal isOpen={this.state.modal} toggle={this.doSomething} style={{color:'black'}} >
          <ModalHeader toggle={this.closeBox}>{this.state.Heading}</ModalHeader>
          <ModalBody>
            <img src={this.state.pic} style={{height: '100%', width:'100%'}}/>
           <a href={"tel:"+this.state.Number}> <h3>Phone : {this.state.Number}</h3></a>
           <a href={"tel:"+this.state.mobile1}> <h3>Mobile : {this.state.mobile1}</h3></a>
            </ModalBody>
          <ModalFooter>
            <Button color="danger" onClick={this.closeBox}>Cancel</Button>
          </ModalFooter>
        </Modal>
		</div>
		);
}


}

export default Branches;