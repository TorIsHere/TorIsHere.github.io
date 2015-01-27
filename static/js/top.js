// Hide Header on on scroll down
var didScroll;
var firstScroll = false;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();
var is_menu_showed = false;
var is_scroll_down = false;

function slide_menu() {
  var slide_menu_left;
  var content_left;
  var animate_menu = 200;
  if (is_menu_showed){
    slide_menu_left = '-285px';
    content_left = '0px';
    is_menu_showed = !is_menu_showed;
  }
  else{
    slide_menu_left = '0px';
    content_left = '285px';
    is_menu_showed = !is_menu_showed;
  }
  $('.slide-menu').animate({
      left: slide_menu_left
  }, animate_menu);
  $('.home-menu').animate({
      left: content_left
  }, animate_menu);
  $('.content-wrapper').animate({
      left: content_left
  }, animate_menu);
  $('.splash-container').animate({
      left: content_left
  }, animate_menu);
  $('.resume-content').animate({
      left: content_left
  }, animate_menu);
}
function slide_menu_click(){
    $('.fa-bars').click(function(){
        slide_menu();
    });
    $('.pure-menu-heading').click(function(){
        slide_menu();
    });
}

function isScrolledIntoView(elem)
{
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

var is_coding_animated = false;
var is_camera_animated = false;
$(window).scroll(function(event){
    didScroll = true;
    if(!is_coding_animated && isScrolledIntoView('#coding')){
        $('#coding').lazylinepainter(
        {
          "svgData": pathObj1,
          "strokeWidth": 2,
          "strokeColor": "#000000"
        }).lazylinepainter('paint');
        is_coding_animated = true;
    }
    if(!is_camera_animated && isScrolledIntoView('#Camera')){
        $('#Camera').lazylinepainter(
        {
          "svgData": pathObj2,
          "strokeWidth": 2,
          "strokeColor": "#FF843B"
        }).lazylinepainter('paint');
        is_camera_animated = true;
    }
    if(isScrolledIntoView('#animate-name')){
      $('#animate-name').removeClass().addClass('float-center card-container animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#animate-name').removeClass().addClass('float-center card-container');
    }
    if(isScrolledIntoView('#left-card-1')){
      $('#left-card-1').removeClass().addClass('float-right card-container-2 animated bounceInLeft').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#left-card-1').removeClass().addClass('float-right card-container-2');
    }
    if(isScrolledIntoView('#right-card-1')){
      $('#right-card-1').removeClass().addClass('float-left card-container-2 animated bounceInRight').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){

      });
    }
    else{
      $('#right-card-1').removeClass().addClass('float-left card-container-2');
    }

});

setInterval(function() {
    if (didScroll) {
        if(!firstScroll){
          firstScrolled();
          firstScroll = true;
        }
        hasScrolled();
        didScroll = false;
    }
}, 250);

function firstScrolled(){
  $('.fa.fa-arrow-down.arrow').addClass('hidden');
}

function hasScrolled() {
    var st = $(this).scrollTop();
    if(st > 50) {
        $('.home-menu.pure-menu-open').removeAttr('id');
    } else {
        $('.home-menu.pure-menu-open').attr('id', 'transparent');
    }
    // Make sure they scroll more than delta
    /*if(Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight && !is_menu_showed){
        // Scroll Down
        //$('header').removeClass('nav-down').addClass('nav-up');
        is_scroll_down = true;
        $('.header').hide();
    } else {
        // Scroll Up
        if(st + $(window).height() < $(document).height()) {
            //$('header').removeClass('nav-up').addClass('nav-down');
            is_scroll_down = false;
            $('.header').show();
        }
    }

    lastScrollTop = st;*/
}

$(document).ready(function() {
  slide_menu_click();

  $('#splash_animate').removeClass().addClass('splash-head animated fadeInUp').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
      $(this).removeClass().addClass('splash-head');
      $('#splash_animate2').removeClass().addClass('animated fadeInDown').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
          $(this).removeClass();
          if(firstScroll){
            $('.fa.fa-arrow-down.arrow').removeClass().addClass('.hidden');
          }
          else{
            $('.fa.fa-arrow-down.arrow').removeClass().addClass('fa fa-arrow-down arrow animated infinite pulse');
          }
        });
    });
});

/*
 * Lazy Line Painter - Path Object
 * Generated using 'SVG to Lazy Line Converter'
 *
 * http://lazylinepainter.info
 * Copyright 2013, Cam O'Connell
 *
 */

var pathObj1 = {
    "coding": {
        "strokepath": [
            {
                "path": "m0 0l416.0 0l0 265.0l-416.0 0l0 -265.0z",
                "duration": 300
            },
            {
                "path": "m-0.30708662 25.677526l416.0 0",
                "duration": 300
            },
            {
                "path": "m8.133125 12.900263l0 0c0 -3.3484983 2.594633 -6.0629926 5.7952757 -6.0629926l0 0c1.5370026 0 3.011054 0.63877773 4.0978785 1.7758098c1.0868244 1.1370316 1.6973972 2.6791773 1.6973972 4.287183l0 0c0 3.3484974 -2.594633 6.062992 -5.7952757 6.062992l0 0c-3.2006426 0 -5.7952757 -2.7144947 -5.7952757 -6.062992z",
                "duration": 100
            },
            {
                "path": "m26.06882 12.900263l0 0c0 -3.3484983 2.594633 -6.0629926 5.7952766 -6.0629926l0 0c1.5370026 0 3.011055 0.63877773 4.0978775 1.7758098c1.0868263 1.1370316 1.6973991 2.6791773 1.6973991 4.287183l0 0c0 3.3484974 -2.594635 6.062992 -5.7952766 6.062992l0 0c-3.2006435 0 -5.7952766 -2.7144947 -5.7952766 -6.062992z",
                "duration": 100
            },
            {
                "path": "m44.004513 12.900263l0 0c0 -3.3484983 2.594635 -6.0629926 5.7952766 -6.0629926l0 0c1.5370026 0 3.0110512 0.63877773 4.0978775 1.7758098c1.0868263 1.1370316 1.6973953 2.6791773 1.6973953 4.287183l0 0c0 3.3484974 -2.5946312 6.062992 -5.795273 6.062992l0 0c-3.2006416 0 -5.7952766 -2.7144947 -5.7952766 -6.062992z",
                "duration": 100
            },
            {
                "path": "m34.157925 66.05272l233.16534 0",
                "duration": 300
            },
            {
                "path": "m34.157925 104.18359l176.18898 0",
                "duration": 250
            },
            {
                "path": "m34.157925 142.31447l248.97638 0",
                "duration": 200
            },
            {
                "path": "m34.157925 180.44534l286.96063 0",
                "duration": 150
            },
            {
                "path": "m34.157925 218.57622l285.88977 0",
                "duration": 100
            }
        ],
        "dimensions": {
            "width": 416,
            "height": 265
        }
    }
};

var pathObj2 = {
    "Camera": {
        "strokepath": [
            {
                "path": "m0.5593213 38.08844l383.0866 0l0 194.29921l-383.0866 0z",
                "duration": 300
            },
            {
                "path": "m109.78924 38.08399l7.889763 -31.559053l148.8189 0l7.8897705 31.559053z",
                "duration": 300
            },
            {
                "path": "m1.1804972 57.89166l383.0866 0",
                "duration": 300
            },
            {
                "path": "m0.2519685 209.39066l383.0866 0",
                "duration": 300
            },
            {
                "path": "m126.31511 135.25002l0 0c0 -30.719208 28.167282 -55.622047 62.91339 -55.622047l0 0c34.746094 0 62.913376 24.90284 62.913376 55.622047l0 0c0 30.719208 -28.167282 55.62204 -62.913376 55.62204l0 0c-34.74611 0 -62.91339 -24.902832 -62.91339 -55.62204z",
                "duration": 300
            },
            {
                "path": "m138.5251 135.24141l0 0c0 -24.752785 22.703033 -44.818893 50.708664 -44.818893l0 0c28.005615 0 50.70865 20.066109 50.70865 44.818893l0 0c0 24.752792 -22.703033 44.81891 -50.70865 44.81891l0 0c-28.00563 0 -50.708664 -20.066116 -50.708664 -44.81891z",
                "duration": 300
            },
            {
                "path": "m11.080489 38.092613l3.5590553 -14.236221l23.811024 0l3.5590553 14.236221z",
                "duration": 300
            },
            {
                "path": "m19.12666 83.26605l47.62205 0l0 22.29921l-47.62205 0z",
                "duration": 300
            }
        ],
        "dimensions": {
            "width": 384,
            "height": 288
        }
    }
};
