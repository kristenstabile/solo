/* ============================================
   Hide Preloader When Whole Site is Loaded
========================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});



/* ============================================
      Team Section - Owl Carousel 2-2.2.1
============================================ */
$(function() {
    $("#team-right").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>']
    });
});

















