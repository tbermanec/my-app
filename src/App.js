import React from 'react';
import './App.css';

import CarsList from './components/CarsList';
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      <NavBar />
      <CarsList />
    </div>
  );
}

export default App;
