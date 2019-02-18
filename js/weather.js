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
        wc.children(".maxtemp").text("Max: " + forecastday.day.maxtemp_c + "°C");
        wc.children(".mintemp").text("Min: " + forecastday.day.mintemp_c + "°C");
    }
    document.getElementById("weather-box").style.display = "inline-block";
    document.getElementById("history-search").style.display = "block";
}









function searchForWeatherHistory(searchTerms, date, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        return;
    }
    $.ajax({
        type: "GET",
        url: "https://api.apixu.com/v1/forecast.json?key=4c9862bd1a0f484eae8130923191302&q="+encodeURIComponent(searchTerms.trim())+"&dt="+encodeURIComponent(date),
        success: onSuccess,
        error: onError
    });
}


function onDateSubmit() {
    searchForWeatherHistory($("#weather-input").val(), $("#weather-date").val(), handleHistoryResponse, (e) => console.log(e));
}

function handleHistoryResponse(response) {
    console.log(response);
    let weather = $("#history-box");
    let forecastday = response.forecast.forecastday[0];
    
    if(forecastday){
            weather.show();
            $("#history-fail").hide();
            let condition = forecastday.day.condition;
            
            weather.children(".date").text(forecastday.date);
            weather.children(".icon").attr("src", condition.icon);
            weather.children(".description").text(condition.text);
            weather.children(".mintemp").text("Min: " + forecastday.day.mintemp_c + "°C");
            weather.children(".avg-temp").text("Avg Temp: " + forecastday.day.avgtemp_c + "°C");
            weather.children(".maxtemp").text("Max: " + forecastday.day.maxtemp_c + "°C");
            weather.children(".maxwind").text("Max Wind: " + forecastday.day.maxwind_kph + " kph");
            weather.children(".avghumidity").text("Avg Humidity: " + forecastday.day.avghumidity + "%");
            weather.children(".totalprecip").text("Total Precipitation: " + forecastday.day.totalprecip_mm + "mm");
    }
    else {
        weather.hide();
        $("#history-fail").show();
    }
    // document.getElementById("weather-history").style.display = "inline-block";
}
