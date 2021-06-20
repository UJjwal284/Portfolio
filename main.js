$(document).ready(function () {
    let scroll_pos = 0;
    $(".l1").css({'background-color': '#0563bb', 'color': 'white'});
    $(document).scroll(function () {
        scroll_pos = $(this).scrollTop();
        if (scroll_pos < 300) {
            $(".div2 li").css({'background-color': '#f2f3f5', 'color': '#606a73'});
            $(".l1").css({'background-color': '#0563bb', 'color': 'white'});
        } else if (scroll_pos > 300 && scroll_pos < 1100) {
            $(".div2 li").css({'background-color': '#f2f3f5', 'color': '#606a73'});
            $(".l2").css({'background-color': '#0563bb', 'color': 'white'});
        } else if (scroll_pos > 1100 && scroll_pos < 2050) {
            $(".div2 li").css({'background-color': '#f2f3f5', 'color': '#606a73'});
            $(".l3").css({'background-color': '#0563bb', 'color': 'white'});
        } else if (scroll_pos > 2050) {
            $(".div2 li").css({'background-color': '#f2f3f5', 'color': '#606a73'});
            $(".l4").css({'background-color': '#0563bb', 'color': 'white'});
        }
    });

    $(".l1").click(function () {
        $('html,body').animate({
                scrollTop: $(".div1").offset().top
            },
            'slow');
    });
    $(".l2").click(function () {
        $('html,body').animate({
                scrollTop: $(".div3").offset().top
            },
            'slow');
    });
    $(".l3").click(function () {
        $('html,body').animate({
                scrollTop: $(".div4").offset().top
            },
            'slow');
    });
    $(".l4").click(function () {
        $('html,body').animate({
                scrollTop: $(".div5").offset().top
            },
            'slow');
    });
});