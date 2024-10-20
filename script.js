//seleciona os elementos de DOM que serão manipulados
const botao = document.getElementById("Interagir")
const mensagem = document.getElementById("mensagem")

//adiciona um evento de clique ao botão
botao.addEventListener("click", () => {

    //solicita o nome do usuário
    let nome = prompt("Qual o seu nome?")

    //condição para ver se o nome do usuário foi fornecido
    if (nome) {
    //solicita a idade do usuário
    let idade = prompt("Qual a sua idade?")

    //condição para verificar se a idade é um número válido
    if(isNaN(idade) || idade  <= 0){
    mensagem.innerText =   "Por favor insira uma idade válida.";
    mensagem.style.color = "red";
    }else {
        //saída de dados com base na idade fornecida
      if (idade < 18) {
        mensagem.innerText = 'Oi, ${nome}, você tem apenas ${anos}. ';
        mensagem.style.color = "orange";
      }else {
        mensagem.innerText = 'Oi,${nome}, você é maior de idade com ${anos}. ';
        mensagem.style.color = "green";
      }
      console.log('Nome do usuário: ${nome}');
      console.log('Idade so usuário: ${idade}');
    }
    } else {
        mensagem.innerText = "Nome não fornecido. Por favor insira um nome.";
        mensagem.style.color = "orange";
    }
});