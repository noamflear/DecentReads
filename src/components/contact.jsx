import React, { Component } from 'react';
import registered from "../registered.jpg";
class Contact extends Component{

	render() {
		return (
			<div id ="Contact">
				<h1 id="contactHeader">Contact Us!</h1>
				<br></br>
				<br></br>
				<div className="person">
				<p className="contactName">Noam Flear: </p>
				<p className="contactEmail">Email: nflear@ryerson.ca</p>
				</div>
				<div className="person">
				<p className="contactName">Anthony Trinh: </p>
				<p className="contactEmail">Email: anthony.trinh@ryerson.ca</p>
				</div>
				<div className="person">
				<p className="contactName">Michelle Pham: </p>
				<p className="contactEmail">Email: thuyvan.pham@ryerson.ca</p>
				</div>
				<br/><br/><br/><br/>
				<p className ="trademark">DecentReads &trade;</p>
			</div>

			);
	}
}

export default Contact;