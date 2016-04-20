/**
 * Created by michal on 07.04.16.
 */

var $form = $('#form');
var $inputEmail = $('#email');
var $inputObiekt = $('#obiektPolec');
var $inputLogin = $('#loginPolec');

function store() {
        $.ajax({
            type: 'get',
            url: URL + '/recommendations?filter[where][appId]=monuments&filter[where][objectId]=' + object.name +
            '&filter[where][receiverId]=' + $inputEmail.val() + '&filter[where][senderId]=' + login,
            dataType: 'json',
            success: function (result) {
                if (result.length === 0) {
                     toAddRec = {
                        "appId": "monuments",
                        "senderId": login,
                        "receiverId": $inputEmail.val(),
                        "objectType": "REC",
                        "objectId": object.name,
                        "id": 0
                    };
                    $.ajax({
                        type: 'POST',
                        url: URL + '/recommendations',
                        dataType: 'json',
                        data: toAddRec,
                        success: function () {
                            checkOnLogin();
                        }
                    });
                }
            }
        });


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

