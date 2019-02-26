/*global $*/
/*jshint esversion: 6 */

function searchForInfo(searchTerms, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        return;
    }
    $.ajax({
        type: "GET",
        url: "https://restcountries.eu/rest/v2/name/"+encodeURIComponent(searchTerms.trim()),
        success: onSuccess,
        error: onError
    });
}

function onInfoSubmit(country) {
    console.log(`About to seach for info for: ${country}`);
    searchForInfo(country, handleInfoResponse, (e) => console.log(e));
}


function handleInfoResponse(response) {
    console.log(response);
    let info = $("#info-results");
    let row = info.children();
    let data = row.children();
    let infoResponse = response[0];
    
    data.children(".name").text(infoResponse.name);
    data.children(".region").text(infoResponse.region);
    data.children(".subregion").text(infoResponse.subregion);
    
    data.children(".timezones").text(infoResponse.timezones.join(", "));
    
    
    data.children(".capital").text(infoResponse.capital);
    data.children(".population").text(infoResponse.population);
    
    data.children(".languages").text(infoResponse.languages.map(l => l.name).join(", "));
    
    data.children(".currencies").text(infoResponse.currencies.filter(c => c.name != null).map(c => c.name + " (" + c.symbol + ")").join(", "));
    

    
    let content = data.children(".flags");
    let pic = content.children(".flag");
    pic.attr("src", infoResponse.flag);
    
    
    $("#info-results").show("slow", "linear").addClass("shown");
}