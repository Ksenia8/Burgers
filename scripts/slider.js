$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
    margin: 10,
    doots: false,
    navigation: true,
    navText: ["prev","next"],
    responsive: {
      0: {
        items: 1
      }
    }
  });
});