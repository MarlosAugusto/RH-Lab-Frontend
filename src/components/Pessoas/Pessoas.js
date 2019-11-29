import React, { useState, useEffect } from 'react';
import Form from './NovaPessoa/NovaPessoa'
import axios from 'axios'


export default function Pessoas({ view }) {

  const [pessoaSelect, setPessoaSelect] = useState(false)
  const [pessoas, setPessoas] = useState([])
  const [pessoaId, setPessoaId] = useState('')
  const [pessoaName, setPessoaName] = useState('')
  const [pessoaEmail, setPessoaEmail] = useState('')
  const [pessoaCpf, setPessoaCpf] = useState('')
  const [pessoaRg, setPessoaRg] = useState('')
  const [pessoaGenre, setPessoaGenre] = useState('')
  const [pessoaBirth, setPessoaBirth] = useState('')
  const [pessoaCep, setPessoaCep] = useState('')
  const [pessoaCity, setPessoaCity] = useState('')
  const [pessoaUf, setPessoaUf] = useState('')
  const [pessoaStreet, setPessoaStreet] = useState('')
  const [pessoaNumber, setPessoaNumber] = useState('')
  const [pessoaComplement, setPessoaComplement] = useState('')
  const [pessoaContacts, setPessoaContacts] = useState([])
  const [pessoaAreas, setPessoaAreas] = useState('')
  const [pessoaWage, setPessoaWage] = useState('')
  let dataView
  useEffect(() => {
    getPessoasList()
    console.log(view)
    setPessoaSelect(view)
  }, [])

  function renderPessoaSelected(pessoa) {
    setPessoaSelect('edit')
    setPessoaId(pessoa.id)
    setPessoaName(pessoa.name)
    setPessoaEmail(pessoa.email)
    setPessoaCpf(pessoa.cpf)
    setPessoaRg(pessoa.rg)
    setPessoaGenre(pessoa.genre)
    setPessoaBirth(pessoa.birth_date)
    setPessoaCep(pessoa.cep)
    setPessoaCity(pessoa.city)
    setPessoaUf(pessoa.uf)
    setPessoaStreet(pessoa.street)
    setPessoaNumber(pessoa.number)
    setPessoaComplement(pessoa.complement)
    setPessoaContacts(pessoa.contacts)
    setPessoaAreas(pessoa.areas_of_interest)
    setPessoaWage(pessoa.wage_claim)
  }
  function ajustaData(data){
    let parseData = data.substring(0, 10)
    console.log(parseData)
    let ano = parseData.substring(0, 4)
    console.log(ano)
    let mes = parseData.substring(5, 7)
    console.log(mes)
    let dia = parseData.substring(8, 10)
    console.log(dia)
    dataView = dia+'/'+mes+'/'+ano
    // dataView = dataView.toISOString().substring(0, 10)
    // console.log(dataView)
    return dataView
  }
  function renderPessoaList(pessoa) {
    return (
      <tr key={pessoa.id} onClick={() => renderPessoaSelected(pessoa)}>
        <td>{pessoa.name}</td>
        <td>{pessoa.email}</td>
        <td>{pessoa.birth_date === null ? '' : ajustaData(pessoa.birth_date) }</td>
      </tr>
    )
  }
  function getPessoasList() {
    axios.get('https://rh-lab-backend.herokuapp.com/users', {
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => {
      console.log(res)
      const data = res.data;
      setPessoas(data)
    }).catch(e => {
      console.log(e)
    })
  }
  if (pessoaSelect == 'edit') {
    return (
      <div>
        <a onClick={() => { setPessoaSelect(false); getPessoasList() }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
        <Form id={pessoaId} name={pessoaName} email={pessoaEmail} cpf={pessoaCpf} rg={pessoaRg} genre={pessoaGenre} birth={pessoaBirth} cep={pessoaCep} city={pessoaCity} uf={pessoaUf} street={pessoaStreet} number={pessoaNumber} complement={pessoaComplement} contacts={pessoaContacts} areas={pessoaAreas} wage={pessoaWage} view='update' />
      </div>
    );
  } else if (pessoaSelect == 'new') {
    return (
      <div>
        <a onClick={() => {
          setPessoaSelect(false)
          getPessoasList()
          }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
        <Form view="new" />
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
              <th>Email</th>
              <th>Data de Nascimento</th>
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
