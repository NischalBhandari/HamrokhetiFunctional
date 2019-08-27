import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Farm from './components/Farm';
import Example from './components/Example';
import FarmDetails from './components/FarmDetails';
import FarmPost  from './components/FarmPost';
import {BrowserRouter as Router, Link,Route} from 'react-router-dom';

export default class Index extends Component {

    
    render() {
        return (
            <div className="container">
               <Router>
               <div>
                    <Link to="/">Home</Link>
                    <Link to="/farm">Farm</Link>
                    <Link to="/farm/addFarm">Add Farm</Link>

                    <Route path='/farm' exact component= {Farm}/>
                    <Route path='/farm/:id' exact render={props=> <FarmDetails{...props}/> }/>
                    <Route path='/' exact component= {Example}/>
                    <Route path='/farm/addFarm' exact component= {FarmPost}/>
               </div>
               </Router>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
