import React, { useState, useEffect } from 'react';
import Form from './NovaPessoa/NovaPessoa'



export default function Pessoas({ view }) {

  const [pessoaSelect, setPessoaSelect] = useState(false)
  const [pessoas, setPessoas] = useState([])
  const [pessoaId, setPessoaId] = useState('')
  const [pessoaName, setPessoaName] = useState('')
  const [pessoaFunction, setPessoaFunction] = useState('')
  const [pessoaCompany, setPessoaCompany] = useState('')

  useEffect(() => {
    getPessoasList()
    console.log(view)
    setPessoaSelect(view)
  }, [])

  function renderPessoaSelected(pessoa){
    setPessoaSelect('edit')
    setPessoaId(pessoa.id)
    setPessoaName(pessoa.name)
    setPessoaFunction(pessoa.function)
    setPessoaCompany(parseInt(pessoa.company))
  }
  function renderPessoaList(pessoa) {
    return (
      <tr key={pessoa.id} onClick={()=>renderPessoaSelected(pessoa)}>
        <td>{pessoa.name}</td>
        <td>{pessoa.function}</td>
        <td>{pessoa.company}</td>
      </tr>
    )
  }
  function getPessoasList() {
    const data = [
      {
        "id": 1,
        "name": "Douglas",
        "function": "Estagiário",
        "company": 1
      }, {
        "id": 2,
        "name": "Wender",
        "function": "Estagiário",
        "company": 1
      }, {
        "id": 3,
        "name": "Lopes",
        "function": "Estagiário",
        "company": 1
      }]
    setPessoas(data)
  }
  if (pessoaSelect == 'edit') {
    return (
      <div>
        <a onClick={() => { setPessoaSelect(false); getPessoasList() }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
        <Form id={pessoaId} name={pessoaName} pFunction={pessoaFunction} company={pessoaCompany} view='update' />
      </div>
    );
  } else if (pessoaSelect == 'new') {
    return (
      <div>
        <a onClick={() => { setPessoaSelect(false) }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
        <Form />
      </div>
    );
  } else {
    return (
      <div className="table-responsive bg-light">
        <div className="container h-100">
          <div className="d-flex justify-content-end h-100">
            <div className="searchbar">
              <input className="search_input" type="text" name placeholder="Procurar... " />
              <a href="#" className="search_icon"><i className="fas fa-search" /></a>
            </div>
          </div>
        </div>
        <table className="table table-hover" >
          <tbody>
            <tr>
              <th>Nome</th>
              <th>Função</th>
              <th>Empresa</th>
            </tr>
            {pessoas.map((pessoa) => renderPessoaList(pessoa))}
          </tbody>

          </table>
        <button className="btn btn-dark" onClick={() => setPessoaSelect('new')}>Novo</button>
      </div>
    )
  }
  // return (
  //   <div>
  //     teste {pessoaSelect.toString()}
  //   </div>
  // )
}
