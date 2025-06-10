class contato {
  constructor(nome, sobrenome, email, cpf, telefone, contato) {
    this._nome = nome;
    this._sobrenome = sobrenome;
    this._email = email;
    this._cpf = cpf;
    this._telefone = telefone;
    this._contato = contato;
  }
}

function Post(form) {
  if (!Enviar()) {
    return false;
  }

  let data = new contato(
    form.elements.namedItem("nome").value,
    form.elements.namedItem("sobrenome").value,
    form.elements.namedItem("email").value,
    form.elements.namedItem("cpf").value,
    form.elements.namedItem("telefone").value,
    form.elements.namedItem("contato").value
  );
}

function Enviar() {
  let nome = document.getElementById("nomeid");
  let sobrenome = document.getElementById("sobrenomeid");
  let email = document.getElementById("emailid");
  let cpf = document.getElementById("cpfid");
  let telefone = document.getElementById("telefoneid");
  let contatoSelect = document.getElementById("contatoid");

  if (!validarCampos({ nome, sobrenome, email, cpf, telefone, contatoSelect })) {
    return false;
  }
  return true;

function validarCampos(campos) {
  const { nome, sobrenome, email, cpf, telefone, contatoSelect } = campos;

  // Validação do nome e sobrenome
  if (nome.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(nome.value.trim())) {
    alert("O nome deve conter pelo menos 3 letras e apenas caracteres alfabéticos.");
    nome.focus();
    return false;
  }

  if (sobrenome.value.trim().length < 3 || !/^[a-zA-Z]+$/.test(sobrenome.value.trim())) {
    alert("O sobrenome deve conter pelo menos 3 letras e apenas caracteres alfabéticos.");
    sobrenome.focus();
    return false;
  }

  // Validação do email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email.value.trim())) {
    alert("Por favor, insira um email válido.");
    email.focus();
    return false;
  }

  // Validação do CPF
  if (!/^\d{11}$/.test(cpf.value.trim())) {
    alert("O CPF deve conter exatamente 11 números, sem pontos ou traços.");
    cpf.focus();
    return false;
  }

  // Validação do telefone
  if (!/^\d{8,11}$/.test(telefone.value.trim())) {
    alert("O telefone deve conter entre 8 e 11 dígitos.");
    telefone.focus();
    return false;
  }

  if (
    !nome.value.trim() ||
    !sobrenome.value.trim() ||
    !email.value.trim() ||
    !cpf.value.trim() ||
    !telefone.value.trim() ||
    contatoSelect.selectedIndex === 
  ) {
    alert("Todos os campos devem ser preenchidos.");
    return false;
  }

  alert(
    "Obrigado sr(a) " +
      nome.value +
      " os seus dados foram encaminhados com sucesso"
  );
  return true;
}
}
