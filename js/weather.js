/*global $*/


function searchForWeather(searchTerms, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        return;
    }
    $.ajax({
        type: "GET",
        url: "https://api.apixu.com/v1/forecast.json?key=4c9862bd1a0f484eae8130923191302&q="+encodeURIComponent(searchTerms.trim())+"&days=5",
        success: onSuccess,
        error: onError
    });
}

function onWeatherSubmit() {
    searchForWeather($("#weather-input").val(), handleWeatherResponse, (e) => console.log(e));
}

function handleWeatherResponse(response) {
    console.log(response);
    let weather = $("#weather-results");
    let responseForecast = response.forecast.forecastday;
    let weatherBox = $("#weather-box");
    let weatherContainers = weatherBox.children(".weather-container");
    let placeTitle = weather.children("#results-location");
    
    placeTitle.text(response.location.name + ", " + response.location.country);
    
    for(var i = 0; i < responseForecast.length; ++i) {
        let forecastday = responseForecast[i];
        let condition = forecastday.day.condition;
        let wc = weatherContainers.eq(i);
        
        wc.children(".date").text(forecastday.date);
        wc.children(".icon").attr("src", condition.icon);
        wc.children(".description").text(condition.text);
        wc.children(".maxtemp").text(forecastday.day.maxtemp_c + "°C");
        wc.children(".mintemp").text(forecastday.day.mintemp_f + "°C");
    }
    document.getElementById("weather-box").style.display = "inline-block";
}