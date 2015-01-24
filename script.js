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

  $('.abt-me').hover(function(){
    $('.abt-me').addClass('animated bounceOutLeft');
  });
});
