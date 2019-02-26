/*global $*/
/*global google*/
/*jshint esversion: 6 */

// This function taken from https://davidwalsh.name/javascript-debounce-function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
}

var map;
var service;
var lastValue = '';
var markers = [];

function initMap() {
  console.log('initMap');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.512,
      lng: -0.091
    },
    streetViewControl: false,
    zoom: 9
  });
  /*the alert is added here as I wanted it to be displayed on the map, however when I set it as a child of the div#map, it wouldn't show over the API info*/
  $("#map").append(`<div id="alert" class="alert alert-warning alert-dismissible" style="display:none">
        <a href="#" class="close" data-dismiss="alert" aria-label="close">&times;</a>There doesn't seem to be anything like that nearby. Please try a different search.</div>`);
  service = new google.maps.places.PlacesService(map);

  $("#search-bar").on("change keyup paste mouseup", debounce(searchForPlaces, 500));
  initAutocomplete();
}

function searchForPlaces() {
  let value = $("#search-bar").val();
  if (lastValue == value || value.length < 4) {
    // If values are same OR value is too short, don't go any further.
    return;
  }
  // Update the last value to be the current value.
  lastValue = value;
  let request = {
    query: value,
    fields: ['photos', 'formatted_address', 'name', 'rating', 'opening_hours', 'geometry'],
  };

  
  $("#alert").hide();
  service.findPlaceFromQuery(request, handlePlaceQueryResult);
  $("#dropdownTypeButton").text('What are you looking for?').append(" <span class=\"caret\"></span>");
  $("#dropdownTypeButton").val('What are you looking for?');
  console.log("Find place search: " + value);
}

$("#search-bar").on('keypress',function(e) {
    if(e.which == 13) {
        searchForPlaces();
        $("#dropdownTypeButton").text('What are you looking for?').append(" <span class=\"caret\"></span>");
        $("#dropdownTypeButton").val('What are you looking for?');
    }
});

function handlePlaceQueryResult(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      console.log(place);
    }
  }
  else {
    console.warn("Place query result status: " + status);
  }
}





function initAutocomplete() {


  // Create the search box and link it to the UI element.
  var input = document.getElementById('search-bar');
  var searchBox = new google.maps.places.SearchBox(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    $("#alert").hide();
    createMarkers(searchBox.getPlaces(), false);
  });
}

  function clearMarkers() {
    for(var i = 0; i < markers.length; ++i) {
      markers[i].setMap(null);
    }
    markers = [];
  }

 function createMarkers(placesArray, addInfoWindows = true) {
   clearMarkers();
   
   if (placesArray.length == 0) {
      return;
    }console.log(placesArray);
   
    // This bounds will be used to zoom the map to show all places.
    var bounds = new google.maps.LatLngBounds();
  
    
    placesArray.forEach(function(place) {
      if (!place.geometry) {
        console.log("Returned place contains no geometry");
        return;
      }

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png',
        title: place.name,
        rating: place.rating,
        address: place.formatted_address,
        position: place.geometry.location
      });

      bounds.extend(place.geometry.location);
      
      if (addInfoWindows) {
         var contentString = '<div id="content">'+
            `<h6 id="firstHeading" class="firstHeading">${place.name}</h6>`+
            '<div id="bodyContent">'+
            `<p> ${place.rating} ★</p>`+
            `<p> ${place.vicinity}</p>`+
            '</div>'+
            '</div>';
  
        var infowindow = new google.maps.InfoWindow({
            content: contentString
          }); 
        
        google.maps.event.addListener(marker, 'click', function() {
          console.log(place);
          infowindow.open(map, this);
        });
        
      } else {
        // Use a separate icon when the marker has no info window.
        marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
      }
    
      // Keep track of the marker so we can remove it later.
      markers.push(marker);
    });
    
    if (placesArray.length > 1) {
      map.fitBounds(bounds);
    }
    else {
      // map.setCenter(placesArray[0].geometry.location);
      map.fitBounds(placesArray[0].geometry.viewport);
    }
  }
  
function searchNearby(searchFor) {
  $("#alert").hide();
  var request = {
    radius: 700,
    bounds: map.getBounds(),
    zoom: map.getZoom()
  };

  // Attractions must be a query, not a type. 
  if (searchFor == 'attractions') {
    request.query = 'attractions';
  } else {
    request.type = [searchFor];
  }
   
  function callback(results, status) {
    console.log("Searching nearby");
    if (results.length === 0) {
        
        $("#alert").show();
    } 
    else if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    } 
  }
  service.nearbySearch(request, callback);
}

function changeButtonText() {
  $("#type-dropdown div").click(function() {
    $("#dropdownTypeButton").text($(this).text()).append(" <span class=\"caret\"></span>");
    $("#dropdownTypeButton").val($(this).text());
  });
}

$(".accommodation").on("click", () => searchNearby('lodging'), changeButtonText());
$(".amusement-parks").on("click", () => searchNearby('amusement_park'), changeButtonText());
$(".aquariums").on("click", () => searchNearby('aquarium'), changeButtonText());
$(".art-galleries").on("click", () => searchNearby('art_gallery'), changeButtonText());
$(".bars").on("click", () => searchNearby('bar'), changeButtonText());
$(".bowling-alleys").on("click", () => searchNearby('bowling_alley'), changeButtonText());
$(".bus-stations").on("click", () => searchNearby('bus_station'), changeButtonText());
$(".cafes").on("click", () => searchNearby('cafe'), changeButtonText());
$(".casinos").on("click", () => searchNearby('casino'), changeButtonText());
$(".movie-theaters").on("click", () => searchNearby('movie_theater'), changeButtonText());
$(".museums").on("click", () => searchNearby('museum'), changeButtonText());
$(".night-clubs").on("click", () => searchNearby('night_club'), changeButtonText());
$(".parks").on("click", () => searchNearby('park'), changeButtonText());
$(".restaurants").on("click", () => searchNearby('restaurant'), changeButtonText());
$(".shopping-malls").on("click", () => searchNearby('shopping_mall'), changeButtonText());
$(".spas").on("click", () => searchNearby('spa'), changeButtonText());
$(".subway-stations").on("click", () => searchNearby('subway_station'), changeButtonText());
$(".taxi-stands").on("click", () => searchNearby('taxi_stand'), changeButtonText());
$(".train-stations").on("click", () => searchNearby('train_station'), changeButtonText());
$(".zoos").on("click", () => searchNearby('zoo'), changeButtonText());

