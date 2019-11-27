import React, { Component } from 'react';
import logo from '../logo.png';

class NavBar extends Component {
	render(){
		return (
			<div className="topNavBar">
				<a className="navbar-brand" href ="App.js">
				<img className= "mainLogo" src={ logo } alt="logo"/>
				</a>
				<a className ="btn" href="App.js">Home</a>
				<a className = "btn" href="#Contact">Contact</a>
				<a className = "btn" href="#about">About</a>
		 	 </div>
			);
	}
}

export default NavBar;