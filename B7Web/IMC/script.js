$(function () {
    $('#altura').mask('0.00');

    $('button').on('click', function () {
        var altura = $('#altura').val();
        var peso = $('#peso').val();
        var resultado = peso / (altura * altura);

        $('#resultado').html('Seu IMC é: ' + resultado + ' kg/m²');

        var categoria;

        if (resultado < 16) {
            categoria = 'Baixo peso, muito grave';
        } else if (resultado >= 16 && resultado < 16.99) {
            categoria = 'Baixo peso, grave';
        } else if (resultado >= 17 && resultado < 18.49) {
            categoria = 'Baixo peso';
        } else if (resultado >= 18.50 && resultado < 24.99) {
            categoria = 'Peso normal';
        }else if (resultado >= 25 && resultado < 29.99) {
            categoria = 'Sobrepeso';
        }else if (resultado >= 30 && resultado < 34.99) {
            categoria = 'Obesidade grau I';
        }else if (resultado >= 35 && resultado < 39.99) {
            categoria = 'Obesidade grau II';
        }else if (resultado >= 40) {
            categoria = 'Obesidade grau III, gordão mórbido';
        }

        $('#categoria').html(categoria);

    });
});