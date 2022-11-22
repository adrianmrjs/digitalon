(function ($) {
  "use strict";
  if ($(".search-box-outer").length) {
    $(".search-box-outer").on("click", function () {
      $("body").addClass("search-active");
    });
    $(".close-search").on("click", function () {
      $("body").removeClass("search-active");
    });
  }
  $(document).on("ready", function () {
    $("[data-background]").each(function () {
      $(this).css(
        "background-image",
        "url(" + $(this).attr("data-background") + ")"
      );
    });
  });
  new WOW().init();
  $(".hero-slider").owlCarousel({
    loop: true,
    nav: true,
    dots: false,
    margin: -1,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    items: 1,
    navText: [
      "<i class='fa-sharp fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
  });
  $(".hero-slider").on("change.owl.carousel", function (event) {
    new WOW().init();
  });
  $(".partner-slider").owlCarousel({
    loop: true,
    margin: 50,
    nav: false,
    navText: [
      "<i class='fa-sharp fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: { 0: { items: 2 }, 600: { items: 3 }, 1000: { items: 6 } },
  });
  $(".testimonial-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: false,
    navText: [
      "<i class='fa-sharp fa-solid fa-arrow-left-'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dots: true,
    autoplay: true,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
  $(".case-slider").owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    navText: [
      "<i class='fa-sharp fa-solid fa-arrow-left'></i>",
      "<i class='fa-solid fa-arrow-right'></i>",
    ],
    dots: false,
    autoplay: true,
    responsive: { 0: { items: 1 }, 600: { items: 2 }, 1000: { items: 3 } },
  });
  $(window).on("load", function () {
    $(".preloader").fadeOut("slow");
  });
  $(".counter").countTo();
  $(".counter-box").appear(
    function () {
      $(".counter").countTo();
    },
    { accY: -100 }
  );
  $(document).ready(function () {
    var progressBar = $(".progress");
    if (progressBar.length) {
      progressBar.each(function () {
        var Self = $(this);
        Self.appear(function () {
          var progressValue = Self.data("value");
          Self.find(".progress-bar").animate(
            { width: progressValue + "%" },
            1000
          );
        });
      });
    }
  });
  $(".popup-gallery").magnificPopup({
    delegate: ".popup-img",
    type: "image",
    gallery: { enabled: true },
  });
  $(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false,
  });
  $(window).scroll(function () {
    if (innerWidth > 600) {
        if (
            document.body.scrollTop > 2900 ||
            document.documentElement.scrollTop > 2900
          ) {
            $("#scroll-top").fadeIn("slow");
          } else {
            $("#scroll-top").fadeOut("slow");
          } 
    } else {
        if (
            document.body.scrollTop > 4300 ||
            document.documentElement.scrollTop > 4300
          ) {
            $("#scroll-top").fadeIn("slow");
          } else {
            $("#scroll-top").fadeOut("slow");
          } 
    }

  });
  $("#scroll-top").click(function () {
    $("html, body").animate({ scrollTop: 0 }, 1500);
    return false;
  });
  $(window).scroll(function () {
    if ($(this).scrollTop() > 0) {
      $(".navbar").addClass("fixed-top");
    } else {
      $(".navbar").removeClass("fixed-top");
    }
  });
  if ($("#countdown").length) {
    $("#countdown").countdown("2030/01/30", function (event) {
      $(this).html(
        event.strftime(
          "" +
            '<div class="row">' +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%-D</h2>' +
            '<h5 class="mb-0">Day%!d</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%H</h2>' +
            '<h5 class="mb-0">Hours</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%M</h2>' +
            '<h5 class="mb-0">Minutes</h5>' +
            "</div>" +
            '<div class="col countdown-single">' +
            '<h2 class="mb-0">%S</h2>' +
            '<h5 class="mb-0">Seconds</h5>' +
            "</div>" +
            "</div>"
        )
      );
    });
  }
  var date = new Date().getFullYear();
  $("#date").html(date);
})(jQuery);
