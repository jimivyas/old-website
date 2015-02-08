$(document).ready(function() {
  var aboveHeight = $('header').outerHeight();

  $(window).scroll(function(){
      if ($(window).scrollTop() > aboveHeight){
          $('nav').addClass('fixed').css('top','0').next()
          .css('padding-top', '50px');
      } else {
          $('nav').removeClass('fixed').next()
          .css('padding-top','0');
      }
  });

  // $( 'li' )
  //   .on('mouseenter', function() {
  //     $(this).css({
  //       'border-right-width': '6px',
  //       'border-left-width': '6px'
  //     });
  //   })
  //   .on('mouseleave', function() {
  //     $(this).css({
  //       'border-width': '2px'
  //     });
  //   });





  $("#click-arrow").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 750);
  });


  $("#click-about").click(function() {
    $('html, body').animate({
      scrollTop: $("#about-me").offset().top
    }, 500);
  });

  $("#click-portfolio").click(function() {
    $('html, body').animate({
      scrollTop: $("#portfolio").offset().top
    }, 500);
  });


});