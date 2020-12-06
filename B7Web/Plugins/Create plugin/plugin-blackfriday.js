(function($){

    $.fn.blackFridayTheme = function(){
        this.each(function(){

            $(this).css('background-color','#0e0e0e').css('color','white').css('text-decoration','none');
            
            $(this).hover(function(){
                $(this).css('color','yellow');
            },
            function(){
                $(this).css('color','red');
            });
        });

        return this;
    }


}(jQuery));