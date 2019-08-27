import React from 'react';
import dotenv from 'dotenv';
import { Container } from "./components/container";
import { Header } from "./components/header";
dotenv.config();

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
      <Container>
        <Header/>
        <h1>teste</h1>
      </Container>
    </div>
  );
}

export default App;
