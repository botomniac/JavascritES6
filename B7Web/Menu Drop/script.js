$(function () {
    $(this).find('.menu-drop').slideUp('fast');
   
    $('.menu > ul > li').hover(
        function(){
            $(this).find('.menu-drop').slideDown('fast');
        },
        function(){
            $(this).find('.menu-drop').slideUp('fast');
    });

});