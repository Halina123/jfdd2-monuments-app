(function () {
  var stanButtonuLokalizacja;
  var zakres;
  var pozycja;
  var obiekt = [];
  var ulubione = [];
  var monuments = [
    {
      nazwa: 'Bazylika Mariacka',
      typ: 'kosciol',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.349985,
          lng: 18.653242
        }
      },
      about: 'jakiś opis zabytku nr 1 ',
      image: '1',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Muzeum II Wojny Światowej',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.349718,
          lng: 18.648417
        }
      },
      about: 'jakiś opis zabytku nr 2 ',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Obrońców Wybrzeża',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.406786,
          lng: 18.667375
        }
      },
      about: 'jakiś opis zabytku nr 3 ',
      image: '2',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół Świętej Trójcy',
      typ: 'kosciol',
      adres: {
        street: 'Szymborskiej',
        number: 4,
        position: {
          lat: 54.346514,
          lng: 18.646837
        }
      },
      about: 'jakiś opis zabytku nr 4 ',
      image: '3',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Poległych Stoczniowców 1970',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.360548,
          lng: 18.649052
        }
      },
      about: 'jakiś opis zabytku nr 5 ',
      image: '4',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Europejskie Centrum Solidarności',
      typ: 'muzeum',
      adres: {
        street: 'Mickiewicza',
        number: 4,
        position: {
          lat: 54.361258,
          lng: 18.649480
        }
      },
      about: 'jakiś opis zabytku nr 6 ',
      image: '5',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Kościół św. Katarzyny',
      typ: 'kosciol',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.354138,
          lng: 18.651482
        }
      },
      about: 'jakiś opis zabytku nr 7 ',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Pomnik Marszałka Józefa Piłsudskiego',
      typ: 'pomnik',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.386421,
          lng: 18.591431
        }
      },
      about: 'jakiś opis zabytku nr 8 ',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    },
    {
      nazwa: 'Narodowe Muzeum Morskie w Gdańsku',
      typ: 'muzeum',
      adres: {
        street: 'Reja',
        number: 4,
        position: {
          lat: 54.350901,
          lng: 18.659051
        }
      },
      about: 'jakiś opis zabytku nr 9 ',
      image: 'jakies zdjecie',
      WHstatus: true,
      ID: 'xxxx'

    },
    {
      nazwa: 'Klasztor Ojców Dominikanów',
      typ: 'kosciol',
      adres: {
        street: 'Mickiewicza',
        number: 2,
        position: {
          lat: 54.352126,
          lng: 18.651477
        }
      },
      about: 'jakiś opis zabytku nr 10 ',
      image: 'jakies zdjecie',
      WHstatus: false,
      ID: 'xxxx'

    }
  ];
  var monumentsOK = monuments.map(function (item, index) {

    return {
      nazwa: item.nazwa,
      typ: item.typ,
      adres: {
        street: item.adres.street,
        number: item.adres.number,
        position: {
          latitude: item.adres.position.lat,
          longitude: item.adres.position.lng
        }

      },
      about: item.about,
      image: item.image,
      WHstatus: item.WHstatus,
      id: index,
      like: ''



    }

  });
  var fMonumentsOK = monumentsOK;

  angular.module('Workshop', ['uiGmapgoogle-maps', 'ui.bootstrap', 'ngAnimate'])
      .controller('mainController', mainController)
      .controller('ButtonsCtrl', function ($scope) {
        $scope.singleModel = 0;
      })
      .controller('InfoController', function ($scope, $log) {
        $scope.templateValue = 'hello from the template itself';
        $scope.clickedButtonInWindow = function () {
          if (ulubione.indexOf(obiekt.nazwa) === -1){
            ulubione.push(obiekt.nazwa);
            obiekt.like = 'ulubione';
          }

        }
      }).controller('ModalDemoCtrl', function ($scope, $uibModal, $log) {

    $scope.animationsEnabled = true;

    $scope.open = function (size) { if(stanButtonuLokalizacja){
      var modalInstance = $uibModal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'myModalContent.html',
        controller: 'ModalInstanceCtrl',
        size: size,
        resolve: {
          items: function () {
            return $scope.items;
          }
        }
      });
    }



    };



  }).controller('ModalInstanceCtrl', function ($scope, $uibModalInstance, items) {

    $scope.ok = function () {
      $uibModalInstance.close();
    };

    $scope.cancel = function () {
      $uibModalInstance.dismiss('cancel');
    };
    
    zakres = $scope.zakres;
    
    });


  function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
            Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
  }

  function deg2rad(deg) {
    return deg * (Math.PI/180)
  }



  function mainController($scope) {
    $scope.ulubione = ulubione;
    $scope.map = {
      center: {
        latitude: 54.379208,
        longitude: 18.653333
      },
      zoom: 12,
      events: {
          click: function (mapModel, eventName, originalEventArgs) {
                     var e = originalEventArgs[0];
          var lat = e.latLng.lat(),
              lon = e.latLng.lng();
          $scope.map.clickedMarker = {
            id: 0,
            latitude: lat,
            longitude: lon,
            options: {
              animation: 1             
            },
            icon: 'images/icons/blue_marker.png'
            
          };
          pozycja = [$scope.map.clickedMarker.latitude , $scope.map.clickedMarker.longitude];
            $scope.pozycja = pozycja;
            $scope.$apply();
        }
      },

      clickedMarker: {
        id:0,
        title: ''

      },

      bounds: {}
    };
    $scope.options = {
      scrollwheel: true
    };

    $scope.checkModel = {
      lokalizacja: false,
      kosciol: true,
      muzeum: true,
      pomnik: true,
      wh: false
    };
    $scope.$watchCollection('pozycja', checkModel);
    $scope.$watchCollection('checkModel', checkModel);
    function checkModel() {
      stanButtonuLokalizacja = $scope.checkModel.lokalizacja;
      fMonumentsOK = [];
      monumentsfilredPosition = monumentsOK;
      $scope.show = false;
      angular.forEach($scope.checkModel, function (value, key) {
        if (value && key === 'lokalizacja')
        {monumentsfilredPosition = [];
        monumentsOK.forEach(function (item){
          oldeglosc = getDistanceFromLatLonInKm(item.adres.position.latitude, item.adres.position.longitude, pozycja[0], pozycja[1]);
          console.log(oldeglosc);
          debugger;
          if (oldeglosc <= zakres ){

            monumentsfilredPosition.push(item)
          }
        })
        }
        if (value && key !== 'lokalizacja' && key !== 'wh') {
          monumentsfilredPosition.forEach(function (item, index) {
            if (item.typ === key && !$scope.checkModel.wh) {
              fMonumentsOK.push(item)
            } else if (item.typ === key && item.WHstatus) {
              fMonumentsOK.push(item)
            }
          })
        }
      });
      $scope.randomMarkers = fMonumentsOK;
    }

    $scope.closeClick = function () {
      $scope.show = false;
    };

    $scope.windowCoords = {};

    $scope.onClick = function (marker, eventName, model) {
      $scope.windowCoords.latitude = model.adres.position.latitude;
      $scope.windowCoords.longitude = model.adres.position.longitude;
      $scope.images = model.id;
      $scope.show = true;
      $scope.nameMonuments = model.nazwa;
      $scope.opis = model.about;
      $scope.like= model.like;
      obiekt = model;

    };





  }

})();

function hideF(target) {
  document.getElementById(target).style.display = 'none';
}



