// map with markers
var map;
var infowindow;
var monuments = [
  {
    nazwa: 'Bazylika Mariacka',
    typ: 'kościół',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.349985,
        lng: 18.653242
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: true,
    ID: 'xxxx'

  },
  {
    nazwa: 'Muzeum II Wojny Światowej',
    typ: 'muzeum',
    adres:{
      street: 'Mickiewicza',
      number: 4,
      position: {
        lat: 54.349718,
        lng: 18.648417
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: true,
    ID: 'xxxx'

  },
  {
    nazwa: 'Pomnik Obrońców Wybrzeża',
    typ: 'pomnik',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.406786,
        lng: 18.667375
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: true,
    ID: 'xxxx'

  },
  {
    nazwa: 'Kościół Świętej Trójcy',
    typ: 'kościół',
    adres:{
      street: 'Szymborskiej',
      number: 4,
      position: {
        lat: 54.346514,
        lng: 18.646837
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: false,
    ID: 'xxxx'

  },
  {
    nazwa: 'Pomnik Poległych Stoczniowców 1970',
    typ: 'pomnik',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.360548,
        lng: 18.649052
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: false,
    ID: 'xxxx'

  },
  {
    nazwa: 'Europejskie Centrum Solidarności',
    typ: 'muzeum',
    adres:{
      street: 'Mickiewicza',
      number: 4,
      position: {
        lat: 54.361258,
        lng: 18.649480
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: false,
    ID: 'xxxx'

  },
  {
    nazwa: 'Kościół św. Katarzyny',
    typ: 'kościół',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.354138,
        lng: 18.651482
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: true,
    ID: 'xxxx'

  },
  {
    nazwa: 'Pomnik Marszałka Józefa Piłsudskiego',
    typ: 'pomnik',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.386421,
        lng: 18.591431
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: false,
    ID: 'xxxx'

  },
  {
    nazwa: 'Narodowe Muzeum Morskie w Gdańsku',
    typ: 'muzeum',
    adres:{
      street: 'Reja',
      number: 4,
      position: {
        lat: 54.350901,
        lng: 18.659051
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: true,
    ID: 'xxxx'

  },
  {
    nazwa: 'Klasztor Ojców Dominikanów',
    typ: 'kościół',
    adres:{
      street: 'Mickiewicza',
      number: 2,
      position: {
        lat: 54.352126,
        lng: 18.651477
      }
    },
    about: 'krótki opis',
    image: 'jakies zdjecie',
    WHstatus: false,
    ID: 'xxxx'

  }
];

function initMap() {
  var mariacka = {lat: 54.349950, lng: 18.652322};

  map = new google.maps.Map(document.getElementById('map'), {
    center: mariacka,
    zoom: 14
  });

  infowindow = new google.maps.InfoWindow();
  var service = new google.maps.places.PlacesService(map);
  callback(monuments);
}

function callback(monuments) {
      for (var i = 0; i < monuments.length; i++) {
      createMarker(monuments[i]);
    }

}

function createMarker(place) {
  var placeLoc = place.adres.position;
  var marker = new google.maps.Marker({
    map: map,
    position: place.adres.position
  });

  google.maps.event.addListener(marker, 'click', function() {
    infowindow.setContent(place.name);
    infowindow.open(map, this);
  });
}
// map with markers - end