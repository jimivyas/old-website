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

  $("#click-skills").click(function() {
    $('html, body').animate({
      scrollTop: $("#technology").offset().top
    }, 450);
  });

});