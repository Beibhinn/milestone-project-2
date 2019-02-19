/*global $*/
/*global google*/

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
};

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

  service.findPlaceFromQuery(request, handlePlaceQueryResult);
  console.log("Find place search: " + value);
}

$("#search-bar").on('keypress',function(e) {
    if(e.which == 13) {
        searchForPlaces();
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
    createMarkers(searchBox.getPlaces());
  });
}

  function clearMarkers() {
    for(var i = 0; i < markers.length; ++i) {
      markers[i].setMap(null);
    }
    markers = [];
  }

 function createMarkers(placesArray) {
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
      
      var icon = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        //icon: icon,
        title: place.name,
        rating: place.rating,
        address: place.formatted_address,
        position: place.geometry.location
      });

      bounds.extend(place.geometry.location);
      
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
      // var infowindow = new google.maps.InfoWindow();
      
      google.maps.event.addListener(marker, 'click', function() {
        console.log(place);
       /* infowindow.setContent(`The place name is ${place.name}. Holy shit it worked.`);*/
        infowindow.open(map, this);
      });
    
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
  var request = {
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
    if (status == google.maps.places.PlacesServiceStatus.OK) {
      createMarkers(results);
    }
  }
  service.nearbySearch(request, callback);
}


$("#accommodation").on("click", () => searchNearby('lodging'));
$("#attractions").on("click", () => searchNearby('attractions'));
$("#bars").on("click", () => searchNearby('bar'));
$("#cafes").on("click", () => searchNearby('cafe'));
$("#restaurants").on("click", () => searchNearby('restaurant'));


