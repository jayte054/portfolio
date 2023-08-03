import React from 'react';
import './App.css';
import { Navbar } from './components/navbar/navbar';
import { Intro } from './components/Intro/intro';
import { Experience } from './components/Experience/experience';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Experience />
    </div>
  );
}

export default App;
