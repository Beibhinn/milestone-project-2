/*global $*/

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


/* function handleInfoResponse(response) {
    console.log(response);
    let info = $("#info-results");
    let infoResponse = response[0];
    
    info.children(".name").text("Country : " + infoResponse.name);
    info.children(".region").text("Region : " + infoResponse.region);
    info.children(".subregion").text("Subregion : " + infoResponse.subregion);
    for(var i = 0; i < infoResponse.timezones.length; i++) {
        info.children(".timezones").text("Timezones : " + infoResponse.timezones[i]);
    }
    
    info.children(".capital").text("Capital : " + infoResponse.capital);
    info.children(".population").text("Population : " + infoResponse.population);
    
    let lang = info.children(".languages").children("div");
    lang.text("");
    lang.eq(0).text("Languages : " + infoResponse.languages[0].name);
    for(var j = 1; j < infoResponse.languages.length; j++) {
        lang.eq(j).text(infoResponse.languages[j].name);
    }
    
    for(var k = 0; k < infoResponse.currencies.length; k++) {
        info.children(".currencies").text("Currencies : " + infoResponse.currencies[k].name);
    }
    info.children(".flag").attr("src", infoResponse.flag);
    
    
    document.getElementById("info-results").style.display = "inline-block";
} */

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
   /* for(var j = 1; j < infoResponse.languages.length; j++) {
        lang.eq(j).text(infoResponse.languages[j].name);
    } */
    
    data.children(".currencies").text(infoResponse.currencies.filter(c => c.name != null).map(c => c.name + " (" + c.symbol + ")").join(", "));
    

    
    let content = data.children(".flags");
    let pic = content.children(".flag");
    pic.attr("src", infoResponse.flag);
    
    
    //document.getElementById("info-results").style.display = "inline-block";
    $("#info-results").show("slow", "linear").addClass("shown");
}