import React, { useState } from 'react';
import MultiStep from 'react-multistep';
// import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './steps';
// import { Container } from './styles';
import '../css/prog-tracker.css';
import '../css/skeleton.css';
//import './css/custom.css';
import { DateInput } from "../../components/date";
//import '../../components/date;
import BuscaCep from '../../services/BuscaCep';
import { validateCPF } from '../../services/ValidaCPF';

export default function Cadastro() {
  const [nomeCompleto, setnomeCompleto] = useState('');

  const [rg, setRG] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [genre, setGenre] = useState('Feminino');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');
  const [cep, setCEP] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [num, setNum] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [email, setEmail] = useState('');

  function submit() {
    // @TODO centralizar informações e enviar
  }

  function StepOne() {
    const [cpf, setCPF] = useState('');
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>Nome</label>
            <input
              className='u-full-width'
              placeholder='Nome completo'
              type='text'
              onChange={e => setnomeCompleto(e.target.value)}
              value={nomeCompleto}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>CPF</label>
            <input
              className='u-full-width'
              type='text'
              onChange={e => setCPF(e.target.value)}
              value={cpf}
              onBlur={e => validateCPF(e.target)}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>RG</label>
            <input
              className='u-full-width required'
              type='text'
              onChange={e => setRG(e.target.value)}
              value={rg}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six colums' style={{ flexDirection: "row", paddingLeft: "25%  " }} >
            <div style={{ width: "25%", float: "left" }}>
              <label>Data de Nascimento</label>
              <DateInput
                type='text'
                placeholder='DD/MM/AAAA'
                onChange={e => setdataNasc(e.target.value)}
                value={dataNasc}
              >
              </DateInput>
            </div>
            <div style={{ width: "25%", float: "right" }}>
              <label>Gênero</label>
              <select
                placeholder='Gênero'
                onChange={e => setGenre(e.target.value)}
                value={genre}
              >
                <option value="Feminino">Feminino</option>
                <option value="Masculino">Masculino</option>
                <option value="Trans Homem">Trans Homem</option>
                <option value="Trans Mulher">Trans Mulher</option>
                <option value="Travesti">Travesti</option>
                <option value="TransGênero">Trans Gênero</option>
                <option value="Não Informar">Não Informar</option>
                <option value="Sem genêro">Sem Gênero</option>
              </select>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Senha</label>
            <input
              className='u-full-width required'
              placeholder='Senha'
              type='password'
              onChange={e => setSenha(e.target.value)}
              value={senha}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Confirmar senha</label>
            <input
              className='u-full-width'
              placeholder='Confirmar Senha'
              type='password'
              onChange={e => setConfSenha(e.target.value)}
              value={confSenha}
            />
          </div>
        </div>
      </div >
    )
  }

  function StepTwo() {
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <BuscaCep
              type='text'
              onChange={e => setCEP(e.target.value)}
              value={cep}
              required>
            </BuscaCep>
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Logradouro</label>
            <input
              className='u-full-width'
              type='text'
              onChange={e => setLogradouro(e.target.value)}
              value={logradouro}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Bairro</label>
            <input
              className='u-full-width'
              type='text'
              onChange={e => setBairro(e.target.value)}
              value={bairro}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Número</label>
            <input
              className='u-full-width'
              type='text'
              onChange={e => setNum(e.target.value)}
              value={num}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Complemento</label>
            <input
              className='u-full-width'
              type='text'
              onChange={e => setComplemento(e.target.value)}
              value={complemento}
            />
          </div>
        </div>
      </div>
    )
  }

  function StepThree() {
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>Email</label>
            <input
              className='u-full-width'
              placeholder='seuemail@.com.br'
              type='email'
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
      </div >
    )
  }

  function StepFour() {
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <div>
              <label>Contatos</label>
              <button>Incluir</button>
            </div>
          </div>
        </div>
      </div>

    )

  }

  const steps = [
    { name: 'Dados Gerais', component: <StepOne /> },
    { name: 'Endereço', component: <StepTwo /> },
    { name: 'Contatos', component: <StepThree /> },
    { name: 'Interesse', component: <StepFour /> }
  ];
  return (
    <MultiStep showNavigation={true} steps={steps} />
  )
}
