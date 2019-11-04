import React, { useState } from 'react';
import styled from 'styled-components';
import Row from "../../components/row";
import Col from "../../components/col";

export const Container = styled.div`

`;
export default function AddNew({handleAdd}) {
  const [text, setText] = useState("");
  const [type, setType] = useState("Email");

  return (
    <Row wd={12} style={{ borderRadius: "7px", border: "1px solid #00000066", paddingLeft: "5px", paddingRight: "5px", paddingBottom: "5px" }}>
      <Col c={3} float={"left"}>
        <label>Tipo</label>
        <select
          className="u-full-width"
          placeholder="Digite seu contato adicional"
          onChange={e => setType(e.target.value)}
          value={type}
        >
          <option value="Email">Email</option>
          <option value="Telefone">Telefone</option>
          <option value="Celular">Celular</option>
          <option value="LinkedIn">LinkedIn</option>
          <option value="Facebook">Facebook</option>
          <option value="Instagram">Instagram</option>
          <option value="Lattes">Lattes</option>
          <option value="Outros">Outros</option>
        </select>
      </Col>
      <Col c={5}>
        <label>Contatos adicionais</label>
        <input
          className="u-full-width"
          placeholder="Digite seu contato adicional"
          type="text"
          onChange={e => setText(e.target.value)}
          value={text}
        />
      </Col>
      <Col c={2} float={"right"}>
        <br></br>
        <button style={{ width: "100%", padding: 0, marginTop: "5px", borderRadius: 10 }} onClick={() => handleAdd(type, text)}>Incluir</button>
      </Col>
    </Row>
  )
}
