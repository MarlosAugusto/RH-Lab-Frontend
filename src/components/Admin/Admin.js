import React, { Component } from 'react';

// import { Container } from './styles';
import './Admin.css';

export default class Admin extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row padding-all-10">
          <span className="badge badge-danger">Notificações</span>
        </div>
        <div className="row">

          <div className="col-md-9">
            <div className="card text-white bg-success">
              <h5 className="card-header">
                Alexander enviou um currículo para vaga de Analista de Sistemas
              </h5>
            </div>
            <div className="card text-white bg-success">
              <h5 className="card-header">
                Washington enviou um currículo
              </h5>
            </div>
            <div className="card text-white bg-success">
              <h5 className="card-header">
                Matias enviou um currículo para vaga de UX/UI Design
              </h5>
            </div>
          </div>
          <div className="col-md-3">
            <span className="badge badge-info font-size-18">Olá @admin</span>
            <div className="alert alert-success alert-dismissable">
              <button type="button" className="close" data-dismiss="alert" aria-hidden="true">
                ×
        </button>
              <strong>
                Bom dia!
        </strong> Hoje é aniversário de João Carlos (TogDesign). <a href="#home" className="alert-link">Convide todos da Sudotec para comemorar!</a>
            </div>
          </div>
        </div>
        <div className="row padding-all-10">
          <div className="col-md-8">
            <span className="badge badge-default font-size-28">Currículos</span>
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th>
                    #ID
                  </th>
                  <th>
                    Vaga
                  </th>
                  <th>
                    Responsável
                  </th>
                  <th>
                    Status
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    0
                  </td>
                  <td>
                    Estágiário
                  </td>
                  <td>
                    Genilson
                  </td>
                  <td>
                    Pendente
                  </td>
                </tr>
                <tr className="">
                  <td>
                    1
                  </td>
                  <td>
                    Contador
                  </td>
                  <td>
                    Letícia
                  </td>
                  <td>
                    Aprovado
                  </td>
                </tr>
                <tr className="">
                  <td>
                    2
                  </td>
                  <td>
                    UX/UI Design
                  </td>
                  <td>
                    Matias
                  </td>
                  <td>
                    Pendente
                  </td>
                </tr>
                <tr className="">
                  <td>
                    3
                  </td>
                  <td>

                  </td>
                  <td>
                    Washington
                  </td>
                  <td>
                    Pendente
                  </td>
                </tr>
                <tr className="">
                  <td>
                    4
                  </td>
                  <td>
                    Analista de Sistema
                  </td>
                  <td>
                    Alexander
                  </td>
                  <td>
                    Ligar para confirmar
                  </td>
                </tr>

              </tbody>
            </table>

          </div>
          <div className="col-md-4">
            <span className="badge badge-default font-size-28">Vagas</span>
            <table className="table table-sm table-hover">
              <thead>
                <tr>
                  <th>
                    Vaga
                  </th>
                  <th>
                    Data Limite
                  </th>
                  <th>
                    Currículos recebidos
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    UX/UI Design
                  </td>
                  <td>
                    01/10/2019
                  </td>
                  <td>
                    6
                  </td>
                </tr>
                <tr className="">
                  <td>
                    Estagiário
                  </td>
                  <td>
                    15/10/2019
                  </td>
                  <td>
                    13
                  </td>
                </tr>
                <tr className="">
                  <td>
                    Analista de Sistemas
                  </td>
                  <td>
                    19/11/2019
                  </td>
                  <td>
                    3
                  </td>
                </tr>
                <tr className="">
                  <td>
                    Contador
                  </td>
                  <td>
                    30/09/2019
                  </td>
                  <td>
                    8
                  </td>
                </tr>
              </tbody>
            </table>
            <button className="btn btn-secondary">Adicionar nova vaga</button>
          </div>
        </div>
      </div>
    );
  }
}
