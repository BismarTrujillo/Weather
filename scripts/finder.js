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
    document.getElementById("cityList").onchange = cityChange;
    cityDropdown();
    cityChange();
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
function cityChange() {
    let cityInfo = document.getElementById("cityInfo");
    let cityOptionChoice = document.getElementById("cityList").value;

    tbody.innerHTML = " "

    for (let city in cities) {
        let stationLookupUrl = `https://api.weather.gov/points/${cities[city].latitude},${cities[city].longitude}`;
        if (cityOptionChoice == cities[city].name) {
            fetch(stationLookupUrl)
                .then(response => response.json())
                .then(data => {

                    let forecastUrl = data.properties.forecast

                    fetch(forecastUrl)
                        .then(response => response.json())
                        .then(data => {
                            for (let j in data.properties.periods) {
                                let tbody = document.getElementById("tbody");

                                let tr = document.createElement("tr");
                                tbody.appendChild(tr);

                                let tdDay = document.createElement("td");
                                tdDay.innerHTML = data.properties.periods[j].name
                                tr.appendChild(tdDay);
                                let tdTemp = document.createElement("td");
                                tdTemp.innerHTML = data.properties.periods[j].temperature +" "+data.properties.periods[j].temperatureUnit
                                tr.appendChild(tdTemp); 
                                let tdSpeed = document.createElement("td");
                                tdSpeed.innerHTML = data.properties.periods[j].windSpeed
                                tr.appendChild(tdSpeed);
                                let tdDetails = document.createElement("td");
                                tdDetails.innerHTML = data.properties.periods[j].detailedForecast
                                tr.appendChild(tdDetails);
                                


                                // cityInfo.innerHTML = data.properties.periods[j].startTime
                            }
                        });


                })
        }
    }
}
function tableInput() {

}

