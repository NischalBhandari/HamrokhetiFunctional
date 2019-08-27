import React from 'react';
import {Carousel,CarouselItem,CarouselControl,CarouselIndicators,CarouselCaption,Row,Col} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import LifeCycle from './lifecycle';
import './App.css';


import mainCover from './Green Nepal.jpg';
 import Branch from './Branches';
 ////////////////////////////////////

 import cover1 from './dhuwaniCollection/coverphoto.jpg';
import cover2 from './dhuwaniCollection/coverphoto2.jpg'

const items=[
{
	src: mainCover,
	altText: 'We Give to the World',
	caption: 'Give us your Life and We will deliver it '
},
 {
 	src: cover1,
    altText: 'We love our country',
    caption: 'Providing service in the heart of Nepal'
  },
  {
  	src: cover2,
    altText: 'Proper Delivery ',
    caption: 'Providing service on time basis'
  }

];
class Home extends React.Component{
	constructor(props){
		super(props);
		this.state={activeIndex: 0};
		this.next=this.next.bind(this);
		this.previous= this.previous.bind(this);
		this.goToIndex=this.goToIndex.bind(this);
		this.onExiting=this.onExiting.bind(this);
		this.onExited=this.onExited.bind(this);
		this.handleClick=this.handleClick.bind(this);
	}
	onExiting(){
		this.animating=true;
	}
	onExited(){
		this.animating=false;
	}
	next(){
		if(this.animating) return;
		const nextIndex=this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex+1;
		this.setState({
			activeIndex: nextIndex
		});
	}
	previous(){
		if(this.animating) return;
		const nextIndex=this.state.activeIndex=== 0 ? items.length -1 : this.state.activeIndex-1;
		this.setState({
			activeIndex: nextIndex
		});
	}
	goToIndex(newIndex){
		if (this.animating) return;
		this.setState({
			activeIndex: newIndex
		});
	}
	handleClick(){
		alert('hello');
	}


	render(){

		const controlStyle={
			backgroundColor: '#fff',
		}
		const {activeIndex} = this.state;
		const slides=items.map((item)=>{
			return(


				<CarouselItem
				
				onExiting={this.onExiting}
				onExited={this.onExited}
				key={item.src}
				>
				<img 
				 className="d-block w-100" 
				src={item.src} alt={item.altText}
				style={{height:'550px'}}
				/>

				<CarouselCaption className="TextCont"captionText={item.altText} captionHeader={item.caption} onClick={this.handleClick} />

				</CarouselItem>

				);
		});
		return(

		<div>
		<Carousel
        activeIndex={activeIndex}
        next={this.next}
        previous={this.previous}
      	>
        <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} />
        {slides}
        <CarouselControl style={controlStyle} direction="prev" directionText="Previous" onClickHandler={this.previous} />
        <CarouselControl style={controlStyle} direction="next" directionText="Next" onClickHandler={this.next} />
      	</Carousel>
      	<div className="spacing">
      	</div>
      	<div className="tagline">
      	<h1><center>Want to develop the agriculture sector of nepal ? </center> </h1>
      	<h3><center>We have been delivering happiness to our customers for more than 25 years. We know what you need .</center></h3>
      	

      	</div>
      	<LifeCycle />



      
		<div className="spacing ">
      	</div>


	 <div class="image-container">
	  <div class="cutoutimage">Invest</div>
	</div>

  <div className=" container flipper ">
	      	<Row>
	      	<Col xs="12" sm="6" md="4" lg="4">
	      	 <div className="flip-box" style={{justifyContent:'center'}}>
	  <div className="flip-box-inner">
	    <div className="flip-box-front">
	    <i className="material-icons" >favorite</i>
	      <h2>We Love our community</h2>
	    </div>
	    <div className="flip-box-back">
	    <i className="material-icons" >card_giftcard</i>
	      <h2>So we also give back </h2>
	    </div>
	  </div>
	</div>
	      	</Col>
	      	<Col xs="12" sm="6" md="4" lg="4">
	  <div className="flip-box">
	  <div className="flip-box-inner">
	    <div className="flip-box-front">
	    <i className="material-icons" >local_shipping</i>
	    <h2>We Provide Shipping</h2>
	    </div>
	    <div className="flip-box-back">
	    <i className="material-icons" >insert_emoticon</i>
	  	<h2>Dont Worry Its safe</h2>
	    </div>
	  </div>
	</div>
	</Col>
	<Col xs="12" sm="6" md="4" lg="4">
	<div className="flip-box">
	  <div className="flip-box-inner">
	    <div className="flip-box-front">
	    <i className="material-icons" >hourglass_full</i>
	      <h2>We know your time matters</h2>
	    </div>
	    <div className="flip-box-back">
	    <i className="material-icons" >hourglass_empty</i>
	      <h2>We are punctual</h2>
	    </div>
	  </div>
	</div>
	</Col>
	</Row>
</div>


      	<div className="spacing">
      	</div>
      	<div className="tagline">
      	<h1><center>जहॅा तपाईको आवश्यकता  त्यहां हाम्रो उपस्थित</center> </h1>
      	<h3><center>We have been delivering happiness to our customers for more than 25 years. We know what you need .</center></h3>
      	</div>

      	<Branch />

			</div>


			);
	}
}
export default Home;