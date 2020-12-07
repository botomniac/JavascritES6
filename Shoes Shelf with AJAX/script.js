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
                var wrapperProductAdded = '<span class="productAdded"></span>';
                var imageItem = json.products[i].image_src;
                // var image = '<div class="image"><img src="imgs/' + json.products[i].image_src[0] + '"></div>'
                var image = '<div class="image"></div>'
                var text = '<div class="text"><span class="brand">' + json.products[i].brand + '</span><span class="name">' + json.products[i].name + '</span></div>'
                var colors = '<div class="colors"></div>'
                var colorItems = json.products[i].colors;
                var buybutton = '<div class="button"><div class="before-hover"><span class="more">+</span></div><div class="hovered"><div><span class="minus">-</span><input class="quantity" type="text" value="1"><span class="more">+</span></div><div><a href="#" class="add" data-qtt="1">Adicionar</a></div></div></div>'
                //Cria um elemento escondido com a quantidade maxima do produto em estoque:
                var maxQuantity = '<input type="text" style="display:none;" class="hide max-qtt" data-max-qtt="' + json.products[i].stock + '">';
                var price = '<span class="price"> $' + json.products[i].price + '</span>';

                $('.estante').append(product); //Adiciona o produto na estante
                $('.product[data-id="' + i + '"]').append(wrapperProductAdded, price, image, text, maxQuantity, colors, buybutton); //adiciona os campos passados ao produto

                $.each(colorItems, function (index, e) { //funcao que ve cada cor
                    // console.log(colorItems[index]);
                    var spanColor = '<span class="' + colorItems[index] + '" data-color-id="' + index + '">✓</span>';
                    $('.product[data-id="' + i + '"] .colors').append(spanColor);
                });

                $.each(imageItem, function (index, e) { //funcao que ve cada imagem
                    // console.log(imageItem[index]);
                    var imageElement = '<img src="imgs/' + imageItem[index] + '" data-image-id="' + index + '">';
                    // console.log(imageElement);
                    $('.product[data-id="' + i + '"] .image').append(imageElement);

                    if (index > 0) {
                        $('.product[data-id="' + i + '"] .image img:not(:first-child)').addClass('hide');
                    }
                });

            });
        }
    });

    //--------------------------------------------------------
});

$(window).ajaxStop(function () {

    // FUNCAO DE ALINHAMENTO DOS PRODUTOS
    // if($('.product').length >= 1){
    //     $('.estante').css('justify-content','flex-start');
    // }else{
    //     $('.estante').css('justify-content','center');
    // }
    // FUNCAO DE ALINHAMENTO DOS PRODUTOS


    //FUNCAO SELECT COLORS
    $('.colors span:nth-child(1)').addClass('selected');
    $('.colors span').on('click', function () {

        $(this).parent().find('span').removeClass('selected');
        $(this).addClass('selected');

        //FUNCAO TROCA DE IMAGEM
        var getColorId = $(this).attr('data-color-id');
        // console.log(getColorId);
        $(this).parents('.product').find('.image img').addClass('hide');
        $(this).parents('.product').find('.image img[data-image-id="' + getColorId + '"]').removeClass('hide');

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
        //pegar a quantidade maxima do produto:
        var maxStockQuantity = $(this).parents('.product').find('.max-qtt').attr('data-max-qtt');

        if ((quantidade >= 1) && (quantidade < maxStockQuantity)) {
            $(this).siblings('.quantity').attr('value', quantidade + 1);
            $('.add').attr('data-qtt', quantidade + 1);
        }
    });
    //FUNCAO SMART QUANTITY 

    //FUNCAO DE COMPRA
    $('.add').on('click', function (e) {
        e.preventDefault();
        var mainElement = $(this).parents('.product').find('.productAdded');
        console.log( mainElement);
        var qtdAdded = $(this).parents('.product').find('.quantity').val();

        if (qtdAdded > 1) {
            mainElement.html( qtdAdded + ' produtos foram adicionados ao carrinho');
            mainElement.addClass('added-on');
        } else {
            mainElement.html('1 produto foi adicionado ao carrinho');
            mainElement.addClass('added-on');
        }

        tiraAddedOn();
        changeNumberOnCart(qtdAdded);
    });

    function tiraAddedOn(){
        setTimeout(function(){
            $('.product').find('.productAdded').removeClass('added-on')
        }, 2500);
    }

    function changeNumberOnCart(qtdAdded){
        var qtdOnCart = parseInt($('.producs-on-cart .qtd').html());
        var qty = parseInt(qtdAdded);
        var resultado = qtdOnCart + qty;
        // console.log('QTDONCART: ' + qtdOnCart);
        // console.log('resultado: ' + resultado);
        $('.producs-on-cart .qtd').html(resultado);

    }
    //FUNCAO DE COMPRA

});