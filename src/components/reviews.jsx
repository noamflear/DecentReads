import React, { Component } from 'react';
import Book from "./book";
class Reviews extends Component{
	state = {
		books: [
			{id: 1, name: "Free Will", author: "Sam Harris", summary: "Belief in free will touches nearly everything that human beings value. It is difficult to think about law, politics, religion, public policy, intimate relationships, morality—as well as feelings of remorse or personal achievement... "},
			{id: 2, name: "Range", author: "David Epstein", summary: "Plenty of experts argue that anyone who wants to develop a skill, play an instrument, or lead their field should start early, focus intensely, and rack up as many hours of deliberate practice as possible. If you dabble or delay... "},
			{id: 3, name: "The One World Schoolhouse", author: "Salman Khan", summary: "A free, world-class education for anyone, anywhere: this is the goal of the Khan Academy, a passion project that grew from an ex-engineer and hedge funder's online tutoring sessions with his niece, who was struggling with algebra, into a worldwide phenomenon. Today millions of students, parents, and teachers use the Khan Academy's free videos and software... "},
			{id: 4, name: "Normal People", author: "Sally Rooney", summary: "At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school soccer team while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her housekeeping job at Marianne’s house, a strange and indelible connection grows between the two teenagers—one they are determined to conceal... "}
		]
	}
	render() {
		return (
			<React.Fragment>
			<div id="reviews"className ="Reviews">
				<Book key = {this.state.books[0].id} book ={this.state.books[0]}/>
				<Book key = {this.state.books[1].id} book ={this.state.books[1]}/>
				<Book key = {this.state.books[2].id} book ={this.state.books[2]}/>
				<Book key = {this.state.books[3].id} book ={this.state.books[3]}/>
			</div>
			<a href="#" className="noUnderline">
			<div className="reviewPageButton">
				<h1 className="title">Click here to start reviewing!</h1>
			</div>
			</a>
			</React.Fragment>
			);
	}
}

export default Reviews;