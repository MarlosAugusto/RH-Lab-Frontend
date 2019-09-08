import React, { useState, useEffect } from 'react';
import MultiStep from 'react-multistep';
// import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './steps';
// import { Container } from './styles';
import './css/prog-tracker.css';
import './css/skeleton.css';

export default function Colaborador() {
  const [nomeCompleto, setnomeCompleto] = useState('');
  const [nomeMae, setnomeMae] = useState('');
  const [nomePai, setnomePai] = useState('');
  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [pis, setPIS] = useState('');
  const [codCarteira, setcodCarteira] = useState('');
  const [serieCarteira, setserieCarteira] = useState('');
  const [ufCarteira, setufCarteira] = useState('');
  const [dataCarteira, setdataCarteira] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [genre, setGenre] = useState('Feminino');

  // useEffect(() => {
  //   console.log("Genero:",genre)
  // }, [genre]);

  function submit() {
    // @TODO centralizar informações e enviar
  }

  function StepOne() {
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
              autoFocus
              required
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Mãe</label>
            <input
              className='u-full-width'
              placeholder='Nome da mãe'
              type='text'
              onChange={e => setnomeMae(e.target.value)}
              value={nomeMae}
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Pai</label>
            <input
              className='u-full-width'
              placeholder='Nome do pai'
              type='text'
              onChange={e => setnomePai(e.target.value)}
              value={nomePai}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Gênero</label>
            <select
              className='u-full-width'
              placeholder='Gênero'
              onChange={e => setGenre(e.target.value)}
              value={genre}
            >
              <option value="Feminino">Feminino</option>
              <option value="Masculino">Masculino</option>
              <option value="Não Informar">Não Informar</option>
              <option value="Trans Homem">Trans Homem</option>
              <option value="Trans Mulher">Trans Mulher</option>
              <option value="Travesti">Travesti</option>
              <option value="Masculino">Não Informar</option>
              <option value="Masculino">Não Informar</option>
            </select>
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
            <label>RG</label>
            <input
              className='u-full-width required'
              type='text'
              onChange={e => setRG(e.target.value)}
              value={rg}
              autoFocus
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
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Carteira de trabalho</label>
            <input
              className='u-full-width required'
              type='text'
              placeholder='Código'
              onChange={e => setcodCarteira(e.target.value)}
              value={codCarteira}
              autoFocus
            />
            <input
              className='u-full-width required'
              type='text'
              placeholder='Série'
              onChange={e => setserieCarteira(e.target.value)}
              value={serieCarteira}
              autoFocus
            />
            <input
              className='u-full-width required'
              type='text'
              placeholder='UF'
              onChange={e => setufCarteira(e.target.value)}
              value={ufCarteira}
              autoFocus
            />
            <input
              className='u-full-width required'
              type='text'
              placeholder='PIS'
              onChange={e => setPIS(e.target.value)}
              value={pis}
              autoFocus
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
            <label>Password</label>
            <input
              className='u-full-width required'
              placeholder='Password'
              type='password'
              onChange={e => setPassword(e.target.value)}
              value={password}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Confirm password</label>
            <input
              className='u-full-width'
              placeholder='Confirm Password'
              type='password'
              onChange={e => setConfirmPassword(e.target.value)}
              value={confirmPassword}
            />
          </div>
        </div>
      </div>
    )
  }

  function StepFour() {
    return (
      <div>
        <div className='row'>
          <div className='ten columns terms'>
            <span>By clicking "Accept" I agree that:</span>
            <ul className='docs-terms'>
              <li>
                I have read and accepted the <a href='#'>User Agreement</a>
              </li>
              <li>
                I have read and accepted the <a href='#'>Privacy Policy</a>
              </li>
              <li>I am at least 18 years old</li>
            </ul>
            <label>
              <input
                type='checkbox'
                //   defaultChecked={this.state.checked}
                checked={checked}
                onChange={() => setChecked(!checked)}
                autoFocus
              />
              <span> Accept </span>{' '}
            </label>
          </div>
        </div>
      </div>
    )
  }

  function StepFive() {
    return (
      <div>
        <div className='row'>
          <div className='six columns'>
            <label>First Name</label>
            <input
              className='u-full-width'
              placeholder='First Name'
              type='text'
              onChange={e => setfirstName(e.target.value)}
              value={firstName}
              autoFocus
            />
          </div>
        </div>
        <div className='row'>
          <div className='six columns'>
            <label>Last Name</label>
            <input
              className='u-full-width'
              placeholder='Last Name'
              type='text'
              onChange={e => setLastName(e.target.value)}
              value={lastName}
            />
          </div>
        </div>
      </div >
    )
  }

  const steps = [
    { name: 'Dados Gerais', component: <StepOne /> },
    { name: 'Documentos', component: <StepTwo /> },
    { name: 'Endereço', component: <StepThree /> },
    { name: 'Contato', component: <StepFour /> },
    { name: 'Perfil', component: <StepFive /> }
  ];
  return (
    <MultiStep showNavigation={true} steps={steps} />
  )
}
