import React from 'react';
import logo from "./icon.png";
import {Row,Col,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { Link } from "react-router-dom";

/*const Register = ({ history, registerUser = f => f }) => {
  let _email, _password, _name;*/

/*  const handleLogin = e => {
    e.preventDefault();

    registerUser(_name.value, _email.value, _password.value);
}*/
class SignUp extends React.Component{

  constructor(props){
    super(props);
    this.state={
      _name:'',
      _email:'',
      _password:''
    }
    this.changeValue=this.changeValue.bind(this);
    this.handleLogin=this.handleLogin.bind(this);
  }
  handleLogin(e){
    e.preventDefault();
    console.log(this.state._name)
    this.props.registerUser(this.state._name,this.state._email,this.state._password);

  }
  changeValue(e){
    let targetName='';
    if(e.target.name==='name'){
        this.setState({
          _name:e.target.value
        });
      }
      else if(e.target.name==='email'){
               this.setState({
          _email:e.target.value
        });
      }
      else if(e.target.name==='password'){
                this.setState({
          _password:e.target.value
        });
      }
      else{
        this.props.updateImage(e)
      }
  }


	render(){
		return(
			<div style={{color:'black'}} className="signupbox">


			<Card style={{padding: '20px',borderRadius: '2%'}}>
        <CardBody>
        <CardTitle>Sign Up <br/><img src={logo} style={{height: '50px', width: '50px'}}/></CardTitle>
          
        </CardBody>
        <CardBody >

          <Form  id="login-form" action="" onSubmit={this.handleLogin} method="post">
           <FormGroup>
          <Label for="exampleName">Name</Label>
          <Input type="name" name="name" id="exampleName" placeholder="enter your name " onChange={this.changeValue} value={this.state._name}/>
        </FormGroup>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" onChange={this.changeValue} value={this.state._email}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" onChange={this.changeValue} value={this.state._password}/>
        </FormGroup>

          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>

        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>

        </CardBody>
      </Card>



			</div>

			);
	}

}

export default SignUp;