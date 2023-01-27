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
        $.scrollify.move("#s-one")
    })

    $(".scroll-control .two").click(function () {
        $.scrollify.move("#s-two")
    })

    $(".scroll-control .three").click(function () {
        $.scrollify.move("#s-three")
    })

    $(".scroll-control .four").click(function () {
        $.scrollify.move("#s-four")
    })

    //menulink buttons 

    $("#start").click(function () {
        $.scrollify.move("#s-one")
    })

    $("#about_me").click(function () {
        $.scrollify.move("#s-two")
    })

    $("#projects").click(function () {
        $.scrollify.move("#s-three")
    })

    $("#contact").click(function () {
        $.scrollify.move("#s-four")
    })

})