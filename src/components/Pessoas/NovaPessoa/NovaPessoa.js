import React, { useState, useEffect } from 'react';

export default function NovaPessoa({id, name, pFunction, company, view}) {
  const [pessoaId, setPessoaId] = useState(id)
  const [pessoaName, setPessoaName] = useState(name)
  const [pessoaFunction, setPessoaFunction] = useState(pFunction)
  const [pessoaCompany, setPessoaCompany] = useState(company)
  function handleDinamic(e) {
    e.preventDefault();
    switch (e.target.id) {
      case 'name':
        setPessoaName(e.target.value);
        break;
    }
  }
  function handleInsert(){

  }
  function handleUpdate(){

  }
  return (
    <section id="form">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <h5 className="text-left">Dados sobre a pessoa</h5>

                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Nome</label>
                      <input type="text" className="form-control inputDado" id="title" placeholder="Título da vaga" defaultValue={name} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Função</label>
                      <input type="text" className="form-control inputDado" id="company" placeholder="Empresa" defaultValue={pFunction} onChange={e => handleDinamic(e)}/>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Empresa</label>
                      <input type="text" className="form-control inputDado" id="sector" placeholder="Setor" defaultValue={company} onChange={e => handleDinamic(e)}/>
                    </div>
                  </div>
                  {view === 'update'
                    ? <button type="button" className="btn btn-dark" onClick={() => { handleUpdate() }}>Atualizar</button>
                    : <button type="button" className="btn btn-dark" onClick={()=>{ handleInsert() }}>Salvar</button>
                  }

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
