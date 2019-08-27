import React from 'react';
import { Jumbotron, Button,Media } from 'reactstrap';
import photo from './dhuwaniCollection/employees.jpg';
import Branch from './Branches';
import {Link} from 'react-router-dom';
class About extends React.Component{



	render(){
		return(
		<div >
		 <Jumbotron style={{backgroundColor:'rgb(26, 74, 27)'}}>
        <h1 className="display-3">HamroKheti</h1>
        <p className="lead">Financing the agriculture of Nepal </p>
        <hr className="my-2" />
        <p>Phone number: +779571455</p>
        <p className="lead">
          <Button color="primary"><Link to='/services' style={{ textDecoration: 'none' }} >
            <li>Learn More</li>
            </Link>
          </Button>
        </p>
      </Jumbotron>


       <Media style={{padding: '30px'}} >
      <Media left>
        <Media object src={photo} alt="Generic placeholder image" style={{border:'solid black 3px'}} />
      </Media>
      <Media body style={{color: 'black', paddingLeft: '10px'}} >
        <Media heading style={{color: 'black'}}>
         About Team
        </Media>
        We have excellent team of employees who are punctual and industrious . These are the people delivering happiness and creating the future of Nepal .
      </Media>
    </Media>
    <Branch />
			</div>
			);
	}
}
export default About;