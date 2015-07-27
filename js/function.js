$(document).ready(function() {

  // $.noConflict();

/*****************************************************************/
/*  wow & animation*/
/*****************************************************************/

$(function(){
wow = new WOW(
    {
      boxClass:     'wow',      // default
      animateClass: 'animated', // default
      offset:       0,          // default
      mobile:       false,       // default
      live:         true        // default
    }
  );
  wow.init();
});

 /*****************************************************************/
 /*  Owl-Carousal*/
 /*****************************************************************/
 $(document).ready(function() {

   $("#owl-example").owlCarousel();

 });


 /*****************************************************************/
 /* Off-Canvas Menu */
 /*****************************************************************/

 // Calling the function
 $(function() {
   $('.toggle-nav').click(function() {
     toggleNavigation();
   });
 });


 // The toggleNav function itself
 function toggleNavigation() {
   if ($('#container').hasClass('display-nav')) {
     // Close Nav
     $('#container').removeClass('display-nav');
   } else {
     // Open Nav
     $('#container').addClass('display-nav');
   }
 }


 // SLiding codes
 $("#toggle > li > div").click(function() {
   if (false === $(this).next().is(':visible')) {
     $('#toggle ul').slideUp();
   }

   var $currIcon = $(this).find("span.the-btn");

   $("span.the-btn").not($currIcon).addClass('fa-plus').removeClass('fa-minus');

   $currIcon.toggleClass('fa-minus fa-plus');

   $(this).next().slideToggle();

   $("#toggle > li > div").removeClass("active");
   $(this).addClass('active');

 });


 /*****************************************************************/
 /* Skype */
 /*****************************************************************/

 $(function() {
   Skype.ui({
     "name": "dropdown",
     "element": "SkypeButton_Call_mominriyadh_1",
     "participants": ["mominriyadh"],
     "imageColor": "blue",
     "imageSize": 32
   });
 });


 /*=================================================
         GOOGLE MAP
   =================================================*/

 $(function() {
   var map = new GMaps({
     div: '#map',
     lat: -33.8674869,
     lng: 151.2069902
     
   });

   map.addMarker({
     lat: -33.8674869,
     lng: 151.2069902,
     title: 'Marker with InfoWindow',
     infoWindow: {
       content: ' <b>437/1, Montogo<br>Vanila, Australia<b/> '
     }
   });
 });

/*****************************************************************/
/* Hover Effects */
/*****************************************************************/
  (function($) {
    $('.hover').contenthover({
      overlay_background: '#D84315',
      overlay_opacity: 0.8,
      effect: 'fade',
    });
  })(jQuery);

/*****************************************************************/
/* Isotope */
/*****************************************************************/
  $(function() {
        $('.portfolio_items').isotope({
          // options...
          itemSelector: '.singel_item',
          layoutMode: 'fitRows',
        });

        $(".portfolio_filter li").click(function() {
          $(".portfolio_filter li").removeClass("active");
          $(this).addClass("active");

          var selector = $(this).attr('data-filter');
          $(".portfolio_items").isotope({
            filter: selector,
            animationOptions: {
              duration: 750,
              easing: 'linear',
              queue: false,
            }
          });
          return false;
        });
        
      // prettyphoto
      $("a[data-gal^='prettyPhoto']").prettyPhoto();

      // Fittext
      $("#rtext").fitText(0.8, {
        minFontSize: '10px',
        maxFontSize: '18px'
      });
      $("#rtext_edu").fitText(0.8, {
        minFontSize: '12px',
        maxFontSize: '18px'
      });
    });


  /*****************************************************************/
  /* Wow Animation  */
  /*****************************************************************/
    $(function() {
      wow = new WOW({
        boxClass: 'wow', // default
        animateClass: 'animated', // default
        offset: 0, // default
        mobile: false, // default
        live: true // default
      });
      wow.init();
    });

    /*****************************************************************/
    /*  One Page Nav */
    /*****************************************************************/
    $(function(){
      $('div #nav').onePageNav();
    });

 });

