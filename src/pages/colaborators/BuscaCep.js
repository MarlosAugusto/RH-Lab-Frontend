import React from 'react';
import ApiCep from '../../services/ApiCep';
import './css/prog-tracker.css';
import './css/skeleton.css';
class BuscaCep extends React.Component {
  constructor() {
    super();

    this.state = {
      rua: 'Rua...'
      , bairro: 'Bairro...'
      , cidade: 'Cidade...'
      , estado: 'Estado'
    }
  }

  handleDados(e) {
    // Pegando o CEP
    const cep = e.target.value;
    // Consultando a API
    ApiCep.SearchCep(cep).then((res) => {
      let rua = res.data.logradouro;
      let bairro = res.data.bairro;
      let cidade = res.data.localidade;
      let estado = res.data.uf;
      // Mudando o estado
      this.setState({
        rua: rua
        , bairro: bairro
        , cidade: cidade
        , estado: estado
      })
    })
  }

  render() {
    return (
      <div>
        <div className='row'>
          <div>
            <label>CEP</label>
            <input type="text" onBlur={this.handleDados.bind(this)} required="true" placeholder="Cep..." autoFocus />
          </div>
        </div>
        <div className='row'>
          <div>
            <label>Cidade</label>
            <input type="text" value={this.state.cidade} disabled />
          </div>
        </div>
        <div className='row'>
          <div>
            <label>UF</label>
            <input type="text" value={this.state.estado} disabled />
          </div>
        </div>
      </div>
    );
  }
}

export default BuscaCep;
