import React, { Component } from 'react';
import freeWill from '../freeWill.jpg';
import range from '../range.jpg';
import oneWorld from '../oneWorld.jpg';
import normPeople from '../normPeople.jpg';

class Book extends Component{
    render(){
        return (
            <React.Fragment>
            <div id ={this.getId()} className ="book">
                <img className="bookCover" src = {this.getImg()}></img>
                <h1 className= "title">{this.props.book.name}</h1>
                <h2 className="center">By {this.props.book.author}</h2>
                <h2 className="center">Rating: {this.getRating()}</h2>
                <p id = {this.getSummaryId()} className="summary"> {this.props.book.summary}</p>
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
            </React.Fragment>
        );
    }
    getImg(){
        switch(this.props.book.id){
            case 1:
                return freeWill;
            case 2:
                return range;
            case 3:
                return oneWorld;
            case 4:
                return normPeople;
            default:
                return null;
        }
    }
    getDescription(){
        switch(this.props.book.id){
            case 1:
                return "Belief in free will touches nearly everything that human beings value. It is difficult to think about law, politics, religion, public policy, intimate relationships, morality—as well as feelings of remorse or personal achievement—without first imagining that every person ... ";
            case 2:
                return "Plenty of experts argue that anyone who wants to develop a skill, play an instrument, or lead their field should start early, focus intensely, and rack up as many hours of deliberate practice as possible. If you dabble or delay, you'll never catch up to the people who got a head start. But a closer... ";
            case 3:
                return "A free, world-class education for anyone, anywhere: this is the goal of the Khan Academy, a passion project that grew from an ex-engineer and hedge funder's online tutoring sessions with his niece, who was struggling with algebra, into a worldwide phenomenon. Today millions of students, parents, and teachers use the Khan Academy's free videos and software... ";
            case 4: 
                return "At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school soccer team while she is lonely, proud, and intensely private. But when Connell comes to pick his mother up from her housekeeping job at Marianne’s house, a strange and indelible connection grows between the two teenagers—one they are determined to conceal... ";
            default:
                return null;
        }
    }
    getId(){
        switch(this.props.book.id){
            case 1:
                return "Book1";
            case 2:
                return "Book2";
            case 3:
                return "Book3";
            case 4:
                return "Book4";
            default:
                return null;
        }
    }
    getSummaryId(){
        switch(this.props.book.id){
            case 1:
                return "Summary1";
            case 2:
                return "Summary2";
            case 3:
                return "Summary3";
            case 4:
                return "Summary4";
            default:
                return null;
        }
    }
    getRating(){
        switch(this.props.book.id){
            case 1:
                return "3.86";
            case 2:
                return "4.18";
            case 3:
                return "4.32";
            case 4:
                return "3.90";
            default:
                return null;
        }
    }
}

export default Book;