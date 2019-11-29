import React from 'react';

import './Anotacoes.css';
// import { Container } from './styles';

export default function Anotacoes() {
  return (
    <div className="container">
      <div className="row">
        <div className="column">
          <div className="card">
            <div className="row">
              <div className="column col-8">
                <h5>Teste</h5>
              </div>
              <div className="column col-4">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <p>Isso é apenas um teste</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="row">
              <div className="column col-8">
                <h5>Teste</h5>
              </div>
              <div className="column col-4">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <p>Isso é apenas um teste</p>
          </div>
        </div>
        <div className="column">
          <div className="card">
            <div className="row justify-content-between">
              <div className="column col-8">
                <h5>Teste</h5>
              </div>
              <div className="column col-4 margin-left">
                <i class="fas fa-times"></i>
              </div>
            </div>
            <p>Isso é apenas um teste</p>
          </div>
        </div>
      </div>
    </div>
  );
}
