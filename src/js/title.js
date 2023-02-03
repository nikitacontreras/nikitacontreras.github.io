/*
var rev = "fwd";
function titlebar(val) {
    var msg = "nikita dev";
    var res = " ";
    var speed = 150;
    var pos = val;
    var le = msg.length;
    if (rev == "fwd") {
        if (pos < le) {
            pos = pos + 1;
            scroll = msg.substr(0, pos);
            document.title = scroll;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
        else {
            rev = "bwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
    else {
        if (pos > 0) {
            pos = pos - 1;
            var ale = le - pos;
            scrol = msg.substr(ale, le);
            document.title = scrol;
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
        else {
            rev = "fwd";
            timer = window.setTimeout("titlebar(" + pos + ")", speed);
        }
    }
}
titlebar(0);
*/

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
    "agache pa que me lo bese",
    "tia paola"
]

function fnBrowserDetect() {
    
    let userAgent = navigator.userAgent;
    let browserName;
    
    if (userAgent.match(/chrome|chromium|crios/i)) {
        options.push("huh, using chrome? funny")
    } else if (userAgent.match(/firefox|fxios/i)) {
        options.push("who even uses firefox nowadays?")
    } else if (userAgent.match(/safari/i)) {
        options.push("safari? u a fancy person")
    } else if (userAgent.match(/opr\//i)) {
        options.push("wtf is opera 💀")
    } else if (userAgent.match(/edg/i)) {
        if (["Win32", "Win64"].indexOf(navigator.platform) >= 0) {
            options.push("at least u're using edge on win")
        } else if (["MacIntel", "Mac"].indexOf(navigator.platform) >= 0) {
            options.push("why are u using edge on mac")
        } else if (["Linux x64_64"].indexOf(navigator.platform) >= 0) {
            options.push("WHO EVEN USES EDGE ON LINUX??!?!??!?!?")
        }
        
    } else {
        options.push("are u checking this site on curl? huh")
    }
}

fnBrowserDetect()

let option = Math.floor(Math.random() * (1 + options.length - 1 - 0)) + 0

document.title = "nikita | " + options[option]

$(document).ready(() => {
    $("#nameTitle").addClass("animate__animated animate__fadeInDown animate__delay-0.5s").fadeIn()
    $(".loader-section").fadeOut()
    //document.querySelector("h1").innerText = options[option]
})