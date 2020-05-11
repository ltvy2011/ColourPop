window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.getElementById("logo1").className = "hide_logo";
    document.getElementById("logo2").className = "show_logo";
    document.getElementById("head").className = "animate";
  } else {
    document.getElementById("logo1").className = "show_logo";
    document.getElementById("logo2").className = "";
    document.getElementById("head").className = "";
  }
}
document.getElementById("heart").addEventListener("click", function(){
  document.getElementById("heart").className = "heart_unactive";
  document.getElementById("heart_fill").className = "heart_active";
});
document.getElementById("heart_fill").addEventListener("click", function(){
  document.getElementById("heart").className = "heart_active";
  document.getElementById("heart_fill").className = "heart_unactive";
});

$('.product_slider').slick({
  slidesToShow: 4,
  slidesToScroll: 4,
  arrows: true,
});