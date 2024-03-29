$(document).ready(() => {
    const dataText = [
        "fullstack developer",
        "dba",
        "api integrations",
        "microservices",
        "websockets",
        "linux/win servers",
        "music producer"
    ];
    const currentSel = Math.floor(Math.random() * (1 + dataText.length - 1 - 0)) + 0
    let speed = 0
    const typeWriter = (text, i, fnCallback) => {
        if (i < (text.length)) {
            $(".typewriter").html(`${text.substring(0, i + 1)}<span aria-hidden="true"></span>`);
            setTimeout(() => {
                typeWriter(text, i + 1, fnCallback)
            }, speed);
        }
        else if (typeof fnCallback == 'function') {
            setTimeout(fnCallback, 2000);
        }
    }
    const StartTextAnimation = (i) => {
        speed = Math.floor(Math.random() * (1 + 100 - 45)) + 45;
        if (typeof dataText[i] == 'undefined') {
            setTimeout(function () {
                StartTextAnimation(0);
            }, 0);
        } else {
            if (i < dataText[i].length) {
                typeWriter(dataText[i], 0, function () {
                    if (i > dataText.length) {
                        StartTextAnimation(0)
                    } else {
                        StartTextAnimation(i + 1);
                    }
                });
            }
        }
    }

    StartTextAnimation(currentSel);
});