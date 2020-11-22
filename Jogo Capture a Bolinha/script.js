var global = 0;

$(function () {
    createBola();
    $('.bola').addClass('hide');

    // $('.bola').on('click', function(){
    //  createBola();
    // });

    $('.start').on('click', function () {
        var intervalo;
        $('.start').attr('disabled','disabled');
        $('.bola').removeClass('hide');
        speed = $('#speed').val();

        switch (speed) {
            case "1":
                intervalo = 1000;
                break;
            case "2":
                intervalo = 900;
                break;
            case "3":
                intervalo = 800;
                break;
            case "4":
                intervalo = 700;
                break;
            case "5":
                intervalo = 600;
                break;
            default:
                break;
        }
        console.log(intervalo);

        startCountdown();
        setInterval(function createBola() {
            var bola = "<div class='bola'></div>";
            $('main').append($(bola));
            setBola();
            mataBola();
        }, intervalo);
    });



    $('.placar button').on('click', function () {
        location.reload();
    });
});

var tempo = new Number();
// Tempo em segundos
tempo = 10;

function startCountdown() {

    // Se o tempo não for zerado
    if ((tempo - 1) >= 0) {

        // Pega a parte inteira dos minutos
        var min = parseInt(tempo / 60);
        // Calcula os segundos restantes
        var seg = tempo % 60;

        // Formata o número menor que dez, ex: 08, 07, ...
        if (min < 10) {
            min = "0" + min;
            min = min.substr(0, 2);
        }
        if (seg <= 9) {
            seg = "0" + seg;
        }

        // Cria a variável para formatar no estilo hora/cronômetro
        horaImprimivel = seg;
        //JQuery pra setar o valor
        $(".timer span").html(horaImprimivel);

        // Define que a função será executada novamente em 1000ms = 1 segundo
        setTimeout('startCountdown()', 1000);

        // diminui o tempo
        tempo--;

        // Quando o contador chegar a zero faz esta ação
    } else {
        $('.placar').removeClass('hide');
        $('.start').removeAttr('disabled');
        $('body').addClass('dark');
        $('.timer, .score, .bola, .speed').addClass('hide');
        var pontos = $('.score span').html();
        insulto();
        $('.pontos').html(pontos);
    }

}

function createBola() {
    var bola = "<div class='bola'></div>";
    $('main').append($(bola));
    setBola();
    mataBola();
}

function setBola() {
    var width = $(window).width();
    var height = $(window).height();
    var px = Math.floor(Math.random() * (width - 100));
    var py = Math.floor(Math.random() * (height - 80));

    var colors = [
        'red',
        'green',
        'cyan',
        'blue',
        'tomato',
        'yellow',
        'chocolate',
        'gray',
    ];

    var index = Math.floor(Math.random() * colors.length);
    var color = colors[index];

    $('.bola:eq(' + global + ')').attr('style', 'left:' + px + 'px; top:' + py + 'px; background-color:' + color);
}

function mataBola() {
    var score = parseInt($('.score span').html());
    $('.bola').click(function () {
        score = score + 100;
        $('.score span').html(score);

        if (score < 0) {
            $('.score span').css('color', 'red');
        }
    });
}

function insulto() {
    var pontoFinal = parseInt($('.score span').html());
    var insulto;
    var insultoWrapper = $('.placar .insulto');
    console.log(pontoFinal);

    function checkRange(x, n, m) {
        if (x >= n && x <= m) {
            return x;
        } else {
            return !x;
        }
    }

    switch (pontoFinal) {
        case checkRange(pontoFinal, 0, 99):
            insultoWrapper.html('Parabéns! Você é bosta! KKKKKKKK')
        case checkRange(pontoFinal, 1, 100):
            insultoWrapper.html('Parabéns! Você é um inútil!')
            break;
        case checkRange(pontoFinal, 101, 200):
            insultoWrapper.html('Parabéns! Você é quase um inútil!')
            break;
        case checkRange(pontoFinal, 201, 300):
            insultoWrapper.html('Parabéns! Você é só um pouco inútil!')
            break;
        case checkRange(pontoFinal, 301, 400):
            insultoWrapper.html('Parabéns! Você até q da pro gasto!')
            break;
        case checkRange(pontoFinal, 401, 500):
            insultoWrapper.html('Parabéns! Você pode tentar mas nunca conseguirá ser útil')
            break;
        case checkRange(pontoFinal, 501, 600):
            insultoWrapper.html('Parabéns! Você é gay man?')
            break;
        case checkRange(pontoFinal, 601, 700):
            insultoWrapper.html('Deu até dó de ver você tentando...')
            break;
        case checkRange(pontoFinal, 701, 800):
            insultoWrapper.html('Parabéns! Você se acha bom? kkkk')
            break;
        case checkRange(pontoFinal, 801, 900):
            insultoWrapper.html('Parabéns! Você é gay! Desta vez eu confirmei.')
            break;
        case checkRange(pontoFinal, 901, 1000):
            insultoWrapper.html('Parabéns! Você não fez mas do que sua obrigação! :)')
            break;
        default:
            break;
    }
}