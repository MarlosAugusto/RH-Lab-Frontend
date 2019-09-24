import React, { useState, useEffect } from 'react';
import MultiStep from 'react-multistep';
// import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './steps';
// import { Container } from './styles';
import '../css/prog-tracker.css';
import '../css/skeleton.css';
//import './css/custom.css';
import { DateInput } from "../../components/date";
//import '../../components/date;
import BuscaCep from '../../services/BuscaCep';

export default function Colaborador() {
  const [nomeCompleto, setnomeCompleto] = useState('');
  const [nomeMae, setnomeMae] = useState('');
  const [nomePai, setnomePai] = useState('');
  const [dataNasc, setdataNasc] = useState('');
  const [genre, setGenre] = useState('Feminino');

  const [rg, setRG] = useState('');
  const [cpf, setCPF] = useState('');
  const [pis, setPIS] = useState('');
  const [codCarteira, setcodCarteira] = useState('');
  const [serieCarteira, setserieCarteira] = useState('');
  const [ufCarteira, setufCarteira] = useState('UF');
  const [dataCarteira, setdataCarteira] = useState('');

  const [cep, setCEP] = useState('');
  const [mun, setNun] = useState('');
  const [uf, setUF] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [num, setNum] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');


  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [checked, setChecked] = useState('');
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
            <label>Data de Nascimento</label>
            <DateInput
              type='text'
              placeholder='DD/MM/AAAA'
              //onChange={e => setdataCarteira(e.target.value)}
              //value={dataCarteira}
              autoFocus
            >
            </DateInput>
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
              <option value="Trans Homem">Trans Homem</option>
              <option value="Trans Mulher">Trans Mulher</option>
              <option value="Travesti">Travesti</option>
              <option value="TransGênero">Trans Gênero</option>
              <option value="Não Informar">Não Informar</option>
              <option value="Sem genêro">Sem Gênero</option>
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
          </div>
          <div className='six columns'>
            <input
              className='u-full-width required'
              type='text'
              placeholder='PIS'
              onChange={e => setPIS(e.target.value)}
              value={pis}
              autoFocus
            />
            <label className='label'>UF</label>
            <select
              className='u-full-width'
              onChange={e => setufCarteira(e.target.value)}
              value={ufCarteira}
            >
              <option value="AC">Acre</option>
              <option value="AL">Alagoas</option>
              <option value="AP">Amapá</option>
              <option value="AM">Amazonas</option>
              <option value="BA">Bahia</option>
              <option value="CE">Ceará</option>
              <option value="DF">Distrito Federal</option>
              <option value="ES">Espírito Santo</option>
              <option value="GO">Goiás</option>
              <option value="MA">Maranhão</option>
              <option value="MT">Mato Grosso</option>
              <option value="MS">Mato Grosso do Sul</option>
              <option value="MG">Minas Gerais</option>
              <option value="PA">Pará</option>
              <option value="PB">Paraíba</option>
              <option value="PR">Paraná</option>
              <option value="PE">Pernambuco</option>
              <option value="PI">Piauí</option>
              <option value="RJ">Rio de Janeiro</option>
              <option value="RN">Rio Grande do Norte</option>
              <option value="RS">Rio Grande do Sul</option>
              <option value="RO">Rondônia</option>
              <option value="RR">Roraima</option>
              <option value="SC">Santa Catarina</option>
              <option value="SP">São Paulo</option>
              <option value="SE">Sergipe</option>
              <option value="TO">Tocantins</option>
            </select>
            <label className='label'>Data</label>
            <DateInput
              type='text'
              placeholder='DD/MM/AAAA'
              //onChange={e => setdataCarteira(e.target.value)}
              //value={dataCarteira}
              autoFocus
            >
            </DateInput>
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
            <BuscaCep
              type='text'
              onChange={e => setCEP(e.target.value)}
              value={cep}
              autoFocus
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
      </div >
    )
  }

  function StepFour() {
    return (
      <div>
        {/* <div className='row'>
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
        </div> */}
        <div className='row'>
          <div className='six columns'>
            <div>
              <label>Contatos</label>
              <button>Incluir</button>
            </div>
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
