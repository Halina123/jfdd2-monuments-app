// map with markers
var map;
var infowindow;

function initMap() {
  var mariacka = {lat: 54.349950, lng: 18.652322};

  map = new google.maps.Map(document.getElementById('map'), {
    center: mariacka,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  service.nearbySearch({
    location: mariacka,
    radius: 1000,
    type: ['church']
  }, callback);
}

function callback(results, status) {
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place) {
  var placeLoc = place.geometry.location;
  var marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
// map with markers - end