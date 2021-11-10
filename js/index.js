var intro1 = document.getElementsByTagName("img")[4];
var body1 = document.getElementsByClassName("body1")[0];
var intro1_on = body1.querySelector("div.intro1");
var close_btn = document.getElementsByClassName("close_btn")[0];
var iframe1 = document.getElementsByTagName("iframe")[0];
intro1.addEventListener("click",function(){
    
    intro1_on.style.display="block";
    
});
   
 close_btn.addEventListener("click",function(){
    intro1_on.style.display="none";
    iframe1.setAttribute("src","");
    iframe1.setAttribute("src","https://www.youtube.com/embed/6MVSTArnJ_k");
 });

 var intro2 = document.getElementsByTagName("img")[6];
 var body2 = document.getElementsByClassName("body2")[0];
 var intro2_on = body2.querySelector("div.intro2");
 var close_btn2 = document.getElementsByClassName("close_btn2")[0];
 var iframe2 = document.getElementsByTagName("iframe")[1];
 intro2.addEventListener("click",function(){
     
     intro2_on.style.display="block";
     
 });
    
  close_btn2.addEventListener("click",function(){
     intro2_on.style.display="none";
     iframe2.setAttribute("src","");
     iframe2.setAttribute("src","https://www.youtube.com/embed/S4JLJVVjevI");
  });

  var intro3 = document.getElementsByTagName("img")[8];
  var body3 = document.getElementsByClassName("body3")[0];
  var intro3_on = body3.querySelector("div.intro3");
  var close_btn3 = document.getElementsByClassName("close_btn3")[0];
  var iframe3 = document.getElementsByTagName("iframe")[2];
  intro3.addEventListener("click",function(){
      
      intro3_on.style.display="block";
      
  });
     
   close_btn3.addEventListener("click",function(){
      intro3_on.style.display="none";
      iframe3.setAttribute("src","");
      iframe3.setAttribute("src","https://www.youtube.com/embed/jM3HXNusWA0");
   });

var to_top = document.getElementsByClassName("arrow_img")[0];
    to_top.addEventListener("click",function(){
    $("html, body").animate({scrollTop: 0}, 800);
});

  
   

     
