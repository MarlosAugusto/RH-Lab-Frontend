import React from 'react';
import dotenv from 'dotenv';
// import { Container } from "./components/container";
// import { Header } from "./components/header";
import Colaborador from './pages/colaborators/Colaborador';
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
      <Colaborador />
    </div>
  );
}

export default App;
