import React, { useState, useEffect } from 'react';
import axios from 'axios'
import Form from '../FormVaga/Vaga'
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
        <th>{vaga.title}</th>
        <th>{vaga.description}</th>
        <th>{vaga.company}</th>
        <th>{vaga.sector}</th>
        <th>{vaga.type}</th>
        <th>{vaga.nv_exp}</th>
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
