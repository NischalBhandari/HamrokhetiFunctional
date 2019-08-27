import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import {Collapse,Navbar,NavbarToggler,NavbarBrand,Nav,NavItem,NavLink} from 'reactstrap';

class Navigation extends React.Component{
	constructor(props){
		super(props);
		this.toggle=this.toggle.bind(this);
		this.state={
			isOpen:false
		};
	}
	toggle(){
		this.setState({
			isOpen: !this.state.isOpen
		});
	}

	render(){
	return(
		<Navbar color='black'  light expand="md">
		<NavbarBrand  href="/" style={{color: 'black'}}><span style={{color:'black'}}>Home</span></NavbarBrand>
		<NavbarToggler onClick={this.toggle}/>
		<Collapse isOpen={this.state.isOpen} navbar>
		<Nav className="ml-auto" navbar>
		<NavItem>
		<NavLink>
		<Link to='/ourWorks' style={{ textDecoration: 'none' }} >
		<li>Contacts</li>
		</Link>
		</NavLink>
		</NavItem>
		<NavItem>
		<NavLink>
		<Link to='/about' style={{ textDecoration: 'none' }}>
		<li>About</li>
		</Link>
		</NavLink>
		</NavItem>
		<NavItem>

		<NavLink>
		<Link  to='/services' style={{ textDecoration: 'none' }}>
		<li>Services</li>
		</Link>
		</NavLink>
		</NavItem>
		<NavItem style={{backgroundColor:'#90cc42',borderRadius: '10%',boxShadow:'4px 4px 4px 4px black',marginLeft:'5px',color:'white'}}>

		<NavLink>
		<Link  to='/signup' style={{ textDecoration: 'none'}}>
		<li style={{color: 'white'}}>Sign Up</li>
		</Link>
		</NavLink>
		</NavItem>
		</Nav>
		</Collapse>
		</Navbar>


		);
}
}
export default Navigation;

/*

		<nav>
		<Link style={navStyle} to='/'>
		<h3>Home</h3>
		</Link>
		<ul className="nav-links">
		<Link style={navStyle} to='/about'>
		<li>About</li>
		</Link>
		<Link style={navStyle} to='/services'>
		<li>Services</li>
		</Link>
		</ul>
		</nav>

*/