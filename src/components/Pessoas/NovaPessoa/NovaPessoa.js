import React, { useState, useEffect } from 'react';
import axios from 'axios'

export default function NovaPessoa({ id, name, email, cpf, rg, genre, birth, cep, city, uf, street, number, complement, contacts, areas, wage, view }) {
  const [pessoaId, setPessoaId] = useState(id)
  const [pessoaName, setPessoaName] = useState(name)
  const [pessoaEmail, setPessoaEmail] = useState(email)
  const [pessoaCpf, setPessoaCpf] = useState(cpf)
  const [pessoaRg, setPessoaRg] = useState(rg)
  const [pessoaGenre, setPessoaGenre] = useState(genre)
  const [pessoaBirth, setPessoaBirth] = useState(birth)
  const [pessoaCep, setPessoaCep] = useState(cep)
  const [pessoaCity, setPessoaCity] = useState(city)
  const [pessoaUf, setPessoaUf] = useState(uf)
  const [pessoaStreet, setPessoaStreet] = useState(street)
  const [pessoaNumber, setPessoaNumber] = useState(number)
  const [pessoaComplement, setPessoaComplement] = useState(complement)
  const [pessoaContacts, setPessoaContacts] = useState(contacts)
  const [pessoaAreas, setPessoaAreas] = useState(areas)
  const [pessoaWage, setPessoaWage] = useState(wage)
  const [success, setSuccess] = useState(false)
  let dataView

  useEffect(() => {
    ajustaData(pessoaBirth)
  }, [])

  function handleDinamic(e) {
    e.preventDefault();
    switch (e.target.id) {
      case 'name':
        setPessoaName(e.target.value);
        break;
      case 'email':
        setPessoaEmail(e.target.value);
        break;
      case 'cpf':
        setPessoaCpf(e.target.value);
        break;
      case 'rg':
        setPessoaRg(e.target.value);
        break;
      case 'genre':
        setPessoaGenre(e.target.value);
        break;
      case 'birth':
        console.log(e.target.value)
        setPessoaBirth(e.target.value);
        break;
      case 'cep':
        setPessoaCep(e.target.value);
        break;
      case 'city':
        setPessoaCity(e.target.value);
        break;
      case 'uf':
        setPessoaUf(e.target.value);
        break;
      case 'street':
        setPessoaStreet(e.target.value);
        break;
      case 'number':
        setPessoaNumber(e.target.value);
        break;
      case 'complement':
        setPessoaComplement(e.target.value);
        break;
      case 'contacts':
        setPessoaContacts(e.target.value);
        break;
      case 'areas':
        setPessoaAreas(e.target.value);
        break;
      case 'wage':
        setPessoaWage(e.target.value);
        break;
    }
  }
  function handleInsert() {
    console.log('inserindo...');
    const url = 'https://rh-lab-backend.herokuapp.com/users/';
    if (pessoaName !== '' && pessoaCpf !== '' && pessoaEmail !== '' && pessoaBirth !== '') {
      axios.post(url, {
        name: pessoaName,
        email: pessoaEmail,
        CPF: pessoaCpf,
        RG: pessoaRg,
        genre: pessoaGenre,
        birth_date: pessoaBirth,
        CEP: pessoaCep,
        city: pessoaCity,
        UF: pessoaUf,
        street: pessoaStreet,
        number: pessoaNumber,
        complement: pessoaComplement,
        contacts: pessoaContacts,
        areas_of_interest: pessoaAreas,
        wage_claim: pessoaWage
      }).then((res)=>{
        console.log(res.data)
        if(typeof res.data == "number"){
           setSuccess(true)
        }
      })
    }

  }
  function handleUpdate() {
    console.log('atualizando...');
    console.log({
      name: pessoaName,
      email: pessoaEmail,
      CPF: pessoaCpf,
      RG: pessoaRg,
      genre: pessoaGenre,
      birth_date: pessoaBirth,
      CEP: pessoaCep,
      city: pessoaCity,
      UF: pessoaUf,
      street: pessoaStreet,
      number: pessoaNumber,
      complement: pessoaComplement,
      contacts: pessoaContacts,
      areas_of_interest: pessoaAreas,
      wage_claim: pessoaWage
    });
    const url = 'https://rh-lab-backend.herokuapp.com/users/' + pessoaId;
    if (pessoaName !== '' && pessoaCpf !== '' && pessoaEmail !== '' && pessoaBirth !== '') {
      axios.put(url, {
        name: pessoaName,
        email: pessoaEmail,
        CPF: pessoaCpf,
        RG: pessoaRg,
        genre: pessoaGenre,
        birth_date: pessoaBirth,
        CEP: pessoaCep,
        city: pessoaCity,
        UF: pessoaUf,
        street: pessoaStreet,
        number: pessoaNumber,
        complement: pessoaComplement,
        contacts: pessoaContacts,
        areas_of_interest: pessoaAreas,
        wage_claim: pessoaWage
      }).then((res)=>{
        console.log(res)
        if(res.status === 200){
           setSuccess(true)
        }
      });
    }
  }

  function ajustaData(data) {
    console.log(data)
    if (view === 'new') {
      return ""
    } else {
      if (data !== null && data !== '' && data !== "undefined") {
        let parseData = data.substring(0, 10)
        console.log(parseData)
        let ano = parseData.substring(0, 4)
        console.log(ano)
        let mes = parseData.substring(5, 7)
        console.log(mes)
        let dia = parseData.substring(8, 10)
        console.log(dia)
        dataView = new Date(ano + '-' + mes + '-' + dia)
        dataView = dataView.toISOString().substring(0, 10)
        console.log(dataView)
        return dataView
      }
    }
  }
  return (
    <section id="form">
      <div className="container pt-5 pb-5">
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              <div className="col-md-12">
              {success ? <h2 className="text-center" style={{color: 'green'}}>Registro salvo com sucesso!</h2> : null}
              </div>
              <div className="col-md-12">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-12">
                      <h5 className="text-left">Dados sobre a pessoa</h5>
                    </div>
                    <div className="form-group col-md-5">
                      <label htmlFor="title">Nome</label>
                      <input type="text" className="form-control inputDado" id="name" placeholder="Nome do funcionário" defaultValue={name} onChange={e => handleDinamic(e)} required />
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Email</label>
                      <input type="text" className="form-control inputDado" id="email" placeholder="Email" defaultValue={email} onChange={e => handleDinamic(e)} required />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="title">CPF</label>
                      <input type="text" className="form-control inputDado" id="cpf" placeholder="CPF" defaultValue={cpf} onChange={e => handleDinamic(e)} required />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="title">RG</label>
                      <input type="text" className="form-control inputDado" id="rg" placeholder="RG" defaultValue={rg} onChange={e => handleDinamic(e)} required />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-2">
                      <label htmlFor="title">Gênero</label>
                      <select name="genre" id="genre" className="form-control inputDado" defaultValue={genre} onChange={e => handleDinamic(e)}>
                        <option value="masculino">Masculino</option>
                        <option value="feminino">Feminino</option>
                      </select>
                      {/* <input type="text" className="form-control inputDado" id="genre" placeholder="" defaultValue={genre} onChange={e => handleDinamic(e)} /> */}
                    </div>
                    <div className="form-group col-md-3">
                      <label htmlFor="title">Data de Nascimento</label>
                      <input type="date" className="form-control inputDado" id="birth" placeholder="" defaultValue={ajustaData(birth)} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="title">CEP</label>
                      <input type="text" className="form-control inputDado" id="cep" placeholder="" defaultValue={cep} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="title">Cidade</label>
                      <input type="text" className="form-control inputDado" id="city" placeholder="" defaultValue={city} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-1">
                      <label htmlFor="title">Estado</label>
                      <select name="uf" id="uf" className="form-control inputDado" value={uf} selected onChange={e => handleDinamic(e)}>
                        <option value="AC">AC</option>
                        <option value="AL">AL</option>
                        <option value="AP">AP</option>
                        <option value="AM">AM</option>
                        <option value="BA">BA</option>
                        <option value="CE">CE</option>
                        <option value="DF">DF</option>
                        <option value="ES">ES</option>
                        <option value="GO">GO</option>
                        <option value="MA">MA</option>
                        <option value="MT">MT</option>
                        <option value="MS">MS</option>
                        <option value="MG">MG</option>
                        <option value="PA">PA</option>
                        <option value="PB">PB</option>
                        <option value="PR">PR</option>
                        <option value="PE">PE</option>
                        <option value="PI">PI</option>
                        <option value="RJ">RJ</option>
                        <option value="RN">RN</option>
                        <option value="RS">RS</option>
                        <option value="RO">RO</option>
                        <option value="RR">RR</option>
                        <option value="SC">SC</option>
                        <option value="SP">SP</option>
                        <option value="SE">SE</option>
                        <option value="TO">TO</option>
                      </select>
                      {/* <input type="text" className="form-control inputDado" id="uf" placeholder="" defaultValue={uf} onChange={e => handleDinamic(e)} /> */}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="title">Rua</label>
                      <input type="text" className="form-control inputDado" id="street" placeholder="" defaultValue={street} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="title">Número</label>
                      <input type="text" className="form-control inputDado" id="number" placeholder="" defaultValue={number} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-4">
                      <label htmlFor="title">Complemento</label>
                      <input type="text" className="form-control inputDado" id="complement" placeholder="" defaultValue={complement} onChange={e => handleDinamic(e)} />
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="title">Salário</label>
                      {/* <InputMask mask="R$ 99999999" alwaysShowMask={false} maskChar={null} className="form-control inputDado" id="wage" defaultValue={wage} onChange={e => handleDinamic(e)} /> */}
                      <div className="input-group inputDado">
                        <div className="input-group-prepend inputDadoLeft">
                          <span className="input-group-text inputDadoLeft">R$</span>
                        </div>
                        <input type="text" className="form-control inputDadoRight" id="wage" placeholder="" defaultValue={wage} onChange={e => handleDinamic(e)} />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Contatos</label>
                      <textarea className="form-control inputDado" maxLength={96} id="contacts" onChange={e => handleDinamic(e)}>
                        {contacts}
                      </textarea>
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="title">Áreas</label>
                      <textarea className="form-control inputDado" maxLength={96} id="areas" onChange={e => handleDinamic(e)}>
                        {areas}
                      </textarea>
                    </div>
                  </div>
                  {view === 'update'
                    ? <button type="button" className="btn btn-dark" onClick={() => { handleUpdate() }}>Atualizar</button>
                    : <button type="button" className="btn btn-dark" onClick={() => { handleInsert() }}>Salvar</button>
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
