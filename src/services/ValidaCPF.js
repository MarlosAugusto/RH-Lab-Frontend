import '../pages/css/cpf.css';
export function validateCPF(input) {
  if (TestaCPF(input.value)) {
    input.className = 'sucess';
    console.log("Sucesso");
  } else {
    input.className = 'error';
    input.focus();
    console.log("Erro");

  }
}

export function TestaCPF(strCPF) {
  let i;
  var Soma;
  var Resto;
  Soma = 0;
  if (strCPF == "00000000000") return false;

  for (i = 1; i <= 9; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (11 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(9, 10))) return false;

  Soma = 0;
  for (i = 1; i <= 10; i++) Soma = Soma + parseInt(strCPF.substring(i - 1, i)) * (12 - i);
  Resto = (Soma * 10) % 11;

  if ((Resto == 10) || (Resto == 11)) Resto = 0;
  if (Resto != parseInt(strCPF.substring(10, 11))) return false;
  return true;
}
