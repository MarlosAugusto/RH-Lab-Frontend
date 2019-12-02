import React, { useState, useEffect } from 'react';
import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import Cadastro from '../cadastro/Cadastro'
import App from '../../App'
import Logo from '../../assets/images/rhlab.png'
import axios from 'axios'


function Login(props) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [users, setUsers] = useState([])
  const [user, setUser] = useState({})
  const [logged, setLogged] = useState(false)
  useEffect(() => {
    console.log("use effect")
  }, [setUser])

  function login() {
    console.log(username, '->', password)
    let isLogged;
    axios.post("https://rh-lab-backend.herokuapp.com/users/auth/login", {
      email: username,
      password: password
    }).then((res) => {
      console.log(res)
      if (res.status === 200) {
        setLogged(true)
        setUser(isLogged)
      }
    })
  }

  if (logged) {
    return (
      <App username={username} type={username} />
    );
  } else {
    return (

      <div className="container">
        <div className="card card-login mx-auto text-center bg-dark">
          <div className="card-header mx-auto bg-dark">
            <span> <img src={Logo} className="w-75" alt="Logo" /> </span><br />
            <span className="logo_title mt-5">  </span>
            {/*message*/}
          </div>
          <div className="card-body">
            <form action="" method="">
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-user" /></span>
                </div>
                <input type="text" name="email" className="form-control" placeholder="Email" onChange={e => setUsername(e.target.value)} />
              </div>
              <div className="input-group form-group">
                <div className="input-group-prepend">
                  <span className="input-group-text"><i className="fas fa-key" /></span>
                </div>
                <input type="password" name="password" className="form-control" placeholder="Senha" onChange={e => setPassword(e.target.value)} />
              </div>
              <div className="form-group">
                <input type="button" name="btn" value="Login" className="btn btn-outline-danger float-right login_btn" onClick={() => login()} />
              </div>
              <div className="form-group">
                <input type="button" name="btn" value="Cadastro" className="btn btn-outline-danger float-right login_btn" onClick={() => login()} />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
