var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: 54.360, lng: 18.639},
    zoom: 12
  });
}

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}



