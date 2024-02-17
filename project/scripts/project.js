/* JavaScript Project */

/* Declare and initialize global variables */
const racesElement = document.getElementById("races");
let raceList = [];

/* async displayRaces Function */
const displayRaces = (races) => {
    races.forEach((race) => {
        const article = document.createElement("article");

        const img = document.createElement("img");
        img.src = race.image;
        img.alt = race.location;

        const h3 = document.createElement("h3");
        h3.textContent = `Round ${race.round} - ${race.location}`

        const h4 = document.createElement("h4");
        h4.textContent = race.date;

        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(h4);

        racesElement.appendChild(article);

    });
};


/* async getTemples Function using fetch()*/
const getRaces = async () => {
    const response = await fetch("https://run.mocky.io/v3/71a09343-4fdc-4875-93f0-828165fa6824");
    if (response.ok) {
        raceList = await response.json();
    }
    displayRaces(raceList);
};

/* reset Function */
const reset = () => {
    racesElement.innerHTML = ""
};

/* filterTemples Function */
const filterRaces = (races) => {
    reset();
    const filter = document.querySelector("#filtered");
    switch (filter.value) {
        case "before":
            displayRaces(
                races.filter((race) => new Date(race.date) < new Date(2024, 7, 28))
            );
            break;
        case "after":
            displayRaces(
                races.filter((race) => new Date(race.date) > new Date(2024, 7, 28))
            );
            break;
        case "asia":
            displayRaces(
                races.filter((race) => race.section.includes("Asia"))
            );
            break;
        case "nAmerica":
            displayRaces(
                races.filter((race) => race.section.includes("North America"))
            );
            break;
        case "europe":
            displayRaces(
                races.filter((race) => race.section.includes("Europe"))
            );
            break;
        case "australia":
            displayRaces(
                races.filter((race) => race.section.includes("Australia"))
            );
            break;
        case "midEast":
            displayRaces(
                races.filter((race) => race.section.includes("Middle East"))
            );
            break;
        case "all":
            displayRaces(races);
    }
};

getRaces(races);

/* Event Listener */
document.querySelector("#filtered").addEventListener("change", () => { filterRaces(raceList) });
