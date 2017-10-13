$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});

$(document).ready(function () {

    $('.smoothScrol')
        .click(function (event) {

            // On-page links
            if (
                location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname
            ) {
                // Figure out element to scroll to
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');

                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();

                    // Offsets jumping to in-page anchor with navbar-header height
                    var offsetShift = $(".navbar-header").height();

                    $('html, body').animate({
                        scrollTop: target.offset().top - offsetShift
                    }, 800, function () {

                        // Callback after animation
                        // Must change focus!
                        var $target = $(target);

                    });
                }
            }
        });

});

$(document).ready(function () {

    $(".packagesClass").click(function (event) {
        var tabValue = $(this).attr('tab-value');
        $('#packagesTab a[href="' + tabValue + '"]').tab('show');

    });

    $(window).scroll(function () {
        $(".slideanim").each(function () {
            var pos = $(this).offset().top;

            var winTop = $(window).scrollTop();
            if (pos < winTop + 750) {
                $(this).addClass("slideUp");
            }
        });
    });
});

// Change style of navbar on scroll
window.onscroll = function () { myFunction() };
function myFunction() {
    var navbar = document.getElementById("navbar");
    //alert("navbar.className: " + navbar.className);

    if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
        navbar.className = navbar.className.replace("navbar-top-default","navbar-shadow");
    } else {
        navbar.className = "navbar" + " navbar-inverse" + " navbar-fixed-top" + " navbar-top-default";
    }
}

$(document).ready(function () {
    $("body").css("padding-top", $(".navbar-header").outerHeight()+"px");
});
