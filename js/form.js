
//class contato

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

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("cpf").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value);



}

function Enviar() {

    let nome = document.getElementById("nomeid");
    let sobrenome = document.getElementById("sobrenomeid");
    let email = document.getElementById("emailid");
    let cpf = document.getElementById("cpfid");
    let telefone = document.getElementById("telefoneid");
    let contato = document.getElementById("contatoid");

    if (
        !nome.value.trim() ||
        !sobrenome.value.trim() ||
        !email.value.trim() ||
        !cpf.value.trim() ||
        !telefone.value.trim() ||
        contato.selectedIndex === 0 // Assume o primeiro option é o placeholder
    ) {
        alert("Todos os campos devem ser preenchidos.");
        return false;
    } else {
        alert('Obrigado sr(a) ' + nome.value + ' os seus dados foram encaminhados com sucesso');
    }
    return true;

}



