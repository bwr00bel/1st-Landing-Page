//Hide menu

$(".navigation__button").on("click", function () {
    $(".navigation__background").toggleClass("active__bcg");
    $(".navigation__nav").toggleClass("active__nav")
});

$(".navigation__link").on("click", function () {
    $(".navigation__background").toggleClass("active__bcg");
    $(".navigation__nav").toggleClass("active__nav")
});

$(".navigation__link").on("click", function () {
    $(".navigation__icon").removeClass("active__icon-top");
    $(".navigation__icon").removeClass("active__icon-bottom");
    $(".navigation__icon").removeClass("active__transparent");

});

$(".navigation__button").on("click", function () {
    $(".navigation__icon").toggleClass("active__icon-top");
    $(".navigation__icon").toggleClass("active__icon-bottom")
    $(".navigation__icon").toggleClass("active__transparent")

});



//  <!-- Scroll menu -->

$(".nav_about").on("click", function () {
    $("body, html").animate({
        scrollTop: $("#nav_about").offset().top
    }, 1000)

});
$(".nav_offer").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".features-box").offset().top
    }, 1000)
});
$(".nav-material").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".task-box").offset().top
    }, 1000)
});

$(".nav_review").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".review-heading").offset().top
    }, 1000)
});

$(".nav_contact").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".section-book").offset().top
    }, 1000)
});

$(".nav-sauna").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".section-sauna").offset().top
    }, 1000)
});


$(".nav-bath").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".section-bath").offset().top
    }, 1000)
});




//  <!-- Buttons-->

$(".header__button").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".section-features").offset().top
    }, 1000)
});
$(".header__button-top").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".contact").offset().top
    }, 1000)
});

$(".header__logo-box").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".header").offset().top
    }, 1000)
});

$(".footer-box__logo").on("click", function () {
    $("body, html").animate({
        scrollTop: $(".header").offset().top
    }, 1000)
});



//// Realization


(function () {
    Galleria.loadTheme('galleria-1.6.1/dist/themes/classic/galleria.classic.min.js');
    Galleria.run('.galleria');
}());