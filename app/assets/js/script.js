//typed design function
var typed = new Typed(".typed", {
    strings: [
        "WEB DESIGNE",
        "WORDPRESS DEVELOPER",
        "WOOCOMMERCE SPECIALIST",
        "WORDPRESS THEME CUSTOMIZER"
    ],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true
});
// initialize counterup 
if ($('span').hasClass('counter')) {
    $('.counter').counterUp({
        delay: 15,
        time: 9000
    })
}


// owl carousel slider
$(document).ready(function () {
    $(".owl-carousel").owlCarousel();
});
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    responsiveClass: true,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    responsive: {
        0: {
            items: 1,
            nav: true
        },
        600: {
            items: 3,
            nav: true
        },
        1000: {
            items: 3,
            nav: true,
            loop: true
        }
    }
})

