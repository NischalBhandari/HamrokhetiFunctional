import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class FarmDetails extends Component {

    constructor(props){
        super(props);
        this.state={
            post:{}
        };
    }
    componentDidMount(){
        axios.get("/api/farm/"+this.props.match.params.id).then(response=>{

            this.setState({
                post:response.data
            });
            console.log(response);
        }).catch(error=>console.log(error));
    }

    render() {
        if(this.state.post){


        return (

            <div className="container">
            <h1>{this.state.post.name}</h1>
            <p>{this.state.post.description}</p>
            </div>
        );
    }
    else{
        return null;
    }

    }
}



