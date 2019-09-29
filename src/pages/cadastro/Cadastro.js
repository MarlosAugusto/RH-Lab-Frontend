import React, { useState } from "react";
import MultiStep from "react-multistep";
// import { StepOne, StepTwo, StepThree, StepFour, StepFive } from './steps';
// import { Container } from './styles';
import "../css/prog-tracker.css";
import "../css/skeleton.css";
//import './css/custom.css';
import { DateInput } from "../../components/date";
//import '../../components/date;
import BuscaCep from "../../services/BuscaCep";
import { validateCPF } from "../../services/ValidaCPF";
import Button from "../../components/button";
import { Container, StepContainer } from "../../components/container";
import Row from "../../components/row";
import Col from "../../components/col";
import Upload from "../../components/Upload/index";
import FileList from "../../components/FileList";
import ContatoList from "../../components/contact/contatoLista";
export default function Cadastro() {
  const [step, setStep] = useState(0);

  function handleStep(type) {
    console.log(type, step);
    if (type === "Avançar" || type === "Salvar") {
      step === 3 ? setStep(3) : setStep(step + 1);
    } else {
      step === 0 ? setStep(0) : setStep(step - 1);
    }
  }
  function submit() {
    // @TODO centralizar informações e enviar
  }

  function StepOne() {
    const [nomeCompleto, setnomeCompleto] = useState("");
    const [rg, setRG] = useState("");
    const [dataNasc, setdataNasc] = useState("");
    const [genre, setGenre] = useState("Feminino");
    const [senha, setSenha] = useState("");
    const [confSenha, setConfSenha] = useState("");
    const [cpf, setCPF] = useState("");
    return (
      <div>
        <Row wd={11}>
          <Col>
            <label>Nome</label>
            <input
              className="u-full-width"
              placeholder="Nome completo"
              type="text"
              onChange={e => setnomeCompleto(e.target.value)}
              value={nomeCompleto}
            />
          </Col>
        </Row>
        <Row wd={11}>
          <Col c={6}>
            <label>CPF</label>
            <input
              className="u-full-width"
              type="text"
              onChange={e => setCPF(e.target.value)}
              value={cpf}
              onBlur={e => validateCPF(e.target)}
            />
          </Col>
          <Col c={5} float={"right"}>
            <label>RG</label>
            <input
              className="u-full-width required"
              type="text"
              onChange={e => setRG(e.target.value)}
              value={rg}
            />
          </Col>
        </Row>
        <Row wd={11}>
          <Col c={6}>
            <label>Data de Nascimento</label>
            <DateInput
              type="text"
              placeholder="DD/MM/AAAA"
              onChange={e => setdataNasc(e.target.value)}
              value={dataNasc}
            ></DateInput>
          </Col>
          <Col c={5} float={"right"}>
            <label>Gênero</label>
            <select
              style={{ width: "100%" }}
              placeholder="Gênero"
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
          </Col>
        </Row>
        <Row wd={11}>
          <Col>
            <label>Senha</label>
            <input
              className="u-full-width required"
              placeholder="Senha"
              type="password"
              onChange={e => setSenha(e.target.value)}
              value={senha}
            />
          </Col>
        </Row>
        <Row wd={11}>
          <Col>
            <label>Confirmar senha</label>
            <input
              className="u-full-width"
              placeholder="Confirmar Senha"
              type="password"
              onChange={e => setConfSenha(e.target.value)}
              value={confSenha}
            />
          </Col>
        </Row>
      </div>
    );
  }

  function StepTwo() {
    const [cep, setCEP] = useState("");
    const [logradouro, setLogradouro] = useState("");
    const [num, setNum] = useState("");
    const [complemento, setComplemento] = useState("");
    const [bairro, setBairro] = useState("");

    return (
      <div>
        <Row wd={11}>
          <BuscaCep
            type="text"
            onChange={e => setCEP(e.target.value)}
            value={cep}
            required
          ></BuscaCep>
        </Row>
        <Row wd={11}>
          <Col c={6}>
            <label>Logradouro</label>
            <input
              className="u-full-width"
              type="text"
              onChange={e => setLogradouro(e.target.value)}
              value={logradouro}
            />
          </Col>
          <Col c={5} float={"right"}>
            <label>Bairro</label>
            <input
              className="u-full-width required"
              type="text"
              onChange={e => setBairro(e.target.value)}
              value={bairro}
            />
          </Col>
        </Row>
        <Row wd={11}>
          <Col c={6}>
            <label>Número</label>
            <input
              className="u-full-width"
              type="text"
              onChange={e => setNum(e.target.value)}
              value={num}
            />
          </Col>
          <Col c={5} float={"right"}>
            <label>Complemento</label>
            <input
              className="u-full-width"
              type="text"
              onChange={e => setComplemento(e.target.value)}
              value={complemento}
            />
          </Col>
        </Row>
      </div>
    );
  }

  function StepThree() {
    const [email, setEmail] = useState("");
    const [fone, setFone] = useState("");
    const [text, setText] = useState("");
    const [itens, setItens] = useState("");

    function handleChange(e) {
      setText(e.target.value);
    }

    function handleSubmit(e) {
      e.preventDefaut();
      if (!text.lenght) {
        return;
      }

      const newItem = {
        text: text,
        id: Date.now()
      };

      setItens(itens.concat(newItem));
      setText('');
    }

    function removeItem(id) {
      setItens(
        itens.filter(id)
      )
    }
    return (
      <div>
        <Row wd={11}>
          <Col c={6}>
            <label>Email</label>
            <input
              className="u-full-width"
              placeholder="seuemail@.com.br"
              type="email"
              onChange={e => setEmail(e.target.value)}
              value={email}
            />
          </Col>
          <Col c={5} float={"right"}>
            <label>Celular</label>
            <input
              className="u-full-width"
              placeholder="(99) 1234-12345"
              type="text"
              onChange={e => setFone(e.target.value)}
              value={fone}
            />
          </Col>
        </Row>
        <Row wd={11}>
          <Col c={6}>
            <label>Contatos adicionais</label>
            <input
              className="u-full-width"
              placeholder="Digite seu contato adicional"
              type="text"
              onChange={handleChange}
              value={text} />
          </Col>
          <Col c={5} float={"right"}>
            <br></br>
            <button style={{ width: "100%", height: "44px" }}>Incluir</button>
          </Col>
        </Row>
        <Row wd={11}>
          <ContatoList itens={itens} removeItem={removeItem} />
        </Row>
      </div>
    );
  }

  function StepFour() {
    const [pretSalarial, setPretSalarial] = useState("");

    return (
      <div>
        <Row wd={11}>
          <Col >
            <label>Área de interesse</label>
            <select
              style={{ width: "100%" }}>
            </select>
          </Col>
        </Row>
        <Row wd={11}>
          <Col >
            <label>Vaga de interesse</label>
            <select
              style={{ width: "100%" }}>
            </select>
          </Col>
        </Row>
        <Row wd={11}>
          <Col>
            <label>Pretensão salarial</label>
            <input
              className="u-full-width"
              type="text"
              onChange={e => setPretSalarial(e.target.value)}
              value={pretSalarial}
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
    );
  }

  const steps = [
    { name: "Dados Gerais", component: <StepOne /> },
    { name: "Endereço", component: <StepTwo /> },
    { name: "Contatos", component: <StepThree /> },
    { name: "Interesse", component: <StepFour /> }
  ];
  // return (
  //   <MultiStep showNavigation={true} steps={steps} />
  //   <Button
  //   title={step === 2 ? "Salvar" : "Avançar"}
  //   color="#ffffff99"
  //   bg="#347242"
  // />
  // )
  return (
    <Container wd={70}>
      <StepContainer>
        {step === 0 && <StepOne />}
        {step === 1 && <StepTwo />}
        {step === 2 && <StepThree />}
        {step === 3 && <StepFour />}
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
              color="#317452"
              changeStep={handleStep.bind(this)}
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
    </Container>
  );
}
