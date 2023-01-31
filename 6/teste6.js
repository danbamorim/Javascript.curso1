var peso;
var altura;
var imc;
var resultado;

function contar(event) {
    event.preventDefault();

    peso = document.getElementById('peso').value
    altura = document.getElementById('altura').value

    imc = peso / (altura * altura);

    if (imc < 17) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Tá muito abaixo do peso, seu resultado do imc foi' + ' ' + imc.toFixed(2) + '<br> Está muito abaixo do peso';
    } else if (imc > 17 && imc <= 18.49) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Tá abaixo do peso, seu resultado do imc foi' + ' ' + imc.toFixed(2)  + '<br> Está pouco abaixo do peso';
    }
    else if (imc > 18.5 && imc < 24.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Tá normal, seu resultado do imc foi' + ' ' + imc.toFixed(2)  + '<br> peso normal ';
    }
    else if (imc > 25 && imc < 29.99) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Tá acima do peso, seu resultado do imc foi' + ' ' + imc.toFixed(2)  + '<br> peso acima';
    }
    else if (imc > 30) {
        resultado = document.getElementById('resultado');
        resultado.innerHTML = '<br> Tá muito acima do peso, seu resultado do imc foi' + ' ' + imc.toFixed(2)  + '<br> peso muito acima';
    }

    peso = document.getElementById('peso').value = '';
    altura = document.getElementById('altura').value= '';
} 