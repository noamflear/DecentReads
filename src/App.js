import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import './main.css'
import Reviews from './components/reviews';
import Contact from './components/contact';
import BestBook from './components/bestBook';
import MainImg from './components/mainImg';
import About from './components/about';

function App() {
  return (
    <React.Fragment>
      <NavBar/>
      <MainImg/>
      <About/>
      <br/>
      <br/>
      <BestBook/>
      <br/>
      <br/>
      <Reviews/>
      <br/>
      <br/>
      <Contact/>

    </React.Fragment>
  );
}

export default App;
