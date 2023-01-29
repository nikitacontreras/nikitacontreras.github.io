var portfolioContents;
/*
fetch('src/json/portfolio.json')
    .then((response) => response.json())
    .then((json) => portfolioContents = (json))
    .then(() => {
        console.log(portfolioContents)
    })
*/



$(document).ready(() => {

    $.getJSON("src/json/portfolio.json", function (json) {
        portfolioContents = json;

        const jobs = () => {

            portfolioContents.jobs.forEach(job => {
                var navLink = document.createElement("a")
                var divTab = document.createElement("div")
                var divContent = document.createElement("div")
                let stylizedName;
                //navLink
                stylizedName = job.name.toLowerCase().replaceAll(" ", "-")

                navLink.id = "list-" + stylizedName + "-list"
                navLink.classList.add("list-group-item")
                navLink.classList.add("list-group-item-action")
                navLink.setAttribute("data-bs-toggle", "list")
                navLink.setAttribute("href", "#list-" + stylizedName)
                navLink.setAttribute("role", "tab")
                navLink.setAttribute("aria-controls", "list-" + stylizedName)
                navLink.setAttribute("aria-selected", false)
                navLink.innerText = job.name


                //divTab
                divTab.id = "list-" + stylizedName
                divTab.classList.add("tab-pane")
                divTab.classList.add("fade")
                divTab.setAttribute("role", "tab-panel")
                divTab.setAttribute("aria-labelledby", "list-" + stylizedName + "-list")


                //divTab.appendChild()
                divContent.id = "list-" + stylizedName + "-content"
                divContent.classList.add("container")
                divTab.appendChild(divContent)

                document.getElementById("list-tab").appendChild(navLink)
                document.getElementById("nav-tabContent").appendChild(divTab)
            });
        }


        jobs()
        fnBrowserDetect()
    })

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

})