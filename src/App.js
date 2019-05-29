import React from 'react';
import TurbineCalculator from './TurbineCalculator.js';
import './App.css';

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>
          Calculating wind power
        </h1>
        
      </header>
      <TurbineCalculator />
    </div>
  );
}

export default App;
