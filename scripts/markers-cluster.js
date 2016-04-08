
var map;
function Initialize() {
  var MapOptions = {
    zoom: 7,
    center: new google.maps.LatLng(54.349950, 18.652322),
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    sensor: true
  };
  map = new google.maps.Map(document.getElementById("map_canvas"), MapOptions);

  var layer = new google.maps.FusionTablesLayer({
    query: {
      select: 'Address',
      from: '1OPU6utSjRYwJSFK-EXdaGmt2KgLTq2loVIjS3AA'
    }
  });
  layer.setMap(map);

  // Try HTML5 geolocation
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = new google.maps.LatLng(position.coords.latitude,
        position.coords.longitude);

      var marker = new google.maps.Marker({
        map: map,
        position: pos,
        content: 'You are here!'
      });

      // Add circle overlay and bind to marker
      var circle = new google.maps.Circle({
        map: map,
        radius: 16093,    // 10 miles in metres
        fillColor: '#AA0000'
      });
      circle.bindTo('center', marker, 'position');

      map.setCenter(pos);
    }, function() {
      handleNoGeolocation(true);
    });
  } else {
    // Browser doesn't support Geolocation
    handleNoGeolocation(false);
  }
}

function handleNoGeolocation(errorFlag) {
  if (errorFlag) {
    var content = 'Error: The Geolocation service failed.';
  } else {
    var content = 'Error: Your browser doesn\'t support geolocation.';
  }

  var options = {
    map: map,
    position: new google.maps.LatLng(54.349950, 18.652322),
    content: content
  };

  var count = mgr.getMarkerCount(circle);
  document.getElementById("Address").innerHTML += count + "<BR>";

  google.maps.event.addDomListener(window, 'load', initialize);

  //Maps API loaded, now load customizations

  var element = document.createElement('script');
  element.src = 'template.js';
  element.type = 'text/javascript';
  var scripts = document.getElementsByTagName('script')[0];
  scripts.parentNode.insertBefore(element, scripts);
}