import React from 'react';

import {Row,Col,Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle,Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class SignUp extends React.Component{

	render(){
		return(
			<div style={{color:'black'}} className="signupbox">


			<Card style={{padding: '20px',borderRadius: '2%'}}>
        <CardBody>
          <CardTitle>Sign Up <br/><img src={logo} style={{height: '50px', width: '50px'}}/></CardTitle>
          
        </CardBody>
        <CardBody >

          <Form >
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
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