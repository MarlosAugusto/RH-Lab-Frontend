import React, { useState, useEffect } from "react";
import useForm from 'react-hook-form'
import "../css/prog-tracker.css";
import "../css/skeleton.css";
import { DateInput } from "../../components/date";
import BuscaCep from "../../services/BuscaCep";
import { validateCPF } from "../../services/ValidaCPF";
import Button from "../../components/button";
import { Container, StepContainer } from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Upload from "../../components/Upload/index";
// // import FileList from "../../components/FileList";
import ContactList from "../../components/contact/contactList";
import AddNew from "../../components/contact/addNew";
import axios from "axios";

export default function Cadastro() {
  const { register, handleSubmit, watch, errors } = useForm();
  const [step, setStep] = useState(0);

  const [nomeCompleto, setnomeCompleto] = useState("");
  const [rg, setRG] = useState("");
  const [dataNasc, setdataNasc] = useState("");
  const [genre, setGenre] = useState("Feminino");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [cpf, setCPF] = useState("");

  const [cep, setCEP] = useState("");
  const [cidade, setCidade] = useState("");
  const [uf, setUF] = useState("");
  const [logradouro, setLogradouro] = useState("");
  const [num, setNum] = useState("");
  const [complemento, setComplemento] = useState("");
  const [bairro, setBairro] = useState("");

  const [email, setEmail] = useState("");
  const [fone, setFone] = useState("");
  const [aux, setAux] = useState("");
  const [contatos, setContatos] = useState([]);

  const [areaInteresse, setAreaInteresse] = useState("");
  const [vagaInteresse, setVagaInteresse] = useState("");
  const [pretSalarial, setPretSalarial] = useState("");

  function handleStep(type) {
    console.log(type, step);
    if (type === "Avançar" || type === "Salvar") {
      step === 3 ? setStep(3) : setStep(step + 1);
    } else {
      step === 0 ? setStep(0) : setStep(step - 1);
    }
  }

  useEffect(() => {
    let contatosAux = contatos;
    const type = "primaryEmail";
    const itemFound = contatos.findIndex(it => it.type === type);
    if (itemFound >= 0) {
      contatosAux[itemFound] = { type, contact: email };
    } else {
      contatosAux.push({ type, contact: email });
    }
    setContatos(contatosAux);
  }, [email]);

  useEffect(() => {
    let contatosAux = contatos;
    const type = "primaryPhone";
    const itemFound = contatos.findIndex(it => it.type === type);
    if (itemFound >= 0) {
      contatosAux[itemFound] = { type, contact: fone };
    } else {
      contatosAux.push({ type, contact: fone });
    }
    setContatos(contatosAux);
  }, [fone]);

  function handleInsert() {
    console.log("insert");
    const url = "https://rh-lab-backend.herokuapp.com/users";
    if (
      nomeCompleto !== "" &&
      email !== "" &&
      cpf !== "" &&
      rg !== "" &&
      senha !== ""
    ) {
      console.log("diferente de nulo");
      const user = {
        type: "user",
        name: nomeCompleto,
        email: email,
        CPF: cpf,
        RG: rg,
        genre: genre,
        birth_date: dataNasc,
        password: senha,
        CEP: cep,
        city: cidade,
        UF: uf,
        street: logradouro,
        number: num,
        complement: complemento,
        contacts: JSON.stringify(contatos),
        areas_of_interest: areaInteresse,
        vacancy_of_interest: vagaInteresse,
        wage_claim: pretSalarial
      };

      axios.post(url, user).then(res => {
        console.log(res);
        console.log(res.data);
      });
    }
  }

  function handleAdd(type, text) {
    let contatosAux = contatos;
    const itemFound = contatos.findIndex(
      it => it.type === type && it.text === text
    );
    if (itemFound < 0) {
      setAux(`${type}${text}`);
      contatosAux.push({ type, contact: text });
      setContatos(contatosAux);
    }
  }

  async function handeCEP() {
    const values = await BuscaCep(cep);
    setUF(values.uf);
    setCidade(values.localidade);
    values.logradouro && setLogradouro(values.logradouro);
  }

  const onSubmit = data => { console.log(data) }
  return (

    <Container wd={70}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <StepContainer>
          <div style={{ display: step !== 0 ? 'none' : 'block' }}>
            <Row wd={11}>
              <Col>
                <label>Nome*</label>
                <input
                  name="nomeCompleto"
                  required="true"
                  ref={register}
                  className="u-full-width"
                  placeholder="Nome completo"
                  type="text"
                // onChange={e => setnomeCompleto(e.target.value)}
                // value={nomeCompleto}
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col c={6}>
                <label>CPF*</label>
                <input
                  name="cpf"
                  required="true"
                  ref={register}
                  className="u-full-width"
                  type="text"
                  // onChange={e => setCPF(e.target.value)}
                  // value={cpf}
                  onBlur={e => validateCPF(e.target)}
                />
              </Col>
              <Col c={5} float={"right"}>
                <label>RG*</label>
                <input
                  ref={register}
                  name="rg"
                  required="true"
                  className="u-full-width required"
                  type="text"
                // onChange={e => setRG(e.target.value)}
                // value={rg}
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col c={6}>
                <label>Data de Nascimento*</label>
                <DateInput
                  required="true"
                  ref={register}
                  name="dataNasc"
                  type="text"
                  placeholder="DD/MM/AAAA"
                // onChange={e => setdataNasc(e.target.value)}
                // value={dataNasc}
                ></DateInput>
              </Col>
              <Col c={5} float={"right"}>
                <label>Gênero*</label>
                <select
                  ref={register}
                  name="genre"
                  required="true"
                  style={{ width: "100%" }}
                  placeholder="Gênero"
                // onChange={e => setGenre(e.target.value)}
                // value={genre}
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
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Senha*</label>
                <input
                  ref={register}
                  name="senha"
                  required="true"
                  className="u-full-width required"
                  placeholder="Senha"
                  type="password"
                // onChange={e => setSenha(e.target.value)}
                // value={senha}
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Confirmar senha*</label>
                <input
                  ref={register}
                  name="confSenha"
                  required="true"
                  className="u-full-width"
                  placeholder="Confirmar Senha"
                  type="password"
                // onChange={e => setConfSenha(e.target.value)}
                // value={confSenha}
                />
              </Col>
            </Row>
          </div>
          <div style={{ display: step !== 1 ? 'none' : 'block' }}>
            <Row wd={11}>
              <Col c={3} float={"left"}>
                <label>CEP</label>
                <input
                  ref={register}
                  name="cep"
                  type="text"
                  // onBlur={() => handeCEP()}
                  required="true"
                  placeholder="Cep..."
                  className="u-full-width"
                // onChange={e => setCEP(e.target.value)}
                />
              </Col>
              <Col c={3} float={"center"}>
                <label>UF</label>
                <input
                  ref={register}
                  name="uf"
                  type="text"
                  // value={uf}
                  disabled
                  className="u-full-width required"
                />
              </Col>
              <Col c={4} float={"right"}>
                <label>Cidade</label>
                <input
                  ref={register}
                  name="cidade"
                  type="text"
                  // value={cidade}
                  disabled
                  className="u-full-width required"
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col c={6}>
                <label>Logradouro</label>
                <input
                  ref={register}
                  name="logradouro"
                  className="u-full-width"
                  type="text"
                // onChange={e => setLogradouro(e.target.value)}
                // value={logradouro}
                />
              </Col>
              <Col c={5} float={"right"}>
                <label>Bairro</label>
                <input
                  ref={register}
                  name="bairro"
                  className="u-full-width required"
                  type="text"
                // onChange={e => setBairro(e.target.value)}
                // value={bairro}
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col c={6}>
                <label>Número</label>
                <input
                  ref={register}
                  name="num"
                  className="u-full-width"
                  type="text"
                // onChange={e => setNum(e.target.value)}
                // value={num}
                />
              </Col>
              <Col c={5} float={"right"}>
                <label>Complemento</label>
                <input
                  ref={register}
                  name="complemento"
                  className="u-full-width"
                  type="text"
                // onChange={e => setComplemento(e.target.value)}
                // value={complemento}
                />
              </Col>
            </Row>
          </div>
          <div style={{ display: step !== 2 ? 'none' : 'block' }}>
            <Row wd={11}>
              <Col c={6}>
                <label>Email*</label>
                <input
                  ref={register}
                  name="email"
                  required="true"
                  className="u-full-width"
                  placeholder="seu@email.com.br"
                  type="email"
                // onChange={e => setEmail(e.target.value)}
                // value={email}
                />
              </Col>
              <Col c={5} float={"right"}>
                <label>Celular*</label>
                <input
                  ref={register}
                  name="fone"
                  required="true"
                  className="u-full-width"
                  placeholder="(99) 1234-12345"
                  type="text"
                // onChange={e => setFone(e.target.value)}
                // value={fone}
                />
              </Col>
            </Row>
            <Row mt={15} wd={11}>
              {/* <AddNew handleAdd={handleAdd} /> */}
            </Row>
            {/* {contatos &&
              contatos.map(
                ({ type, contact }, index) =>
                  index > 1 && (
                    <ContactList key={index} type={type} text={contact} />
                  )
              )} */}
            {/* <Row wd={11}>
            <ContatoList contatos={contatos} removeItem={removeItem} />
          </Row> */}
          </div>
          <div style={{ display: step !== 3 ? 'none' : 'block' }}>
            <Row wd={11}>
              <Col>
                <label>Área de interesse</label>
                <select style={{ width: "100%" }}></select>
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Vaga de interesse</label>
                <select style={{ width: "100%" }}></select>
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Pretensão salarial*</label>
                <input
                  ref={register}
                  name="pretSalarial"
                  required="true"
                  className="u-full-width"
                  type="text"
                // onChange={e => setPretSalarial(e.target.value)}
                // value={pretSalarial}
                />
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Anexar currículo</label>
              </Col>
            </Row>
            <Row wd={11}>
              <Upload />
            </Row>
          </div>
        </StepContainer>
        <div style={{ flexDirection: "row", display: "flex" }}>
          <div style={{ width: "50%" }}>
            {step === 0 ? (
              <Button
                style={{ marginRight: "10px" }}
                title="Cancelar"
                color="#ff0000"
                changeStep={handleStep.bind(this)}
              />
            ) : (
                <Button
                  title="Voltar"
                  color="#554f4f"
                  changeStep={handleStep.bind(this)}
                />
              )}
          </div>
          <div style={{ width: "50%" }}>
            {step === 3 ? (
              <Button
                title="Salvar"
                type="submit"
                color="#317452"
                changeStep={handleStep.bind(this)}
              // outherFunction={handleInsert.bind(this)}
              // outherFunction={handleSubmit(onSubmit)}
              />
            ) : (
                <Button
                  title="Avançar"
                  color="#554f4f"
                  changeStep={handleStep.bind(this)}
                />
              )}
          </div>
        </div>

      </form>
    </Container>
  );
}
