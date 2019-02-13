/*global $*/

function onPhotoSearchSubmit() {
    searchForPhotos($("#photo-input").val(), handleUnsplashResponse, (e) => console.log(e));
}


function searchForPhotos(searchTerms, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        return;
    }
    $.ajax({ 
       type : "GET", 
       url : "https://api.unsplash.com/search/photos?query="+encodeURIComponent(searchTerms.trim())+"&orientation=landscape", 
       headers: {'Authorization': 'Client-ID 97423488771722bb245a375da7e5605d91f27f4376a32aa808edb71abb2c4e74'},
       success : onSuccess, 
       error: onError
     }); 
}

function handleUnsplashResponse(response) {
    console.log(response);
    if (response.results.length == 0) {
        return;
    }
    
    let carousel = $("#photo-carousel-elements");

    carousel.empty(); // Clear out any previous carousel items
    carousel.append("<div class=\"item active\"><img src='"+response.results[0].urls.regular+"'/></div>");
    
    for (var i = 1; i < response.results.length; ++i) {
        carousel.append("<div class=\"item\"><img src='"+response.results[i].urls.regular+"'/></div>");
    }
    
    document.getElementById("photo-carousel").style.display = "block";

}

//$("#photo-input").on("change keyup paste mouseup", () => searchForPhotos($("#photo-input").val(), handleUnsplashResponse, (e) => console.log(e)));










/*
var lastValue = '';

$.ajax({ 
   type : "GET", 
   url : "[the-target-url]", 
   headers: {'Authorization': '97423488771722bb245a375da7e5605d91f27f4376a32aa808edb71abb2c4e74'},
   success : function(result) { 
       //set your variable to the result 
   }, 
   error : function(result) { 
     //handle the error 
   } 
 }); 
 

function searchForPhotos(searchTerms, onSuccess, onError) {
    $.ajax({ 
       type : "GET", 
       url : "https://api.unsplash.com/search/photos?query="+encodeUriComponent(searchTerms), 
       headers: {'Authorization': '97423488771722bb245a375da7e5605d91f27f4376a32aa808edb71abb2c4e74'},
       success : onSuccess, 
       error: onError
     }); 
    let value = $("#photo-input").val();
    if (lastValue == value) {
        // If values are same, don't go any further.
        return;
    }
    // Update the last value to be the current value.
    lastValue = value;
    let request = {
        query: value,
    };
     $("#photo-input").on("change keyup paste mouseup", searchForPhotos);
}

$("#photo-input").on("change keyup paste mouseup", function () {
  $("#photo-search").slideDown(10000);
})
*/
