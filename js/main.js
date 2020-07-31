(function ($) {
  "use strict";

  // sticky header
  $(window).on("scroll", function () {
    if ($(window).scrollTop()) {
      $(".header").addClass("active");
    } else {
      $(".header").removeClass("active");
    }
  });

  //filter collapse active js
  $(".filter-collapse-tab").click(function () {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
  });

  //filter trigger for mobile active js
  $(".filter-toggle.opened").click(function () {
    $(".filter-area-wrapper").addClass("active");
  });

  $(".filter-toggle.closed").click(function () {
    $(this).parent().removeClass("active");
  });

  //service collapse active js
  $(".service-collapse-tab").click(function () {
    $(this).parent().toggleClass("active");
    $(this).toggleClass("active");
  });

  //service category active js
  $(".service-collapse-content .service-category .item").click(function () {
    $(".service-collapse-content .service-category .item").removeClass(
      "active"
    );
    $(this).addClass("active");
  });

  //account active js
  $(".logged-menu .account").hover(function () {
    $(".logged-menu .mini-cart").removeClass("active");
    $(this).toggleClass("active");
  });

  //mini cart active js
  $(".logged-menu .mini-cart").click(function () {
    $(".logged-menu .account").removeClass("active");
    $(this).toggleClass("active");
  });

  $(".logged-menu .mini-cart-close").click(function () {
    $(".logged-menu .mini-cart").removeClass("active");
  });

  //gender active js
  $(".single-input .gender-label").click(function () {
    $(".single-input .gender-label").removeClass("active");
    $(this).addClass("active");
  });

  //appointment filter active js
  $(".appointment-filter .appointment-filter-item").click(function () {
    $(".appointment-filter .appointment-filter-item").removeClass("active");
    $(this).addClass("active");
  });

  //appointment option active js
  $(".appointment-options .option .bullets").click(function () {
    $(this).addClass("active");
    $(".overlay").addClass("active");
  });

  $(".overlay").click(function () {
    $(".appointment-options .option .bullets, .overlay").removeClass("active");
  });

  //address active js
  $(".dashboard-single-address").click(function () {
    $(".dashboard-single-address").removeClass("active");
    $(this).addClass("active");
  });

  //chat active js
  $(".chat-list .messenger-wrapper").click(function () {
    $(".chat-list .messenger-wrapper").removeClass("active");
    $(this).addClass("active");
  });

  //booking active js
  $(".payment-title").click(function () {
    $(".payment-title").each(function () {
      $(this).parent().removeClass("active");
    });
    $(this).parent().addClass("active");
  });

  //booking time active js
  $(".appointment-time .time-slot .time").click(function () {
    $(".appointment-time .time-slot .time").removeClass("active");
    $(this).addClass("active");
  });

  //mobile menu
  $(".menu-toggle").click(function () {
    $(".menu-toggle").toggleClass("active");
    $(".main-menu").toggleClass("active");
  });

  //mobile top downlaod
  $(".top-download .close").click(function () {
    $(this).parent().addClass("remove");
  });

  //wow js
  new WOW().init();

  //cart number spinner
  $('.mini-cart-input input[type="number"]').niceNumber();

  //booking calender
  $("#booking-calendar").fullCalendar();

  //booking calender active js
  $("td.fc-day").click(function () {
    $("td.fc-day").removeClass("active");
    $(this).addClass("active");
  });


})(jQuery);