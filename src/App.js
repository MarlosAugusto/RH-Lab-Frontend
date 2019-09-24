import React from 'react';
import dotenv from 'dotenv';
// import { Container } from "./components/container";
// import { Header } from "./components/header";
import Colaborador from './pages/colaborators/Colaborador';
import Cadastro from './pages/cadastro/Cadastro';
dotenv.config();

function App() {

  return (
    <div className="App">
      <Cadastro />
    </div>
  );
}

export default App;
