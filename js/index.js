
var intro1 = document.getElementsByTagName("img")[10];
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

 var intro2 = document.getElementsByTagName("img")[12];
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

  var intro3 = document.getElementsByTagName("img")[14];
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
      iframe3.setAttribute("src","https://www.youtube.com/embed/j2311FZWoFQ");
   });

var to_top = document.getElementsByClassName("arrow_img")[0];
    to_top.addEventListener("click",function(){
    $("html, body").animate({scrollTop: 0}, 800);

});

var mobileHover = function () {
    $('*').on('touchstart', function () {
        $(this).trigger('hover');
    }).on('touchend', function () {
        $(this).trigger('hover');
    });
};
mobileHover();

var yuan = document.querySelectorAll("i");
var li = document.querySelector("#imglist li");
var ul = document.querySelector('#imglist');
var imgs = document.querySelector("#imglist");
var right = document.querySelector(".arrowtop-right");
var left = document.querySelector(".arrowtop-left");
var box = document.querySelector(".box");
console.log(ul);
window.onload = function() {
  //------------------------------------這裡是點擊小圓圈，控制圖片的切換
  //循環小圓點 註冊小圓點
  for (var i = 0; i < yuan.length; i++) {
    //我們需要這裡面的i 必須提前拿出來，要不最後i的值就是最後一個數值瞭
    yuan[i].num = i;
    //註冊事件
    yuan[i].onmouseover = function() {
      // 現在要循環將樣式移除
      for (var j = 0; j < yuan.length; j++) {
        yuan[j].classList.remove("current");
      }
      //這裡是為瞭將點擊的小圓點 增加上樣式
      this.classList.add("current");
      var num = this.num;
      //到這裡的思路就是點擊小圓點 將圖片進行移動，向左面移動，上面css做瞭相應的定位操作
      //移動的距離就是 n 乘以 一張圖片的寬度，
      //n 就是選擇的小圓點的 坐標-----i(num)
      //圖片的寬度 box.offsetWidth
      var left = num * li.offsetWidth;
      // console.log(num, box.offsetWidth, left);
      imgs.style.left = `-${left}px`;

      //這裡小原點聯動左右按鈕
      for (var p = 0; p < yuan.length; p++) {
        //清除全部樣式（小圓點）
        yuan[p].classList.remove("current");
      }
      //給當前的小圓點增加樣式
      yuan[num].classList.add("current");
      //這裡這個位置比較關鍵，在上面設置完樣式之後，記得將此num賦值給全局的index
      index = this.num;

    }
  }
  //------------------------------------以上是點擊小圓圈，控制圖片的切換
  //------------------------------------下面是開始右面輪播，控制圖片的切換
  //首先定義一個全局的index，這個index的作用依舊是控制圖片的切換
  var index = 0;
  right.onclick = function() {
    index++;
    //這裡要對index做一下判斷，如果不做判斷，可以試想一下，
    //隻要你一點擊，index就會無限的增大，增大到你“無法自拔”
    if (index == ul.children.length) {
      //如果坐標為6的話，顯示應該顯示第1張圖片，所以要復位 即index=0
      index = 0;
    }
    var left = index * li.offsetWidth;
    // console.log(index, box.offsetWidth, left);
    imgs.style.left = `-${left}px`;

    //點擊右面增加聯動小圓點的效果
    for (var n = 0; n < yuan.length; n++) {
      //清除全部樣式（小圓點）
      yuan[n].classList.remove("current");
    }
    //給當前的小圓點增加樣式
    yuan[index].classList.add("current");
  };
  //------------------------------------以上是結束右面輪播，控制圖片的切換

  //------------------------------------下面是開始左面輪播，控制圖片的切換
  left.onclick = function() {
    index--;
    //這裡同右點擊一樣，需要做一下判斷，
    console.log(index);
    if (index == -1) {
      index = ul.children.length - 1;
    }
    var left = index * li.offsetWidth;
    // console.log(index, box.offsetWidth, left);
    // console.log(left);
    imgs.style.left = `-${left}px`;

    //這個位置做的是 左面點擊聯動小圓點
    for (var m = 0; m < yuan.length; m++) {
      //清除全部樣式（小圓點）
      yuan[m].classList.remove("current");
    }
    //給當前的小圓點增加樣式
    yuan[index].classList.add("current");
  };
  //------------------------------------上面是結束左面輪播，控制圖片的切換
  //------------------------------------開始設置自動輪播
  var timer = setInterval(function() {
    right.onclick();
  }, 2000);
  //------------------------------------以上是自動輪播結束
  //------------------------------------設置鼠標進來就停止開始
  box.onmouseover = function() {
    clearInterval(timer);
  };
  //------------------------------------設置鼠標進來就停止結束
  //------------------------------------設置鼠標出去就停止開始
  box.onmouseout = function() {
    timer = setInterval(function() {
      right.onclick();
    }, 2000);
  };
  //------------------------------------設置鼠標出去就停止結束
}

  

     
