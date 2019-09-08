import React, { useState } from 'react';
// import './css/custom.css';
// import './css/normalize.css';
import './css/prog-tracker.css';
import './css/skeleton.css';

export function StepOne() {
  const [nomeCompleto, setnomeCompleto] = useState('');
  const [nomeMae, setnomeMae] = useState('');
  const [nomePai, setnomePai] = useState('');

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
    </div >
  )
}

export function StepTwo() {
  const [email, setEmail] = useState('');
  const [emailConfirm, setEmailConfirm] = useState('');

  return (
    <div>
      <div className='row'>
        <div className='six columns'>
          <label>Your email</label>
          <input
            className='u-full-width required'
            placeholder='test@mailbox.com'
            type='email'
            onChange={e => setEmail(e.target.value)}
            value={email}
            autoFocus
          />
        </div>
      </div>
      <div className='row'>
        <div className='six columns'>
          <label>Confirm email</label>
          <input
            className='u-full-width'
            placeholder='Confirm email'
            type='email'
            onChange={e => setEmailConfirm(e.target.value)}
            value={emailConfirm}
          />
        </div>
      </div>
    </div>
  )
}

export function StepThree() {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

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

export function StepFour() {
  const [checked, setChecked] = useState('');

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

export function StepFive() {
  const [firstName, setfirstName] = useState('');
  const [lastName, setLastName] = useState('');

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
