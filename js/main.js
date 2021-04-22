$(function () {
  // scroll to top & animate on scroll
  $(window).scroll(function () {
    $(window).scrollTop() >= 100
      ? ($(".topbar").addClass("fixed-header animated slideInDown"),
        $(".bt-top").addClass("visible"))
      : ($(".topbar").removeClass("fixed-header animated slideInDown"),
        $(".bt-top").removeClass("visible"));
  }),
    AOS.init(),
    $(".bt-top").on("click", function (o) {
      o.preventDefault(), $("html,body").animate({ scrollTop: 0 }, 700);
    });
});
