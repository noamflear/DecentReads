import React from 'react';
import './App.css';
import NavBar from './components/navBar';
import './main.css'
import Reviews from './components/reviews';
import Contact from './components/contact';
import BestBook from './components/bestBook';

function App() {
  return (
    <React.Fragment id="main">
      <NavBar/>
      <br/>
      <br/>
      <div className="rowC">
        <BestBook/>
      	<Reviews/>
      </div>
      <br/>
      <br/>
      <Contact/>

    </React.Fragment>
  );
}

export default App;
