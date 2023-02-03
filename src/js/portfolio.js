var portfolioContents;
/*
fetch('src/json/portfolio.json')
    .then((response) => response.json())
    .then((json) => portfolioContents = (json))
    .then(() => {
        console.log(portfolioContents)
    })
*/

$(document).on("click", "#sendContactEmail", function () {
    window.location = "mailto:nicolas.contreras@inferport.com?subject=i%20just%20saw%20your%20portfolio&body=Hey%20Nicol%C3%A1s%2C%20my%20name%20is%20_____%2C%20and%20i%20would%20like%20to%20make%20a%20job%20offer%20for%20you. "
})

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

                $("#list-" + stylizedName + "-content").append([
                    $('<div/>', { "class": "card text-center shadow-lg m-3" }).append([
                        $('<div/>', { "class": "card-header" }).append([
                            $('<ul/>', { "class": "nav nav-pills card-header-pills window" }).append([
                                $('<li/>', { "class": "nav-item window-btns" }).append([
                                    $('<span/>', { "class": "window-close" })
                                ]),
                                $('<li/>', { "class": "nav-item window-btns" }).append([
                                    $('<span/>', { "class": "window-minimize" })
                                ]),
                                $('<li/>', { "class": "nav-item window-btns" }).append([
                                    $('<span/>', { "class": "window-maximize" })
                                ]),
                                $('<li/>', { "class": "window-tltle" }).append([
                                    $('<h6/>').text(job.name)
                                ]),
                            ]),

                        ]),
                        $('<a/>', { "href": job.website, "target": "_blank" }).append([
                            $('<img/>', { "class": "card-img-top portfolio-bg-img", 'src': job.bg_img })
                        ])
                    ])
                ])

            })
        }


        jobs()
        fnBrowserDetect()
    })



})