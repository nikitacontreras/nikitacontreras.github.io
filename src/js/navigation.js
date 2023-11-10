$(document).ready(() => {
    let options = [
        "100% pure wheat grain",
        "i was here, but now i'm not",
        "who are even you",
        "i love empanadas",
        "i'm feeling dizzy",
        "gluten-free code",
        "tasty backend",
        "soy wapa velake¿",
        "100% pure php grain",
        "aaAaAaAaaAaAaaaaAAA",
        "what am i even doing in here",
        "where's my chorizo",
        "Alejandro ate my changua",
        "who am i even kidding",
        "i just love how **** became so hot",
        "12+1 = ?",
        "agache pa' que me lo bese",
        "tia paola",
        "yo no te voy a rogar, no",
        "que si te voy a esperar, nah",
        "tu decidiste marcharte del hilo",
        "que nos mantenía unidos al hito"
    ]

    const fnBrowserDetect = () => {
        const userAgent = navigator.userAgent;
        switch (userAgent) {
            case userAgent.match(/chrome|chromium|crios/i):
                options.push("huh, using chrome? funny")
                break;
            case userAgent.match(/firefox|fxios/i):
                options.push("who even uses firefox nowadays?")
                break;
            case userAgent.match(/safari/i):
                options.push("safari? u a fancy person")
                break;
            case userAgent.match(/opr\//i):
                options.push("wtf is opera 💀")
                break;
            case userAgent.match(/edg/i):
                if (["Win32", "Win64"].indexOf(navigator.platform) >= 0) {
                    options.push("at least u're using edge on win")
                } else if (["MacIntel", "Mac"].indexOf(navigator.platform) >= 0) {
                    options.push("why are u using edge on mac")
                } else if (["Linux x64_64"].indexOf(navigator.platform) >= 0) {
                    options.push("WHO EVEN USES EDGE ON LINUX??!?!??!?!?")
                }
                break;
            default:
                options.push("are u checking this site on curl? huh")
        }
        document.title = `nikita | ${options[Math.floor(Math.random() * (1 + options.length - 1 - 0)) + 0]}`
    }

    $("#nameTitle").addClass("animate__animated animate__fadeInDown animate__delay-0.5s").fadeIn()
    $(".loader-section").fadeOut()
    fnBrowserDetect()
});