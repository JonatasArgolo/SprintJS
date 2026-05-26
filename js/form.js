
//class contato

class contato {
    constructor(nome, sobrenome, email, telefone, contato, avaliacao) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.email = email;
        this.telefone = telefone;
        this.contato = contato;
        this.avaliacao = avaliacao;
    }
}

function Post(form) {

    let data = new contato(form.elements.namedItem("nome").value,
        form.elements.namedItem("sobrenome").value,
        form.elements.namedItem("email").value,
        form.elements.namedItem("telefone").value,
        form.elements.namedItem("contato").value,
        form.elements.namedItem("avaliacao").value);

    Enviar(data, form);

}

function Enviar(consol, form) {
    


    document.addEventListener("submit", (e) => {
        e.preventDefault();
        var nome = document.getElementById("nomeid");
        var sobrenome = document.getElementById("sobrenomeid");

        if (nome.value != "") {
            alert('Obrigado sr(a) ' + nome.value + ' ' + sobrenome.value + ' os seus dados foram encaminhados com sucesso');
        }
        console.log(consol);
        form.reset();
    }, {once: true});
}