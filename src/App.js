import React, { useState, useEffect } from 'react';
import dotenv from 'dotenv';
// import { Container } from "./components/container";
// import { Header } from "./components/header";
import Cadastro from './pages/cadastro/Cadastro';
import Login from './pages/login/Login';
dotenv.config();

function App({username, type}) {
  const [logado, setLogado] = useState(false)
  const [user, setUser] = useState({})

  useEffect(() => {
    console.log('use effect');
    console.log(username, type)
    // const {username, type} = props;
    // console.log(username, type)
    if (username != null && type != null) {
        setLogado(true)
        setUser({username, type})
    }
}, [])

  return (
    <div>
            {logado
                ? <Cadastro props={{ user: user }} />
                : <Login />
            }
        </div>
  );
}

export default App;
