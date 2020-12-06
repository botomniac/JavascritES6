$(function () {
    //--------------------------------------------------------

    var txt = $(this).serialize();

    $.ajax({
        type: 'GET',
        url: 'data.json',
        data: txt,
        dataType: 'json',
        success: function (json) {

            $.each(json.products, function (i, e) {

                var product = '<div class="product" data-id="' + i + '"></div>'
                var imageItem = json.products[i].image_src;
                var image = '<div class="image"><img src="imgs/' + json.products[i].image_src[0] + '"></div>'
                var text = '<div class="text"><span class="brand">' + json.products[i].brand + '</span><span class="name">' + json.products[i].name + '</span></div>'
                var colors = '<div class="colors"></div>'
                var colorItems = json.products[i].colors;
                var buybutton = '<div class="button"><div class="before-hover"><span class="more">+</span></div><div class="hovered"><div><span class="minus">-</span><input class="quantity" type="text" value="1"><span class="more">+</span></div><div><a href="#" class="add" data-qtt="1">Adicionar</a></div></div></div>'
                var price = '';

                $('.estante').append(product); //Adiciona o produto na estante
                $('.product[data-id="' + i + '"]').append(image, text, colors, buybutton); //adiciona os campos passados ao produto

                $.each(colorItems, function (index, e) { //funcao que ve cada cor
                    // console.log(colorItems[index]);
                    var spanColor = '<span class="' + colorItems[index] + '">✓</span>';
                    $('.product[data-id="' + i + '"] .colors').append(spanColor);
                });

            });
        }
    });

    //--------------------------------------------------------
});

$(window).ajaxStop(function () {

    //FUNCAO SELECT COLORS
    $('.colors span:nth-child(1)').addClass('selected');
    $('.colors span').on('click', function () {
        $(this).parent().find('span').removeClass('selected');
        $(this).addClass('selected');

        //FUNCAO TROCA DE IMAGEM
        // if($(this).is(':nth-child(2)')){
        //     $(this).parents('.product').find('.image img').attr('src','imgs/adidas-preto.png');
        // }

        //FUNCAO TROCA DE IMAGEM
    });
    //FUNCAO SELECT COLORS

    //FUNCAO SMART QUANTITY
    $('.hovered .minus').on('click', function () {
        var quantidade = parseInt($(this).siblings('.quantity').val());

        if (quantidade == 1) {
            return;
        } else if (quantidade > 1) {
            $(this).siblings('.quantity').attr('value', quantidade - 1);
            $('.add').attr('data-qtt', quantidade - 1);
        }
    });

    $('.hovered .more').on('click', function () {
        var quantidade = parseInt($(this).siblings('.quantity').val());

        if (quantidade >= 1) {
            $(this).siblings('.quantity').attr('value', quantidade + 1);
            $('.add').attr('data-qtt', quantidade + 1);
        }

        if (quantidade == 0) {
            $('.quantity').attr('value', '1');
        }
    });
    //FUNCAO SMART QUANTITY 

    //FUNCAO DE ESTOQUE MAXIMO

    //FUNCAO DE ESTOQUE MAXIMO

});