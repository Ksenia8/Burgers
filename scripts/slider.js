$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
    margin: 50,
    doots: false,
    smartSpeed: 1000,
    // navigation: true,
    navText: [$(".arrow-left"),$(".arrow-right")],
    responsive: {
      0: {
        items: 1
      }
    }
  });

  owl.owlCarousel();
  $('.arrow-left').click(function() {
    owl.trigger('.next.owl.carousel');
  });
  $('.arrow-right').click(function() {
    owl.trigger('.prev.owl.carousel',[300]);
  });

});