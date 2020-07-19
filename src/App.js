import React from 'react';
import logo from './logo.svg';
import './App.css';
import {Header} from './components/header.js';
import {Board} from "./components/board.js";
import {Box} from "./components/box.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Board />
    </div>
  );
}

export default App;
