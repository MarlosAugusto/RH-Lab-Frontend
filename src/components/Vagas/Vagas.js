import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Form from '../FormVaga/Vaga'
import './Vagas.css'
export default function Vagas({ view }) {

  const [vagaId, setVagaId] = useState('')
  const [vagaTitle, setVagaTitle] = useState('')
  const [vagaDescription, setVagaDescription] = useState('')
  const [vagaType, setVagaType] = useState('')
  const [vagaCompany, setVagaCompany] = useState('')
  const [vagaSector, setVagaSector] = useState('')
  const [vagaExperience, setVagaExperience] = useState('')

  const [vagas, setVagas] = useState([])
  const [vagaSelect, setVagaSelect] = useState(false)

  useEffect(() => {
    getVagasList()
    setVagaSelect(view)
  }, [])

  function getVagasList() {
    axios.get('https://rh-lab-backend.herokuapp.com/vagas', {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(res => {
        console.log(res)
        const data = res.data;
        setVagas(data)
      })
      .catch(e => {
        console.log(e)
      })
  }

  function renderVagaSelected(vaga) {
    setVagaSelect('edit')
    setVagaId(vaga.id)
    setVagaTitle(vaga.title)
    setVagaDescription(vaga.description)
    setVagaType(vaga.type)
    setVagaCompany(parseInt(vaga.company))
    setVagaSector(vaga.sector)
    setVagaExperience(vaga.nv_exp)
  }

  function renderListVagas(vaga) {
    console.log(vaga.title)
    return (
      <tr key={vaga.id} onClick={() => renderVagaSelected(vaga)}>
        <td>{vaga.title}</td>
        <td>{vaga.description}</td>
        <td>{vaga.company}</td>
        <td>{vaga.sector}</td>
        <td>{vaga.type}</td>
        <td>{vaga.nv_exp}</td>
      </tr>
    );
  }
  if (vagaSelect == 'edit') {
    return (
      <div>
        <a onClick={() => { setVagaSelect(false); getVagasList() }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
        <Form id={vagaId} title={vagaTitle} description={vagaDescription} company={vagaCompany} type={vagaType} sector={vagaSector} experience={vagaExperience} view='update' />
      </div>
    );
  } else if (vagaSelect == 'new') {
    return (
      <div>
        <a onClick={() => { setVagaSelect(false) }} href="#" className="set-width text-center display-inline-block my-1"><i className="fa fa-angle-left" /></a>
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
              <th>Título</th>
              <th>Descrição</th>
              <th>Empresa</th>
              <th>Setor</th>
              <th>Tipo</th>
              <th>Nível de experiência</th>
            </tr>
            {vagas.map((vaga) => renderListVagas(vaga))}
          </tbody></table>
        <button className="btn btn-dark" onClick={() => setVagaSelect('new')}>Novo</button>
      </div>
    )
  }

}
