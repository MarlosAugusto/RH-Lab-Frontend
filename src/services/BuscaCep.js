import React from "react";
import ApiCep from "./ApiCep";
import "../pages/css/prog-tracker.css";
import "../pages/css/skeleton.css";
import Row from "../components/row";
import Col from "../components/col";
import { Container } from "../components/container";
class BuscaCep extends React.Component {
  constructor() {
    super();

    this.state = {
      rua: "Rua...",
      bairro: "Bairro...",
      cidade: "Cidade...",
      estado: "Estado"
    };
  }

  handleDados(e) {
    // Pegando o CEP
    const cep = e.target.value;
    // Consultando a API
    ApiCep.SearchCep(cep).then(res => {
      let rua = res.data.logradouro;
      let bairro = res.data.bairro;
      let cidade = res.data.localidade;
      let estado = res.data.uf;
      // Mudando o estado
      this.setState({
        rua: rua,
        bairro: bairro,
        cidade: cidade,
        estado: estado
      });
    });
  }

  render() {
    return (
      <div>
        <Row wd={11}>
          <Col c={6}>
            <label>CEP</label>
            <input
              type="text"
              onBlur={this.handleDados.bind(this)}
              required="true"
              placeholder="Cep..."
              className="u-full-width"
            />
          </Col>
          <Col c={5} float={"right"}>
            <label>UF</label>
            <input
              type="text"
              value={this.state.estado}
              disabled
              className="u-full-width required"
            />
          </Col>
        </Row>
        <Row wd={11}>
          <label>Cidade</label>
          <input
            type="text"
            value={this.state.cidade}
            disabled
            className="u-full-width required"
          />
        </Row>
      </div>
    );
  }
}

export default BuscaCep;
