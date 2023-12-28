// let weather_input = document.getElementById("input").value;
let temperature = document.getElementById("temp");
let search_btn = document.getElementById("search");
let city = document.getElementById("city");

//api;
const Api_key = "b598a7175e8b3cd4d0862897492feb91";
let api = "https://api.openweathermap.org/data/2.5/weather?q=Preston&appid=b598a7175e8b3cd4d0862897492feb91";

//fetching data
const weather_data = (Api) => {
    fetch(Api)
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(userData => {
            // Process the retrieved user data
            console.log(userData);
            temperature.innerText = userData.main.temp;
            city.innerText = userData.name;
        })
        .catch(error => {
            console.error('Error:', error);
        });
};

//implementing search
function getValueFromSearch() {
    let inputVal = document.getElementById("input").value;
    let api_search = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=b598a7175e8b3cd4d0862897492feb91`;

    weather_data(api_search);
};


weather_data(api);