$(document).ready(() => {
    let spectreValue;
    let source;
    let stream;

    const audioCtx = new AudioContext();
    const analyser = audioCtx.createAnalyser();
    analyser.minDecibels = -90;
    analyser.maxDecibels = -10;
    analyser.smoothingTimeConstant = 0.85;

    const distortion = audioCtx.createWaveShaper();

    if (navigator.mediaDevices.getUserMedia) {
        //console.log("getUserMedia supported.");
        const constraints = { audio: true };
        navigator.mediaDevices
            .getUserMedia(constraints)
            .then(function (stream) {
                //console.log("inside.");
                source = audioCtx.createMediaStreamSource(stream);
                source.connect(distortion);
                analyser.connect(audioCtx.destination);

                data();

            })
            .catch(function (err) {
                //console.log("The following gUM error occured: " + err);
            });
    } else {
        //console.log("getUserMedia not supported on your browser!");
    }



    let data = function () {
        analyser.fftSize = 256;
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteTimeDomainData(dataArray);
        //console.log(dataArray);
        const barWidth = (200 / bufferLength) * 2.5;
        let barHeight;
        let x = 0;


        for (let i = 0; i < bufferLength; i++) {
            barHeight = dataArray[i] / 2;
            x += barWidth + 1;
            console.log(barHeight, barWidth)
        }
    }
})