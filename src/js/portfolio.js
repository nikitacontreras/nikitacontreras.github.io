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
                divContent.id="list-" + stylizedName + "-content"
                divContent.classList.add("container")
                divTab.appendChild(divContent)

                console.log(navLink, divTab)
                document.getElementById("list-tab").appendChild(navLink)
                document.getElementById("nav-tabContent").appendChild(divTab)
            });
        }


        jobs()
    })

})