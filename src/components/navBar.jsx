import React, { Component } from 'react';
import logo from '../logo.png';

class NavBar extends Component {
	render(){
		return (
			<div className="topNavBar">
				<a className = "btn mainLogo" href="App.js">DecentReads</a>
				<a className = "btn navButton" href="#about">About</a>
				<a className = "btn navButton" href="#Contact">Contact</a>
				<a className ="btn navButton" href="App.js">Home</a>
		 	 </div>
			);
	}
}

export default NavBar;