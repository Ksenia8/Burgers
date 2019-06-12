$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
    margin: 10,
    doots: false,
    smartSpeed: 1000,
    // navigation: true,
    // navText: ["prev","next"],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  owl.owlCarousel();
  $('.next').click(function() {
    owl.trigger('.next.owl.carousel');
  });
  $('.prev').click(function() {
    owl.trigger('.prev.owl.carousel',[300]);
  });

});