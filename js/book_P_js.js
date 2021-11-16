x = window.matchMedia("(max-width:800px)")

$(function (){
    
    if (x.matches){
       $("div.time > input").focus(function(e){
           
            $(e.target).css({
                position: relative,
                width: 100,
                });
            
        });
        $("div.time > input").blur(function(e){
           
            $(e.target).css({
                position: satic,
                width: 40,
                });
        }); 
    } 
})


var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};
mobileHover();

