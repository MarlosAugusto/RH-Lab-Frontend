import React from "react";
import ApiCep from "./ApiCep";
import "../pages/css/prog-tracker.css";
import "../pages/css/skeleton.css";

async function handleDados(cep) {

  // Consultando a API
  let values;
  await ApiCep(cep).then((res) => values = res.data);
  return values;
}

export default handleDados;
