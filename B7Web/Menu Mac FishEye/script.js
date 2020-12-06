$(function () {

    var array = [
        '',
        'rebeccapurple',
        'crimsom',
        'green',
        'black',
        'salmon',
        'gray',
        'tomato',
        'orangered',
        'violet',
        'yellowgreen'
    ];

    $('.icon').hover(function () {

        if ($(this).is(':nth-child(1)')) {
            $('body').css('background-color', array[1]);
        } else if ($(this).is(':nth-child(2)')) {
            $('body').css('background-color', array[2]);
        } else if ($(this).is(':nth-child(3)')) {
            $('body').css('background-color', array[3]);
        } else if ($(this).is(':nth-child(4)')) {
            $('body').css('background-color', array[4]);
        } else if ($(this).is(':nth-child(5)')) {
            $('body').css('background-color', array[5]);
        } else if ($(this).is(':nth-child(6)')) {
            $('body').css('background-color', array[6]);
        } else if ($(this).is(':nth-child(7)')) {
            $('body').css('background-color', array[7]);
        } else if ($(this).is(':nth-child(8)')) {
            $('body').css('background-color', array[8]);
        } else if ($(this).is(':nth-child(9)')) {
            $('body').css('background-color', array[9]);
        } else if ($(this).is(':nth-child(10)')) {
            $('body').css('background-color', array[10]);
        }
    }, function () {
        $('body').css('background-color', 'royalblue');
    });

});