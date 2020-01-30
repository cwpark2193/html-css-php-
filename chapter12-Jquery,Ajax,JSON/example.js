var check=0;
$(document).ready(function() {
  $("#show").click(function(){
    $("#p1").show();
  });
  $("#hide").click(function(){
    $("#p1").hide();
  });
  $("#inputs").keydown(function(){
    var str = $("#inputs").val();
    $("#p2").text(str);
  });
  $("#left").click(function(){
    check-=100;
    $(".div1").animate({left: check+"px"});
  });
  $("#right").click(function(){
    check+=100;
    $(".div1").animate({left: check+"px"});
  });
  $("#run").click(function(){
    $(".div2").animate({left:'60px',opacity:'0.5',width:'150px',height:'150px'});
    $(".div2").css("border","3px solid green");
    $("#p3").css("background-color","lightgreen");
  });
});
