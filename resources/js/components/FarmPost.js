import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

export default class FarmPost extends Component {
    constructor(){
        super();
        this.state={
            name:'',
            body:'',
            gains:'',
            location:''
        }
    }
    handleNameChange(e){
        this.setState({
            name:e.target.value
        });
    }
    handleDescriptionChange(e){
        this.setState({
            description:e.target.value
        });
    }
    handleGainsChange(e){
        this.setState({
            gains:e.target.value
        });
    }
    handleLocationChange(e){
        this.setState({
            location:e.target.value
        });
    }
    handleSubmit(e){
        e.preventDefault();
        console.log(this.state);
        axios.post('/api/farm',this.state).then(response=>{
            console.log(response);

        }).catch(error=>{
            console.log(error);
        });
    }
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Add a new farm</div>

                            <div className="card-body">
                            <form onSubmit={this.handleSubmit.bind(this)}>
                            <div>
                            <input type = "text" name="name" placeholder="Enter farm name" onChange={this.handleNameChange.bind(this)}
                            value={this.state.name}
                            />
                            </div>
                            <div>
                            <textarea name="description" placeholder="Enter the description of farm" onChange={this.handleDescriptionChange.bind(this)}
                            value={this.state.description}

                            />
                            </div>
                            <div>
                            <input type="integer" name="gains" onChange={this.handleGainsChange.bind(this)}
                            value={this.state.gains}/>
                            </div>
                            <div>
                            <input type="text" name="location" placeholder="location of farm"
                            onChange={this.handleLocationChange.bind(this)}
                            value={this.state.location}

                            /> 
                            </div>
                            <div>
                            <button type="submit">Submit</button>
                            </div>
                            </form>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

