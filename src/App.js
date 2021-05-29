import React from 'react';
import logo from './logo.svg'; // https://commons.wikimedia.org/wiki/File:Bitcoin.svg
import './App.css';

import Crypto from './Crypto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Crypto Rate</h1>
      </header>
      <Crypto />
    </div>
  );
}

export default App;
