// $(document).ready(function() {
//   var $p=$("p"), $container=$(".contain"),$button1=$("#button1"),$button2=$("#button2");
//   $p.css({"background-color" : "yellow"});
//   $container.css({"height":"80px","border": "1px solid red","width": "10%"
//   });
//   $container.mouseover(function(){
//     $(this).css({"border" : "2px solid blue"});
//   });
//   $button1.click(function(){
//     $container.remove();
//   });
//   $button2.click(function(){
//     $container.empty();
//   });
// });
$(document).ready(function() {
  var $modWidth=50,
  $div=$("div");
  $div.click(function(){
    $(this).width($modWidth);
    if(!$(this).hasClass("next")){
      $(this).addClass("next");
      console.log("next class create");
    }else{
      console.log("next class already");
    }
    $modWidth -= 8;
  });
});
