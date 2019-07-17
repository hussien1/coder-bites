//logic
$(document).ready(function() {
    //taps color(gallery)
    $(".gallery ul li button").click(function() {
            $(".gallery ul li button").css({
                "background-color": "transparent",
                "color": "#444"
            })
            $(this).css({
                "background-color": "#ec3237",
                "color": "#fff"
            })
        })
        //zoom in (gallery photos)
    $(".gallery .gallery-item .gallery-item-info span").click(function() {
            $(this).parent().siblings(".gallery-item-img").addClass("open");
            $(".zoom").css("display", "block");
            $("body").css("overflow", "hidden");
            var $s = $(".open").attr("src");
            $(".zoom .img-container img").attr("src", $s)
        })
        //zoom out (gallery photos)
    $(".zoom .img-container span").click(function() {
            $(".zoom").css("display", "none");
            $("body").css("overflow", "auto");
            $(".gallery-item-img").removeClass("open")
        })
        //start counter up plugin
    $(".counter").countUp({
        "time": 2000,
        "delay": 10
    });

    //start paroller plugin
    $(".my-paroller").paroller();

    //filltering
    $("button[data-filter='*']").click(function() {
        $(".element-item").fadeIn(500)
    })
    $("button[data-filter='branding']").click(function() {
        $(".element-item").fadeOut(0)
        $(".branding").fadeIn(500);

    })
    $("button[data-filter='website']").click(function() {
        $(".element-item").fadeOut(0)
        $(".website").fadeIn(500);
    })
    $("button[data-filter='illustration']").click(function() {
            $(".element-item").fadeOut(0)
            $(".illustration").fadeIn(500);
        })
        // slick slider
    $(".opinion-container").slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        // Responsive Breakpoints for Mobile & Tablets
        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    //navigator
    $("a").click(function() {
        var aHref = $(this).attr("href");
        var d = $(aHref).offset().top;
        $("body ,html").animate({ scrollTop: d }, 1000);
        $("a").removeClass("activ")
        if ($(this).hasClass("nav-link")) {
            $(this).addClass("activ")
        }
    })
});