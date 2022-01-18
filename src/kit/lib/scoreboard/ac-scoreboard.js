// Create a class for the element
class AcScoreboard extends HTMLElement {

    static get observedAttributes() {
        return ["num", "cat", "time", "name", "pt_tot", "pt_now"];
    }

    constructor() {
        // Always call super first in constructor
        super();

        // Create a shadow root
        const shadow = this.attachShadow({ mode: "closed" });

        // Add stylesheet
        // Create some CSS to apply to the shadow dom
        const link_css = document.createElement('link');
        link_css.setAttribute('rel', 'stylesheet');
        link_css.setAttribute('href', 'kit/lib/scoreboard/ac-scoreboard.css'); // TODO Remove before flight
        //link_css.setAttribute('href', '$var_ac_scoreboard_location$/ac-scoreboard.css');
        shadow.appendChild(link_css)

        // Setting up Card
        const card = document.createElement("div");
        card.setAttribute("class", "card");

        // Setting up header
        const header = document.createElement("div");
        header.setAttribute("class", "header-container");

        this.head_num = document.createElement("p");
        this.head_num.setAttribute("class", "head-num");

        this.head_cat = document.createElement("p");
        this.head_cat.setAttribute("class", "head-cat");

        this.head_time = document.createElement("p");
        this.head_time.setAttribute("class", "head-time");

        header.appendChild(this.head_num);
        header.appendChild(this.head_cat);
        header.appendChild(this.head_time);

        // Setting up body
        const body = document.createElement("div");
        body.setAttribute("class", "body-container");

        const bdy_name_container = document.createElement("div");
        bdy_name_container.setAttribute("class", "bdy-contestant-container");

        this.bdy_name = document.createElement("p");
        this.bdy_name.setAttribute("class", "bdy-contestant");
        bdy_name_container.appendChild(this.bdy_name);

        this.bdy_pt_now = document.createElement("p");
        this.bdy_pt_now.setAttribute("class", "bdy-score");

        this.bdy_pt_tot = document.createElement("p");
        this.bdy_pt_tot.setAttribute("class", "bdy-score-total");

        body.appendChild(bdy_name_container);
        body.appendChild(this.bdy_pt_now);
        body.appendChild(this.bdy_pt_tot);

        // Attach the created elements to the shadow dom
        card.appendChild(header);
        card.appendChild(body);
        shadow.appendChild(card);

        // initialize the element
        this.#init();
    }

    set_num(num) {
        this.setAttribute("num", num);
    }

    set_time(min, sec) {
        this.setAttribute("time", min.toString() + ":" + sec.toString());
    }

    set_cat(category) {
        this.setAttribute("cat", category);
    }

    set_name(name) {
        this.setAttribute("name", name);
    }

    set_pt_tot(pt_tot) {
        this.setAttribute("pt_tot", pt_tot);
    }

    set_pt_now(pt_now) {
        this.setAttribute("pt_now", pt_now);
    }

    attributeChangedCallback() {
        this.#init();
    }

    #init() {
        this.head_num.textContent = this.getAttribute("num");
        this.head_cat.textContent = this.getAttribute("cat");
        this.head_time.textContent = this.getAttribute("time");
        this.bdy_name.textContent = this.getAttribute("name");
        this.bdy_pt_now.textContent = this.getAttribute("pt_now");
        this.bdy_pt_tot.textContent = this.getAttribute("pt_tot");
    }
}

// Define the new element
customElements.define("ac-scoreboard", AcScoreboard);