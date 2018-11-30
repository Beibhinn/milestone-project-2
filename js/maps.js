var map;
var service;
var lastValue = '';


function initMap() {
  console.log('initMap');
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 51.512,
      lng: -0.091
    },
    gestureHandling: 'cooperative',
    zoom: 9
  });
  service = new google.maps.places.PlacesService(map);

  $("#search-bar").on("change keyup paste mouseup", searchForPlaces);
  initAutocomplete();
}

function searchForPlaces() {
  let value = $("#search-bar").val();
  if (lastValue == value) {
    // If values are same, don't go any further.
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
  map.controls.push(input);

  // Bias the SearchBox results towards current map's viewport.
  map.addListener('bounds_changed', function() {
    searchBox.setBounds(map.getBounds());
  });

  var markers = [];
  // Listen for the event fired when the user selects a prediction and retrieve
  // more details for that place.
  searchBox.addListener('places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }

    // Clear out the old markers.
    markers.forEach(function(marker) {
      marker.setMap(null);
    });
    markers = [];

    // For each place, get the icon, name and location.
    var bounds = new google.maps.LatLngBounds();
    places.forEach(function(place) {
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
      markers.push(new google.maps.Marker({
        map: map,
        icon: icon,
        title: place.name,
        rating: place.rating,
        position: place.geometry.location
      }));

      if (place.geometry.viewport) {
        // Only geocodes have viewport.
        bounds.union(place.geometry.viewport);
      }
      else {
        bounds.extend(place.geometry.location);
      }
    });
    map.fitBounds(bounds);
  });
}


