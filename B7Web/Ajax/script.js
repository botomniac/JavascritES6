$(function () {
    // $('.action').bind('click', function () {

    //     //carrega o conteudo do arquivo dentro da div
    //     // $('.div').load('teste.html');         
    //     //--------------------------------------------------------

    //     //fazendo com GET
    //     // $.get('teste.html', function (data) {
    //     //     $('.div').html(data);
    //     // });
    //     //--------------------------------------------------------

    //     //fazendo com POST
    //     // $.post('teste.html', function (data) {
    //     //     $('.div').html(data);
    //     // });
    //     //-------------------------------------------------------    
    // });

    $('#form').bind('submit', function (e) {
        e.preventDefault();

        var txt = $(this).serialize();

        $.ajax({
            type: 'GET',
            url: 'teste.txt',
            data: txt,
            success: function(resultado) {
                $('.div').html('Resultado: ' + resultado);
            },
            error: function() {
                alert('DEU FRANGO!');
            }
        });
    });
});