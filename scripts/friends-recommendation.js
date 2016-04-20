/**
 * Created by michal on 07.04.16.
 */

var $form = $('#form');
var $inputEmail = $('#email');
var $inputObiekt = $('#obiektPolec');


function store() {
  var polecany = [login + " polecił Tobie zabytek : " + $inputObiekt.val()];
  $.ajax({
    type: 'GET',
    url: URL + '/monuments-' + $inputEmail,
    dataType: 'json',
    success: function(result) {
      if (result.result != undefined){
          if (result.result.recommanded != undefined){
            if (result.result.recommanded.indexOf(polecany) === -1) {
              result.result.recommanded.push(polecany);
            } else return;
        } else {result.result.recommanded = polecany }
        numberOfRec()
      } else {result.result.recommanded = polecany}
        $.ajax({
          type: 'POST',
          url: URL + '/monuments-' + $inputEmail,
          dataType: 'json',
          data: result,
          success: function () {
            console.log("dodano nowego użytkownika oraz dodano mu polecenie")
          }
        });

    }
  });




  var $inputSocialMedia = $('#socialMedia option:selected');
  //poszukac wpisu w localstorage dla danego maila
    if (localStorage.getItem($inputEmail.val()) === null) {
        //jezeli nie ma to tworzymy nowy\
        var dane = new Array($loginUsera + " polecił Tobie zabytek : " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
    else {
        //jezeli jest to odczytujemy i dodajemy do listy
        var dane = JSON.parse(localStorage.getItem($inputEmail.val()));

      dane.push($loginUsera + " polecił Tobie zabytek : " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
  $form.css({'display': 'none'});
  var $alert = $('<p>').text('Dziękuję za Twoje polecenie zabytku');
  $('#alert').append($alert);
}
$(document).ready(function() {
$form.submit(function (item) {
    if ($.trim($inputLogin.val()) === "" || $.trim($inputEmail.val()) === ""){
      alert('Wypełnij wszystkie pola , aby polecenie zabytku było możliwe');
      return false;
    }
    store();
  });

});

//function numberOfRec () {
//    var dane = JSON.parse(localStorage.getItem($loginUsera));
//    var ilosc = dane ? dane.length : 0;
//    var daneFav = JSON.parse(localStorage.getItem($loginUsera + '1'));
//    $('#numberOfRecommendation').html(ilosc);
//     var iloscFav = daneFav ? daneFav.length : 0;
//    $('#numberOfFavourites').html(iloscFav);
//
//}
function numberOfRec () {
    $('#numberOfRecommendation').html(recommanded.length);
    $('#numberOfFavourites').html(favourites.length);

}

function getStore() {
  var polecone = [];
    //pobieramy liste poleconych dla danego usera
    var dane = JSON.parse(localStorage.getItem($loginUsera));
    var ilosc = dane ? dane.length : 0;
    //kazdy element z listy dodajemy do dropdowna
    for(var i = 0; i < ilosc; i++) {
        if (polecone.indexOf(dane[i]) === -1) {
            polecone.push({id: i, text: "Użytkownik : " + dane[i]});

        }
    }
  return polecone;
}



function wyczyscForm(){
    $form[0].reset();
    $form.removeAttr('style');
    $('#alert').html('');
}

$('#btnPolec').click(function(){
    alert('tq');
    //$('#modalPolec').modal('show');
});

