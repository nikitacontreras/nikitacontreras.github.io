console.log.apply(console, ["%c made with ♥ by nikita", "color: " + "#efefef" + "; background: " + "#070707" + "; padding:5px 0; border-radius: 5px; font-weight: bold; font-size:14px;",])

const libs = [
    "https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.min.js",
    "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.2.1/js/all.min.js",
    "https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js",
    "https://momentjs.com/downloads/moment.min.js",
    "https://cdn.jsdelivr.net/npm/bs5-lightbox@1.8.2/dist/index.bundle.min.js",
    "/src/js/portfolio.js",
    "/src/js/cpb.js",
    "/src/js/typewritter.js",
    "/src/js/navigation.js",
]
for (const lib in libs) {
    $.getScript(`${libs[lib]}`)
}

$(document).ready(() => {
    const buttons = ["home", "aboutme", "projects", "contact"]

    for (const btn in buttons) {
        $(`#${buttons[btn]}`).on("click touchstart touchend", () => {
            $(".content")[0].animate({
                scrollTop: $(`.${buttons[btn]}`).offset().top
            }, 2000);
        })
    }

})