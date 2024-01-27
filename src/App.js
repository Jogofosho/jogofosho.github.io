import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import NameField from './NameField'
import CardComponent from './CardComponent';
import Navigation from './Navigation';

function App() {
  return (
    <Router>
      <div className="App">
        <CardComponent>
          <NameField name="Joseph Gonzales" />
          <p>
            Hello! You can call me Joe if you'd like.
          </p>
          <p>
            I'm a 4th year computer science student at the University of Manitoba.
            I'm also a big sports guy, I enjoy practicing yoga, and I love checking out new restaurants.
          </p>
          <p>
            Thanks for stopping by!
          </p>
          <Navigation />
        </CardComponent>
      </div>
    </Router>
  );
}

export default App;
