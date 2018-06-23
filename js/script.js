/* ==========================================
   Hide Preloader When Whole Site is Loaded
========================================== */
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});
