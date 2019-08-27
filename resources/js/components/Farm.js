import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {Link} from 'react-router-dom';
export default class Farm extends Component {
    constructor(){
        super();
        this.state={
            farms:[]
        }
    }

    componentWillMount(){
        axios.get('/api/farm').then(response=>{

            this.setState({

                farms: response.data
            });
        }).catch(errors=>{
            console.log(errors);
        })
    }
    render() {
        return (
            
            <div className="container">
            {this.state.farms.map(farm=>
                <li>
                <Link to={"/farm/"+farm.id}>{farm.name}</Link></li>
                )}
            </div>
        );
    }
}
