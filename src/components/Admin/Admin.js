import React, { useState, useEffect } from 'react';
import './Admin.css'
import EmpresaLogo from '../../assets/images/logo-empresa.png'
import PerfilLogo from '../../assets/images/perfil_icon.png'
import Vagas from '../Vagas/Vagas'
import Pessoas from '../Pessoas/Pessoas'
import Anotacoes from '../Anotacoes/Anotacoes'
function Admin({ username, type }) {

  const [menu, setMenu] = useState(false)
  const [opc, setOpc] = useState('vagas')

  const renderMenuSelected = (opc)=>{
    switch (opc) {
      case 'home':
        return <div>Home</div>
      case 'pessoas':
          return <Pessoas view={false}/>
      case 'vagas':
        console.log("call vagas")
        return <Vagas view={false}/>
      case 'anotacoes':
        return <Anotacoes/>
      default:
        console.log('default')
    }
  }
  useEffect(() => {
    console.log('opc', opc)
  }, [opc]);

  useEffect(() => {
    console.log("use effect")
    console.log(username)
  }, [])

  const toogleMenu = () => {
    setMenu(!menu)
  }

  return (
    <div id="page-container" className={menu ? "main-admin show-menu" : "main-admin"}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
        <a className="navbar-brand"/>
        <div id="open-menu" className="menu-bar" onClick={toogleMenu}>
          <div className="bars" />
        </div>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown ets-right-0">
            <a className="nav-link dropdown-toggle"  id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <img src={PerfilLogo} className="img-fluid rounded-circle border user-profile" />
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <a className="dropdown-item" >{username}</a>
              <a className="dropdown-item" >Another action</a>
              <div className="dropdown-divider" />
              <a className="dropdown-item" >Sair</a>
            </div>
          </li>
        </ul>
      </nav>
      <div className="side-bar">
        <div className="side-bar-links">
          <div className="side-bar-logo text-center py-3">
            <img src={EmpresaLogo} className="img-fluid rounded-circle border bg-secoundry mb-3" />
            <h5>{username}</h5>
          </div>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a onClick={()=>{setOpc('home')}} href="#" className={opc == 'home' ? "nav-links d-block active" : "nav-links d-block"}><i className={opc == 'home' ? "fa fa-home pr-2 active" : "fa fa-home pr-2"} /> HOME</a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{setOpc('pessoas')}} href="#" className={opc == 'pessoas' ? "nav-links d-block active" : "nav-links d-block"}><i className={opc == 'pessoas' ? "fa fa-users pr-2 active" : "fa fa-users pr-2"} /> PESSOAS</a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{setOpc('vagas'); console.log('click')}} href="#" className={opc == 'vagas' ? "nav-links d-block active" : "nav-links d-block"}><i className={opc == 'vagas' ? "fa fa-list pr-2 active" : "fa fa-list pr-2"} /> VAGAS</a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{setOpc('anotacoes')}} href="#" className={opc == 'anotacoes' ? "nav-links d-block active" : "nav-links d-block"}><i className={opc == 'anotacoes' ? "fa fa-sticky-note-o pr-2 active" : "fa fa-sticky-note-o pr-2"} /> ANOTAÇÕES</a>
            </li>
            <li className="nav-item">
              <a onClick={()=>{setOpc('curriculos')}} href="#" className={opc == 'curriculos' ? "nav-links d-block active" : "nav-links d-block"}><i className={opc == 'curriculos' ? "fa fa-file-text pr-2 active" : "fa fa-file-text pr-2"} /> CURRÍCULOS</a>
            </li>
          </ul>
        </div>
        <div className="side-bar-icons">
          <div className="side-bar-logo text-center py-3">
            <img src={EmpresaLogo} className="img-fluid rounded-circle border bg-secoundry mb-3" />
          </div>


          <div className="icons d-flex flex-column align-items-center">
            <a onClick={()=>{setOpc('home')}} className={opc === 'home' ? "set-width text-center display-inline-block my-1 active-icon" : "set-width text-center display-inline-block my-1"}><i className="fa fa-home" /></a>
            <a onClick={()=>{setOpc('pessoas')}} className={opc === 'pessoas' ? "set-width text-center display-inline-block my-1 active-icon" : "set-width text-center display-inline-block my-1"}><i className="fa fa-users" /></a>
            <a onClick={()=>{setOpc('vagas'); console.log("click")}} className={opc === 'vagas' ? "set-width text-center display-inline-block my-1 active-icon" : "set-width text-center display-inline-block my-1"}><i className="fa fa-list" /></a>
            <a onClick={()=>{setOpc('anotacoes')}} className={opc === 'anotacoes' ? "set-width text-center display-inline-block my-1 active-icon" : "set-width text-center display-inline-block my-1"}><i className="fa fa-sticky-note-o" /></a>
            <a onClick={()=>{setOpc('curriculos')}} className={opc === 'curriculos' ? "set-width text-center display-inline-block my-1 active-icon" : "set-width text-center display-inline-block my-1"}><i className="fa fa-file-text" /></a>
          </div>
        </div>
      </div>
      <div className="main-body-content w-100 ets-pt">
        {
          renderMenuSelected(opc)
        }
      </div>
    </div>
  );
}
export default Admin;
