import React from 'react';
import dotenv from 'dotenv';

dotenv.config();

import logo from './logo.svg';
import './App.css';

function App() {
  // function handleTest() {
  //   const data = {
  //     method: 'POST',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json; charset=utf-8'
  //     },
  //     mode: 'cors'
  //   }
  //   console.log("test")
  //   fetch(`${process.env.DB_URI}/test`, data);
  // }
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        {/* <button onClick={() => handleTest()}>Test Back</button> */}
      </header>
    </div>
  );
}

export default App;
