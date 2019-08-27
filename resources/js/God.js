
import React from 'react';
import ReactDOM from 'react-dom';
import About from './About';
import Navigation from './Navigation';
import Services from './Services';
import Security from './Security';
import './App.css';
/*import MessengerCustomerChat from 'react-messenger-customer-chat';*/
import {Row,Col} from 'reactstrap';
import Contact from './contacts';
import SignUp from './SignUp';
import Home from './Home';
import Mains from './Main';
import './index.css';
import { BrowserRouter as Router, Route, Switch, withRouter } from "react-router-dom";
import * as serviceWorker from './serviceWorker';





function App() {
  return (
    <Router >
    <Navigation />

    <Route path='/' exact component={Home}/>

   <Route path='/about' component={About}/>
    <Route path='/services' component={Services}/>
    <Route path='/ourWorks' component={Contact}/>
    <Route path='/signup' component={Mains}/>
    
   
    <footer className="footer">
    
    <div className="footer-bar">
    <Row>
    <Col>
    <div class="SocialMedia">

    <h2> <a href="tel:01-549074"><i class="material-icons" >local_phone</i> Contact: 01-549074</a></h2>
    <h2> <a href="mailto:xyz@abc.com"><i class="material-icons" >email</i>email: xyz@abc.com</a></h2>
  </div>
    </Col>
    <Col>
    <div class="SocialMedia">
    <a href="#" class="fa fa-facebook"></a>
    <a href="#" class="fa fa-twitter"></a>
    <a href="#" class="fa fa-instagram"></a>
    </div>
    </Col>
    </Row>
{/*        <MessengerCustomerChat
    pageId="173630249340239"
    />
    */}
    </div>

    </footer>
    </Router>

  );
}



















/*const AppContainer = withRouter(props => <App {...props} />);
// console.log(store.getState())
render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,

  document.getElementById("example")
);*/

ReactDOM.render(<App />, document.getElementById('example'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();