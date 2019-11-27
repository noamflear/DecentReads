import React, { Component } from 'react';
import Book from "./book";
class Reviews extends Component{
	state = {
		books: [
			{id: 1, name: "Free Will", author: "Sam Harris"},
			{id: 2, name: "Range", author: "David Epstein"},
			{id: 3, name: "The One World Schoolhouse", author: "Salman Khan"},
			{id: 4, name: "Normal People", author: "Sally Rooney"},
			{id: 5, name: "Digital Minimalism", author: "Cal Newport"}
		]
	}
	render() {
		return (
			<div className ="Reviews">
				<h1>Books:</h1>
				<br/>
				{ this.state.books.map(book => 
				<Book key = {book.id} book ={book}/>)}
			</div>

			);
	}
}

export default Reviews;