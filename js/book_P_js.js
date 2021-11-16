x = window.matchMedia("(max-width:800px)")

function rwd1(x){
    
    if (x.matches){
        console.log("123");
        $("div.time > input").focus(function(){
            console.log("123");
            $(e.target).css("width","100px");
            console.log("123");
            
        });
        
    }
}
rwd1(x);

var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};
mobileHover();

