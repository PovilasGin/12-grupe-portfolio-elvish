"use strict";

// header start //

// header end //

// hero start //
// hero end //

// progress bar start //
function renderSkills(data) {
    let HTML = '';

    if (!Array.isArray(data)) {
        return console.error('Duomenu formatas blogas');
    }
    if (data.length === 0) {
        return console.error('Nera duomenu')
    }
    for (let i = 0; i < data.length; i++) {
        const skill = data[i];
        console.log(skill);

        HTML += `<div class="progress-bar">
        <div class="texts">
            <div class="title">${skill.tittle}</div>
            <div class="value">${skill.value}%</div>
        </div>
        <div class="bar">
            <div class="value" style="width:${skill.value}%;">
                <div class="loading"></div>
            </div>
        </div>
    </div>`

        console.log(HTML);

        document.querySelector('.progress-bar .col-12').innerHTML = HTML;


    }
    return;
}
// progress bar end //

// our services start //
function renderServices(data) {

    let HTML = '';

    for (let i = 0; i < data.length; i++) {
        const service = data[i]
        console.log(data)


        HTML += `<div class="services col-4 col-sm-12">
                    <div class="content">
                    <i class="fa ${service.icon}" aria-hidden="true"></i>
                        <h5>${service.heading}</h5>
                        <p>${service.par}</p>
                    </div>
                </div>`



        document.querySelector('#serv').innerHTML = HTML;
    }
}
// our services end //

// achievements start //
function renderAchievements(data) {
    let HTML = '';

    if (!Array.isArray(data)) {
        return console.error('Duomenu formatas blogas');
    }
    if (data.length === 0) {
        return console.error('Nera duomenu')
    }

    for (let i = 0; i < data.length; i++) {
        const achievements = data[i]

        HTML += `<div class="col-3 col-sm-12 achievements">
                    <i class="fa ${achievements.icon}"></i>
                    <h4 class="counterup">${achievements.amount}</h4>
                    <p>${achievements.title}</p>                   
                    </div>`


        document.querySelector('#achieve').innerHTML = HTML;
    }
}
// achievements end //

// education & experience start //
function renderEducation(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const education = data[i]

        HTML += `<div class="info">
        <span class='bold'>${education.year}</span>
        <h6>${education.experience}</h6>
        <p>${education.text}</p>
        </div>`
        document.querySelector('#education').innerHTML = HTML;
    }
}
function renderExperience(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const education = data[i]

        HTML += `<div class="info">
        <span class='bold'>${education.year}</span>
        <h6>${education.experience}</h6>
        <p>${education.text}</p>
        </div>`

        document.querySelector('#experience').innerHTML = HTML;
    }
}
// education & experience end //

// gallery start //
function renderGallery(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const galleryPics = data[i]

        HTML += `<div class="col-4 col-sm-12 galleryImg">
                <img src="${galleryPics.img}" alt="">
                <div class="overlay"></div>
                <h4>${galleryPics.title}</h4>
                <h6>${galleryPics.category}</h6>
            </div>`

        document.querySelector('.galleryPics').innerHTML = HTML;
    }

    let uniqueList = [];

    // surenkame visas kategorijas i viena sarasa
    for (let i = 0; i < data.length; i++) {
        const subList = data[i].category;

        // atrenkame ir paliekame tik unikalias kategorijas is surinkto saraso
        for (let i = 0; i < subList.length; i++) {
            const category = subList[i].toLowerCase();

            if (uniqueList.indexOf(category) === -1) {
                uniqueList.push(category);
            }
        }
    }

    let htmlFilters = '<div class="filter-item active-filter">All</div>';
    for (let i = 0; i < uniqueList.length; i++) {
        htmlFilters += `<div class="filter-item">${uniqueList[i]}</div>`;
    }

    document.querySelector(".filters").innerHTML = htmlFilters;

    //****************Add event listeners on the filter****************** */
    const filtItems = document.querySelectorAll(".filter-item");


    for (let i = 0; i < filtItems.length; i++) {
        filtItems[i].addEventListener("click", (e) => {
            if (e.target.class !== "active-filter") {
                e.target.classList.add("active-filter");
            }
        })
    }

}



// gallery end //

// partners start //
function renderPartners(data) {
    let HTML = '';
    for (let i = 0; i < data.length; i++) {
        const Partners = data[i]

        HTML += ` <div class="col-2 col-sm-12 inline-block">
                <img class="logo" src="${Partners.img}">
             </div>`

        document.querySelector('#partners').innerHTML = HTML;
    }
}
// partners end //

// blog start //
// blog end //
