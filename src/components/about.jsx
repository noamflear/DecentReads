import React, { Component } from 'react';

class About extends Component{
    render(){
        return (
            <div id="about" className="about">
                <h1 className="title">About us</h1>
                <p className="title">We started this book review website in 2019 with the goal of helping people to find <br/>
                    good books easily. This is a goodreads knock off. Our features include: The ability to read others reviews, <br/>
                    the ability to write a review yourself, and see book covers, book summaries and more! <br/>
                    This page is made using react. Once you click on a book you will be taken to a page that is <br/>
                    made from react and flask. It uses flask to access the database where the reviews are stored.<br/>
                    Click on a book to view our user's reviews and to write a review yourself! 
                </p> 
            </div>
        );
    }
}

export default About;