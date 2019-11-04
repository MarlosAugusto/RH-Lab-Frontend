import React, { useState, useEffect } from 'react';
import './Vaga.css'
import axios from 'axios'

export default function FormVaga({ id, title, description, sector, company, type, experience, view }) {
  const [vagaId, setVagaId] = useState(id)
  const [vagaTitle, setVagaTitle] = useState(title)
  const [vagaDescription, setVagaDescription] = useState(description)
  const [vagaSector, setVagaSector] = useState(sector)
  const [vagaCompany, setVagaCompany] = useState(company == null ? 0 : company)
  const [vagaType, setVagaType] = useState(type)
  const [vagaExperience, setVagaExperience] = useState(experience)

  useEffect(()=>{
    console.log(vagaCompany)
  }, [vagaCompany])

  function handleDinamic(e) {
    e.preventDefault();
    console.log(e.target.value)
    console.log(e.target.id)
    switch (e.target.id) {
      case 'title':
        setVagaTitle(e.target.value)
        break;
      case 'description':
        setVagaDescription(e.target.value)
        break;
      case 'sector':
        setVagaSector(e.target.value)
        break;
      case 'company':
        console.log('ENTROU NO COMPANY', parseInt(e.target.value))
        setVagaCompany(parseInt(e.target.value))
        break;
      case 'type':
        setVagaType(e.target.value)
        break;
      case 'experience':
        setVagaExperience(e.target.value)
        break;
      default:
        console.log('erro')
        break;
    }
  }

  function handleUpdate() {
    console.log('atualizar')
    const url = 'https://rh-lab-backend.herokuapp.com/vagas/'+vagaId
    if(vagaTitle !== '' && vagaDescription !== '' && vagaCompany !== '' && vagaType !== ''){
      axios.put(url, {
        columns: [{
          column: "title",
          value: vagaTitle
        }, {
          column: "description",
          value: vagaDescription
        }, {
          column: "company",
          value: vagaCompany
        }, {
          column: "nv_exp",
          value: vagaExperience
        }, {
          column: "sector",
          value: vagaSector
        }, {
          column: "type",
          value: vagaType
        }]
      })
    }

  }

  function handleInsert(){
    console.log('insert')
    const url = 'https://rh-lab-backend.herokuapp.com/vagas'
    if(vagaTitle !== '' && vagaDescription !== '' && vagaCompany !== '' && vagaType !== ''){
      console.log('diferente de nulo')
      console.log(vagaCompany)
      const vaga = {
        title: vagaTitle,
        description: vagaDescription,
        sector: vagaSector,
        company: vagaCompany,
        type: vagaType,
        nv_exp: vagaExperience
      }

      console.log(JSON.stringify(vaga))
      console.log(url)
      axios.post(url, vaga)
      .then((res)=>{
        console.log(res)
        console.log(res.data)

      })
    }
    console.log('oi?!')
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
                      <h5 className="text-left">Dados sobre a vaga</h5>

                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Título</label>
                      <input type="text" className="form-control inputDado" id="title" placeholder="Título da vaga" defaultValue={title} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Empresa</label>
                      <input type="text" className="form-control inputDado" id="company" placeholder="Empresa" defaultValue={company} onChange={e => handleDinamic(e)}/>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Setor</label>
                      <input type="text" className="form-control inputDado" id="sector" placeholder="Setor" defaultValue={sector} onChange={e => handleDinamic(e)}/>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Descrição</label>
                      <input type="text" className="form-control inputDado" id="description" placeholder="Descrição" defaultValue={description} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Nível de experiência</label>
                      <input type="text" className="form-control inputDado" id="experience" placeholder="Nível de experiência" defaultValue={experience} onChange={e => handleDinamic(e)}/>
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Tipo</label>
                      <input type="text" className="form-control inputDado" id="type" placeholder="Tipo (???)" defaultValue={type} onChange={e => handleDinamic(e)}/>
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
