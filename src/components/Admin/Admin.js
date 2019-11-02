import React, { useState, useEffect } from 'react';
import './Admin.css'
import EmpresaLogo from '../../assets/images/logo-empresa.png'
import PerfilLogo from '../../assets/images/perfil_icon.png'
function Admin(props) {

    useEffect(() => {
        console.log("use effect")
        console.log(props)
      }, [])
    const [menu, setMenu] = useState(false)

    const toogleMenu = () => {
        setMenu(!menu)
    }
    return (
        <div id="page-container" className={menu ? "main-admin show-menu" : "main-admin"}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light position-fixed w-100">
                <a className="navbar-brand" onClick />
                <div id="open-menu" className="menu-bar" onClick={toogleMenu}>
                    <div className="bars" />
                </div>
                <ul className="navbar-nav ml-auto">
                    <li className="nav-item dropdown ets-right-0">
                        <a className="nav-link dropdown-toggle" onClick id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            <img src={PerfilLogo} className="img-fluid rounded-circle border user-profile" />
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" onClick>Action</a>
                            <a className="dropdown-item" onClick>Another action</a>
                            <div className="dropdown-divider" />
                            <a className="dropdown-item" onClick>Something else here</a>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="side-bar">
                <div className="side-bar-links">
                    <div className="side-bar-logo text-center py-3">
                        <img src={EmpresaLogo} className="img-fluid rounded-circle border bg-secoundry mb-3" />
                        <h5>Company Name</h5>
                    </div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a onClick className="nav-links d-block"><i className="fa fa-home pr-2" /> HOME</a>
                        </li>
                        <li className="nav-item">
                            <a onClick className="nav-links d-block"><i className="fa fa-users pr-2" /> PESSOAS</a>
                        </li>
                        <li className="nav-item">
                            <a onClick className="nav-links d-block"><i className="fa fa-list pr-2" /> VAGAS</a>
                        </li>
                        <li className="nav-item">
                            <a onClick className="nav-links d-block"><i className="fa fa-sticky-note-o pr-2" /> ANOTAÇÕES</a>
                        </li>
                        <li className="nav-item">
                            <a onClick className="nav-links d-block"><i className="fa fa-file-text pr-2" /> CURRÍCULOS</a>
                        </li>
                    </ul>
                </div>
                <div className="side-bar-icons">
                    <div className="side-bar-logo text-center py-3">
                        <img src={EmpresaLogo} className="img-fluid rounded-circle border bg-secoundry mb-3" />
                        <h5>Company Name</h5>
                    </div>


                    <div className="icons d-flex flex-column align-items-center">
                        <a className="set-width text-center display-inline-block my-1"><i className="fa fa-home" /></a>
                        <a className="set-width text-center display-inline-block my-1"><i className="fa fa-users" /></a>
                        <a className="set-width text-center display-inline-block my-1"><i className="fa fa-list" /></a>
                        <a className="set-width text-center display-inline-block my-1"><i className="fa fa-sticky-note-o" /></a>
                        <a className="set-width text-center display-inline-block my-1"><i className="fa fa-file-text" /></a>
                    </div>
                </div>
            </div>
            <div className="main-body-content w-100 ets-pt">
                <div className="table-responsive bg-light">
                    <table className="table">
                        <tbody><tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>lorem</th>
                            <th>ipssum</th>
                            <th>Dollor</th>
                        </tr>
                            <tr>
                                <td>Vinay</td>
                                <td>Sharma</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                            </tr>
                            <tr>
                                <td>Vinay</td>
                                <td>Sharma</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                            </tr>
                            <tr>
                                <td>Vinay</td>
                                <td>Sharma</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                            </tr>
                            <tr>
                                <td>Vinay</td>
                                <td>Sharma</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                                <td>lorem ipssum dollor dummy</td>
                            </tr>
                        </tbody></table>
                </div>
            </div>
        </div>
    );
}
export default Admin;
