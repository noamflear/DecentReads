import React, { Component } from 'react';
import headerImg from '../header.jpg';
class MainImg extends Component{
    render(){
        return (
            <div id="mainImg">
            <img className ="headerImg" src ={headerImg}/>
            <h1 className="mainCenter">DecentReads</h1>
            <h2 className="mainSub">The home of all your book review needs</h2>
            <a href="#reviews" className="noUnderline">
            <div className="mainButton">
                <p class="centerReviewButton">Start Reviewing!</p>
            </div>
            </a>

            </div>
        );
    }
}
export default MainImg;