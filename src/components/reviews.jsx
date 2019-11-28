import React, { Component } from 'react';
import Book from "./book";
class Reviews extends Component{
	state = {
		books: [
			{id: 1, name: "Free Will", author: "Sam Harris"},
			{id: 2, name: "Range", author: "David Epstein"},
			{id: 3, name: "The One World Schoolhouse", author: "Salman Khan"},
			{id: 4, name: "Normal People", author: "Sally Rooney"}
		]
	}
	render() {
		return (
			<div id="reviews"className ="Reviews">
				<Book key = {this.state.books[0].id} book ={this.state.books[0]}/>
				<Book key = {this.state.books[1].id} book ={this.state.books[1]}/>
				<Book key = {this.state.books[2].id} book ={this.state.books[2]}/>
				<Book key = {this.state.books[3].id} book ={this.state.books[3]}/>
			</div>
			);
	}
}

export default Reviews;