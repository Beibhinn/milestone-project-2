/*global $*/
/*jshint esversion: 6 */

function onPhotoSearchSubmit() {
    searchForPhotos($("#photo-input").val(), handleUnsplashResponse, (e) => console.log(e));
}

$("#photo-input").on('keypress',function(e) {
    if(e.which == 13) {
        onPhotoSearchSubmit();
    }
});


function searchForPhotos(searchTerms, onSuccess, onError) {
    if (searchTerms.trim().length < 4) {
        $("#photo-input").addClass("required");
        return;
    } else {
        $("#photo-input").removeClass("required");
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
        $("#photo-carousel").fadeOut(400).addClass("hidden");
        $("#photo-fail").fadeIn(400).css("display","inline-block").removeClass("hidden");
        return;
    }
    
    let carousel = $("#photo-carousel-elements");
    
    $("#photo-fail").fadeOut(400).addClass("hidden");
    carousel.empty(); // Clear out any previous carousel items
    carousel.append("<div class=\"item active\"><img src='"+response.results[0].urls.regular+"'/></div>");
    
    for (var i = 1; i < response.results.length; ++i) {
        carousel.append("<div class=\"item\"><img src='"+response.results[i].urls.regular+"'/></div>");
    }
    
    $("#photo-carousel").fadeIn(400).removeClass("hidden");

}
