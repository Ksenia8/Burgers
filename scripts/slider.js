// owlCarousel

$(document).ready(function(){
  $(".owl-carousel").owlCarousel({
    nav:true,
    loop:true,
    margin: 60,
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

  var owl = $('.owl-carousel');
  owl.owlCarousel();
  $('.arrow-left').click(function() {
    owl.trigger('.prev.owl.carousel');
  });
  $('.arrow-right').click(function() {
    owl.trigger('.next.owl.carousel');
  });

});


