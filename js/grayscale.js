// Collapse Navbar
var navbarCollapse = function() {
  if ($("#mainNav").offset().top > 100 || mobile) {
    if (!$("#mainNav").hasClass("navbar-shrink")) {
      $("#mainNav").addClass("navbar-shrink");
    }
  } else {
    if ($("#mainNav").hasClass("navbar-shrink")) {
      $("#mainNav").removeClass("navbar-shrink");
    }
  }
};



var mobile = false;

var windowResize = function() {
  if (window.innerWidth <= 991.98 && mobile == false) {
    mobile = true;
    $("#navbar-container").removeAttr("class");
    $("#navbar-top-menu").attr("class", "container");
  } else if (mobile && window.innerWidth > 991.98) {
    mobile = false;
    $("#navbar-container").attr("class", "container");
    $("#navbar-top-menu").removeAttr("class");
  }
  navbarCollapse();
};

(function($) {
  windowResize();
  ("use strict"); // Start of use strict

  $(window).resize(function() {
    windowResize();
  });

  // Add click event handler for menu button
  $(".navbar-toggler").click(function() {
    $(".navbar-collapse").toggleClass("show");
  });

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (
      location.pathname.replace(/^\//, "") ==
        this.pathname.replace(/^\//, "") &&
      location.hostname == this.hostname
    ) {
      var target = $(this.hash);
      target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
      if (target.length) {
        $("html, body").animate(
          {
            scrollTop: target.offset().top - 70
          },
          1000,
          "easeInOutExpo"
        );
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $(".js-scroll-trigger").click(function() {
    $(".navbar-collapse").collapse("hide");
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $("body").scrollspy({
    target: "#mainNav",
    offset: 100
  });

  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);
})(jQuery); // End of use strict
