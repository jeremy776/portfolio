const tema = document.getElementById("tema");
const dbTema = localStorage.getItem("tema");
if(dbTema) {
  tema.href = dbTema;
};
const button = document.getElementById("button-tema")
 function testAja(){
  if(tema.href.includes("light")) {
    tema.href = "/dark.css";
  }else{
    tema.href = "/light.css";
  }
  localStorage.setItem("tema", tema.href)
};
//Loaded
$(window).on("load", function() {
  $(".jumbotron").addClass("on");
  $(".container").addClass("on");
  $(".b").addClass("on");
});
$(".navigasi .menu li a").click(function() {
  $(".check").prop("checked", false)
});
$(document).on("click", 'a[href^="#"]', function(event) {
  event.preventDefault();
  $("html, body").animate({
    scrollTop: $($.attr(this, 'href')).offset().top - 170
  }, 1000);
});

//paralax
$(window).scroll(function() {
  const scroll = $(this).scrollTop();
  $(".jumbotron .avatar").css({
    "transform": "translate(0px, "+ scroll/4 +"%)"
  });
  $(".jumbotron .text1").css({
    "transform": "translate(0px, "+ scroll/3.5 +"%)"
  });
  $(".jumbotron .text").css({
    "transform": "translate(0px, "+ scroll/3 +"%)"
  });
});
