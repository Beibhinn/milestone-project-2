/*global $*/
/*jshint esversion: 6 */


function searchForWeather(searchTerms, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        $("#weather-input").addClass("required");
    } else {
        $("#weather-input").removeClass("required");
    }
    $.ajax({
        type: "GET",
        url: "https://api.apixu.com/v1/forecast.json?key=4c9862bd1a0f484eae8130923191302&q="+encodeURIComponent(searchTerms.trim())+"&days=5",
        success: onSuccess,
        error: onError
    });
}

function onWeatherSubmit() {
    searchForWeather($("#weather-input").val(), handleWeatherResponse, handleWeatherError);
}

$("#weather-input").on('keypress',function(e) {
    if(e.which == 13) {
        onWeatherSubmit();
    }
});

function handleWeatherResponse(response) {
    console.log(response);
    
    $("#no-weather").fadeOut(400).addClass("hidden");
    $("#history-box").hide("fast", "linear");
    
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
     // document.getElementById("weather-box").style.display = "inline-block";
     // document.getElementById("history-search").style.display = "block";
     $("#results-location").show("slow", "linear");
     $("#weather-box").show("slow", "linear").addClass("shown");
     $("#history-search").show("fast", "linear");
}

function handleWeatherError(error) {
    if (error.statusText == "Bad Request") {
        $("#no-weather").fadeIn(400).css("display","inline-block").removeClass("hidden");
        $("#results-location").hide("fast", "linear");
        $("#weather-box").hide("fast", "linear").removeClass("shown");
        $("#history-search").hide("fast", "linear");
        $("#history-box").hide("fast", "linear");
        $("#history-fail").hide("fast", "linear");
        return;
    }
}








function searchForWeatherHistory(searchTerms, date, onSuccess, onError) {
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
            weather.show("slow", "linear");
            $("#history-fail").hide("fast", "linear");
            let condition = forecastday.day.condition;
            
            weather.children(".date").text(forecastday.date);
            weather.children(".icon").attr("src", condition.icon);
            weather.children(".description").text(condition.text);
            weather.children(".mintemp").text("Min Temp: " + forecastday.day.mintemp_c + "°C");
            weather.children(".avg-temp").text("Avg Temp: " + forecastday.day.avgtemp_c + "°C");
            weather.children(".maxtemp").text("Max Temp: " + forecastday.day.maxtemp_c + "°C");
            weather.children(".maxwind").text("Max Wind: " + forecastday.day.maxwind_kph + " kph");
            weather.children(".avghumidity").text("Avg Humidity: " + forecastday.day.avghumidity + "%");
            weather.children(".totalprecip").text("Total Precipitation: " + forecastday.day.totalprecip_mm + "mm");
    }
    else {
        weather.hide("fast", "linear");
        $("#history-fail").show("slow", "linear");
    }
}
