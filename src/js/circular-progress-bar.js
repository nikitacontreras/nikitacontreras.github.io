$(document).ready(() => {
    const globalConfig = {
        "animationSmooth": "1s ease-out",
        "colorCircle": "#1c1c1c",
        "colorSlice": "#c4c4c4",
        "fontSize": "0.8rem",
        "rotation": 144,
        "number": false,
        "round": true,
        "cut": 30,
        "speed":144,
        "strokeBottom": 7,
        /* e.t.c */
    }

    const global = new CircularProgressBar('pie', globalConfig);
    global.initial();
})

