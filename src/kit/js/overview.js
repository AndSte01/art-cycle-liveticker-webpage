function init() {
    console.log("overview.init()"); // TODO 
    this.comp_list = document.getElementById("comp_list");
    this.comp_list.appendChild(competition_element("Oberbayerische Meisterschaft Junioren und Elite", "Schmedeswurtherwesterdeich", "25.11.2021", 1, 0));
}

function competition_element(name, location, date, isLive, id) {
    li = document.createElement("li");

    competition_container = document.createElement("div");
    competition_container.setAttribute("class", "competition_container");

    overflow = document.createElement("div");
    overflow.setAttribute("class", "overflow");
    competition_container.appendChild(overflow);

    a = document.createElement("a");
    a.setAttribute("style", "text-decoration: none !important;")
    a.setAttribute("href", "/competition.html?id=" + id);
    overflow.appendChild(a);

    h3 = document.createElement("h3");
    h3.setAttribute("class", "competition_name overflow-y");
    h3.textContent = name;
    a.appendChild(h3);

    flex = document.createElement("div");
    flex.setAttribute("style", "display: flex;");
    overflow.appendChild(flex);

    dLocation = document.createElement("div");
    dLocation.setAttribute("class", "overflow-y");
    dLocation.textContent = location
    flex.appendChild(dLocation);

    dDate = document.createElement("div");
    dDate.setAttribute("class", "uk-flex-1 uk-margin-left");
    dDate.textContent = date;
    flex.appendChild(dDate);

    if (isLive) {
        label = document.createElement("span");
        label.setAttribute("class", "uk-label uk-margin-left")
        label.textContent = i18n.__("live");
        competition_container.appendChild(label);
    }

    li.appendChild(competition_container);

    return li;
}