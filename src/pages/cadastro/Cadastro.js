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
import ApiCep from "../../services/ApiCep";
// // import FileList from "../../components/FileList";
import axios from "axios";
import { POSTFILE } from "../../services/FB";

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

  const [areaInteresse, setAreaInteresse] = useState();
  const [vagaInteresse, setVagaInteresse] = useState();
  const [pretSalarial, setPretSalarial] = useState("");

  function handleStep(type) {
    console.log(type, step);
    if (type === "Avançar" || type === "Salvar") {
      step === 3 ? setStep(3) : setStep(step + 1);
    } else {
      step === 0 ? setStep(0) : setStep(step - 1);
    }
  }

  // useEffect(() => {
  //   let contatosAux = contatos;
  //   const type = "primaryEmail";
  //   const itemFound = contatos.findIndex(it => it.type === type);
  //   if (itemFound >= 0) {
  //     contatosAux[itemFound] = { type, contact: email };
  //   } else {
  //     contatosAux.push({ type, contact: email });
  //   }
  //   setContatos(contatosAux);
  // }, [email]);

  // useEffect(() => {
  //   let contatosAux = contatos;
  //   const type = "primaryPhone";
  //   const itemFound = contatos.findIndex(it => it.type === type);
  //   if (itemFound >= 0) {
  //     contatosAux[itemFound] = { type, contact: fone };
  //   } else {
  //     contatosAux.push({ type, contact: fone });
  //   }
  //   setContatos(contatosAux);
  // }, [fone]);

  useEffect(() => {
    getAreaInteresse()
    getVagaInteresse()
  }, [])


  // function handleAdd(type, text) {
  //   let contatosAux = contatos;
  //   const itemFound = contatos.findIndex(
  //     it => it.type === type && it.text === text
  //   );
  //   if (itemFound < 0) {
  //     setAux(`${type}${text}`);
  //     contatosAux.push({ type, contact: text });
  //     setContatos(contatosAux);
  //   }
  // }

  async function handeCEP(cep) {
    const values = await BuscaCep(cep);
    console.log('values', values)
    setUF(values.uf);
    setCidade(values.localidade);
  }

  async function getAreaInteresse() {
    const url = "https://rh-lab-backend.herokuapp.com/areas_of_interest";
    const result = await axios.get(url)
    let aux = []
    result.data.forEach(rs => {
      console.log('getAreaInteresse', rs.name)
      aux.push(rs.name)
    })
    setAreaInteresse(aux)
  }

  async function getVagaInteresse() {
    const url = "https://rh-lab-backend.herokuapp.com/vagas";
    const result = await axios.get(url)
    let aux = []
    console.log('getVagaInteresse', result.data)
    result.data.forEach(rs => {
      aux.push(rs.title)
    })
    setVagaInteresse(aux)
  }
  const onSubmit = async data => {
    console.log('onSubmit', data)
    const url = "https://rh-lab-backend.herokuapp.com/users";

    if (
      data.nomeCompleto &&
      data.email &&
      data.cpf &&
      data.rg &&
      data.senha
    ) {
      console.log("diferente de nulo");
      let file = document.getElementById('file').files[0];
      let filename = data.cpf.split('.').join('')
      filename = filename.split('-').join('')
      const result = await POSTFILE(file, filename)
      console.log('filename', filename, 'result', result)
      const dataNasc = data.dataNasc.split('/').join('-')
      const user = {
        name: data.nomeCompleto,
        email: data.email,
        CPF: data.cpf,
        RG: data.rg,
        genre: data.genre,
        birth_date: dataNasc,
        CEP: data.cep,
        city: data.cidade,
        UF: data.uf,
        street: data.logradouro,
        number: data.num,
        complement: data.complemento,
        // contacts: data.JSON.stringify(contatos),
        areas_of_interest: data.areaInteresse,
        vacancy_of_interest: data.vagaInteresse,
        wage_claim: data.pretSalarial
      };
      axios.post(url, user).then(res => {
        console.log(res);
        console.log(res.data);
      });
    }
  }
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
                <input
                  required="true"
                  ref={register}
                  name="dataNasc"
                  type="date"
                  placeholder="DD/MM/AAAA"
                // onChange={e => setdataNasc(e.target.value)}
                // value={dataNasc}
                ></input>
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
                  onBlur={() => handeCEP(cep)}
                  required="true"
                  placeholder="Cep..."
                  className="u-full-width"
                //onChange={e => setCEP(e.target.value)}
                />
              </Col>
              <Col c={3} float={"center"}>
                <label>UF</label>
                <input
                  ref={register}
                  name="uf"
                  type="text"
                  className="u-full-width required"
                />
              </Col>
              <Col c={4} float={"right"}>
                <label>Cidade</label>
                <input
                  ref={register}
                  name="cidade"
                  type="text"
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
                {/* <select style={{ width: "100%" }}>

                </select> */}
                <select
                  ref={register}
                  name="areaInteresse"
                  required="true"
                  placeholder="Área de interesse"
                  style={{ width: "100%" }}>
                  {
                    areaInteresse && areaInteresse.map(ai =>
                      <option value={ai}>{ai}</option>
                    )
                  }
                </select>
              </Col>
            </Row>
            <Row wd={11}>
              <Col>
                <label>Vaga de interesse</label>
                {/* <select style={{ width: "100%" }}>

                </select> */}
                <select
                  // ref={register}
                  name="vagaInteresse"
                  //required="true"
                  placeholder="Vaga de interesse"
                  style={{ width: "100%" }}>
                  <option></option>
                  {
                    vagaInteresse && vagaInteresse.map(vi =>

                      <option value={vi}>{vi}</option>
                    )

                  }
                </select>
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
              <input type="file" accept="pdf" id="file" />
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
