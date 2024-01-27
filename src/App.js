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
          <Navigation />
        </CardComponent>
      </div>
    </Router>
  );
}

export default App;
