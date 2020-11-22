var idade = document.querySelector('#main input');
idade = idade.value;
var btn = document.querySelector('#main button');

function checaIdade(idade) {
    var num = idade.value;  
}

checaIdade(20)
    .then(function () {
        console.log("Maior que 18");
    })
    .catch(function () {
        console.log("Menor que 18");
    });