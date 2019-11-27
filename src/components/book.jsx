import React, { Component } from 'react';
import freeWill from '../freeWill.jpg';
import range from '../range.jpeg';
import oneWorld from '../oneWorld.jpg';
import normPeople from '../normPeople.jpg';
import digitalMin from '../digitalMin.jpg';

class Book extends Component{
    render(){
        return (
            <React.Fragment>
            <div className ="book">
                <a href= "#"><img className="bookCover" src = {this.getImg()}></img></a>
                <h1 className= "center">{this.props.book.name}</h1>
                <h2 className="center">By {this.props.book.author}</h2>
                <p className="summary"> {this.getDescription()}<a href ="#">Read More</a></p>
            </div>
            <br/><br/>
            <br/><br/>
            <br/><br/>
            <br/>
            </React.Fragment>
        );
    }
    getImg(){
        //{this.getDescription()}
        switch(this.props.book.id){
            case 1:
                return freeWill;
            case 2:
                return range;
            case 3:
                return oneWorld;
            case 4:
                return normPeople;
            case 5:
                return digitalMin;
            default:
                return null;
        }
    }
    getDescription(){
        switch(this.props.book.id){
            case 1:
                return "Belief in free will touches nearly everything that human beings value. It is difficult to think about law, politics, religion, public policy, ... ";
            case 2:
                return "Plenty of experts argue that anyone who wants to develop a skill, play an instrument, or lead their field should start early, focus intensely, ... ";
            case 3:
                return "A free, world-class education for anyone, anywhere: this is the goal of the Khan Academy, a passion project that grew from... ";
            case 4: 
                return "At school Connell and Marianne pretend not to know each other. He’s popular and well-adjusted, star of the school soccer team while she ... ";
            case 5:
                return "Minimalism is the art of knowing how much is just enough. Digital minimalism applies this idea to our personal technology... ";
            default:
                return null;
        }
    }
}

export default Book;