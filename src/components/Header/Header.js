import React, { useState } from 'react';
import SudotecLogo from '../../assets/images/rhlab.png'
import './Header.css'


export default function Header() {
  const [active, setActive] = useState('home')
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon" />
      </button>
      <a className="navbar-brand" href="#home"><img src={SudotecLogo} alt="" height="70px"/></a>
      <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className={active === "home" ? "nav-item active" : "nav-item"}>
            <a className="nav-link" href="#home" onClick={() => setActive("home")}>Home</a>
          </li>
          <li className={active === "curriculo" ? "active nav-item" : "nav-item"}>
            <a className="nav-link" href="#curriculo" onClick={() => setActive("curriculo")}>Currículo</a>
          </li>
          <li className={active === "vagas" ? "active nav-item" : "nav-item"}>
            <a className="nav-link" href="#vagas" onClick={() => setActive("vagas")}>Vagas</a>
          </li>
        </ul>
        <div className="form-inline my-2 my-lg-0">
          <button className="btn btn-outline-success my-2 my-sm-0 border border-white white" type="submit" onClick={()=>console.log("Clickado")}>LOGIN</button>
        </div>
      </div>
    </nav>
  );

}
