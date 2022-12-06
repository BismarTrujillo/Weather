"use strict"


let cities = [
    {
        name: "Southampton, NY",
        latitude: 40.890420,
        longitude: -72.399976
    },

    {
        name: "Nashville, TN",
        latitude: 36.156527,
        longitude: -86.775923
    },

    {
        name: "Santa Barbara, CA",
        latitude: 34.421178,
        longitude: -119.701674
    },

    {
        name: "Aspen, CO",
        latitude: 39.188916,
        longitude: -106.816986
    },

    {
        name: "Wales, AK",
        latitude: 65.615433,
        longitude: -168.102487
    },



];

window.onload = init;

function init() {
    cityDropdown();
}
function cityDropdown() {
    const cityList = document.getElementById("cityList");
    let blankOption = document.createElement("option");
    blankOption.textContent = "Select Location";
    cityList.appendChild(blankOption);

    for (let city in cities) {
        let cityOption = document.createElement("option");
        cityOption.textContent = cities[city].name;
        cityList.appendChild(cityOption);
    }

}

