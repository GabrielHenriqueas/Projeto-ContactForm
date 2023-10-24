const urlLocal = "http://localhost:3000/contatos"

async function Cadastrar(e) {
    e.preventDefault();//captura o evento de submit do form
    //pegar os dados do formulário
    const cep = document.getElementById("cep").value;
    const rua = document.getElementById("rua").value;
    const numero = document.getElementById("numero").value;
    const complemento = document.getElementById("complemento").value;
    const bairro = document.getElementById("bairro").value;
    const cidade = document.getElementById("cidade").value;
    const uf = document.getElementById("UF").value;
    const nome = document.getElementById("nome").value;
    const sobrenome = document.getElementById("sobrenome").value;
    const email = document.getElementById("email").value;
    const pais = document.getElementById("pais").value;
    const ddd = document.getElementById("ddd").value;
    const telefone = document.getElementById("telefone").value;
    const anotacoes = document.getElementById("anotacoes").value;

    const objDados = { cep, rua, numero, complemento, bairro, cidade, uf, nome, sobrenome, email, pais, ddd, telefone, anotacoes }

    try {
        const promise = await fetch(urlLocal, {
            //transforma um objeto em json
            body: JSON.stringify(objDados),
            headers: { "Content-Type": "application/json" },
            method: "post"
        });

        const retorno = promise.json();//pega o retorno da api
        console.log(retorno);

    } catch (error) {
        alert("Deu ruim!" + error)
    }
}

async function chamarApi() {
    const cep = document.getElementById("cep").value;
    const url = `https://viacep.com.br/ws/${cep}/json/`

    try {//resolvida ou fullfield
        const promise = await fetch(url)
        const endereco = await promise.json();
        console.log(endereco);

        //exibir dados no formulário

        exibirEndereco(endereco);
        document.getElementById("not-found").innerText = ""

    } catch (error) {
        limparEndereco();
        alert("CEP Inválido");
    }
}

function exibirEndereco(endereco) {
    document.getElementById("rua").value = endereco.logradouro;
    document.getElementById("bairro").value = endereco.bairro;
    document.getElementById("cidade").value = endereco.localidade;
    document.getElementById("UF").value = endereco.uf;
}

function limparEndereco() {
    document.getElementById("cep").value = "";
    document.getElementById("rua").value = "";
    document.getElementById("numero").value = "";
    document.getElementById("complemento").value = "";
    document.getElementById("bairro").value = "";
    document.getElementById("cidade").value = "";
    document.getElementById("UF").value = "";
    document.getElementById("nome").value = "";
    document.getElementById("sobrenome").value = "";
    document.getElementById("email").value = "";
    document.getElementById("pais").value = "";
    document.getElementById("ddd").value = "";
    document.getElementById("telefone").value = "";
    document.getElementById("anotacoes").value = "";
}