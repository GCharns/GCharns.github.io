$(document).foundation();
$(function () {
    // Page Scrolling
    $("a[href^='#target']").click(function (e) {
        e.preventDefault();
        elementClick = $(this).attr("href");
        destination = $(elementClick).offset().top;
        $('body,html').animate({
            scrollTop: destination
        }, 600);
    });

    // Mobile menu
    $(".menu-toggle").click(function (e) {
        e.preventDefault();
        $("body").toggleClass("open");
    });

    // animation
    var scrolled = $(window).scrollTop(),
        windowHeight = $(window).height();
    $('.anim').each(function (i) {
        var eachImgOffsetTop = $(this).offset().top;
        if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled > -20) {
            $(this).addClass("anim-done");
        }
    });
    $(".anim-children-start-bottom").each(function () {
        $(this).children().each(function (k) {
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).css({
                    "transform": "none",
                    "opacity": 1
                });
            }
        });
    });
    $(".cover-slide-right").each(function () {
        var eachImgOffsetTop = $(this).offset().top,
            eachHeight = $(this).height();
        if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
            $(this).addClass("slide-done");
        }
    });
    $(window).scroll(function () {
        var scrolled = $(window).scrollTop(),
            windowHeight = $(window).height();
        $('.anim').each(function (i) {
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).addClass("anim-done");
            }
        });
        $(".anim-children-start-bottom").each(function () {
            $(this).children().each(function (k) {
                var eachImgOffsetTop = $(this).offset().top,
                    eachHeight = $(this).height();
                if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                    $(this).css({
                        "transform": "none",
                        "opacity": 1
                    });
                }
            });
        });
        $(".cover-slide-right").each(function () {
            var eachImgOffsetTop = $(this).offset().top,
                eachHeight = $(this).height();
            if (eachImgOffsetTop - scrolled < windowHeight - 30 && eachImgOffsetTop - scrolled + eachHeight > 50) {
                $(this).addClass("slide-done");
            }
        });
    });
    $('.anim-children').each(function (i) {
        $(this).children().each(function (j) {
            var scrolled = $(window).scrollTop(),
                windowHeight = $(window).height();
            $(this).css('transition-delay', (j * .3) + 's');

        });
    });
    
    // images lightbox
    $('.lightbox-images .img-link').click(function(e){
        e.preventDefault();
        $("#lightbox-container").addClass('lightbox-visible');
        var selectedImg = $(this),
            thisIndex = $('.img-link').index(this);
        $(this).parents('.lightbox-images').children().each(function(){
            var img_2x = $(this).children().data('bgsrc');
            $("#lightbox-container .lightbox-content").append('<div><img src="' + img_2x + '"></div>');
        });
        $("#lightbox-container .lightbox-content").slick({
//            fade: true,
            initialSlide: thisIndex
        });
    });
    
    $("#lightbox-container .close-lightbox").click(function(){
        $(this).parent().removeClass("lightbox-visible");
        $(this).siblings(".lightbox-content").slick('unslick').empty();
    });
    

});