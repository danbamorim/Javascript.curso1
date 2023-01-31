var area = document.getElementById("area")

function entrou() {
    var nome = prompt("Qual tu nombre?");

    if (nome === '' || nome === null) {
        alert('ta errado porraaaaaaaaaaaaaaaaaaaaaa')
        area.innerHTML = 'bem vinde' + ' ' + 'pero tu nombre estas equivocado'+ ' ';
    } else {
        area.innerHTML = 'bem vinde' + ' ' + nome + ' ';
    }              
    let botaoSai = document.createElement("button");
    botaoSai.innerText = 'Sair do botao';
    botaoSai.onclick = sai;
    area.appendChild(botaoSai);
}

function sai(){
    alert("foi?");
    area.innerHTML = 'Tubarao te amo, falcao te amo'
}