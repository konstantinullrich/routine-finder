import React from 'react';
import logo from './logo.svg';
import './App.css';
import PrimaryButton from "./components/PrimaryButton/PrimaryButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <PrimaryButton backgroundColor='rgb(6, 38, 53)' textColor='rgb(255, 255, 255)' onClick={() => {}}>More</PrimaryButton>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
