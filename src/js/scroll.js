console.log.apply(console, ["%c made with ♥ by nikita", "color: " + "#efefef" + "; background: " + "#070707" + "; padding:5px 0; border-radius: 5px; font-weight: bold; font-size:14px;",])
$(document).ready(() => {

    $.scrollify({
        section: ".scroll",
        sectionName: "section-name",
        //standardScrollElements: "section",
        easing: 'easeOutExpo',
        scrollSpeed: 1100,
        offset: 0,
        scrollbars: true,
        setHeights: true,
        overflowScroll: true,
        updateHash: true,
        touchScroll: true
    })

    $(".scroll-control .one").click(function () {
        $.scrollify.move("#start")
    })

    $(".scroll-control .two").click(function () {
        $.scrollify.move("#about-me")
    })

    $(".scroll-control .three").click(function () {
        $.scrollify.move("#portfolio")
    })

    $(".scroll-control .four").click(function () {
        $.scrollify.move("#contact-me")
    })

    //menulink buttons 

    $("#start").click(function () {
        $.scrollify.move("#start")
    })

    $("#about_me").click(function () {
        $.scrollify.move("#about-me")
    })

    $("#projects").click(function () {
        $.scrollify.move("#portfolio")
    })

    $("#contact").click(function () {
        $.scrollify.move("#contact-me")
    })

})