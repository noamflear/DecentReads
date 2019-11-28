import React, { Component } from 'react';
import book from '../flow.jpg';
class BestBook extends Component{
    render(){
        return (
        <div className="bestBookBox">
            <div id="bestBook">
                <img className="bestCover" src={book}/>
                    <br/>
                    <h1 className="title">Featured Book:</h1>
                    <h1 className="center">Flow</h1>
                    <h1 className="center">By Mihaly Csikszentmihalyi</h1>
                <p>You have heard about how a musician loses herself in her music, how a painter becomes one with the process of painting. In work, sport, conversation or hobby, you have experienced, yourself, the suspension of time, the freedom of complete absorption in activity. This is "flow," an experience that is at once demanding and rewarding--an experience that Mihaly Csikszentmihalyi demonstrates is one of the most enjoyable and valuable experiences a person can have. The exhaustive case studies, controlled experiments and innumerable references to historical figures, philosophers and scientists through the ages prove Csikszentmihalyi's point that flow is a singularly productive and desirable state. But the implications for its application to society are what make the book revolutionary.</p>
                <br/>
                <p>Csikszentmihalyi 
                    has done more than 
                    anyone else to
                    study this state of effortless attending 
                    - Daniel Khaneman</p>
            </div>
        </div>
        );
    }
}
export default BestBook;