/**
 * Created by michal on 07.04.16.
 */
//var $loginUsera = localStorage.getItem('login');
var $loginUsera = 'michal.fraczyk@wp.pl';

var $form = $('#form');
var $inputLogin = $('#loginPolec');
var $inputEmail = $('#email');
var $inputObiekt = $('#obiektPolec');

function store() {
  var $inputSocialMedia = $('#socialMedia option:selected');
  //poszukac wpisu w localstorage dla danego maila
    if (localStorage.getItem($inputEmail.val()) === null) {
        //jezeli nie ma to tworzymy nowy
        var dane = new Array($loginUsera + ": " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
    else {
        //jezeli jest to odczytujemy i dodajemy do listy
        var dane = JSON.parse(localStorage.getItem($inputEmail.val()));
        dane.push($loginUsera + ": " + $inputObiekt.val());
        localStorage.setItem($inputEmail.val(), JSON.stringify(dane));
    }
  $form.css({'display': 'none'});
  var $alert = $('<p>').addClass('alert').text('Dziękuję za Twoje polecenie zabytku');
  $('#alert').append($alert);
}
$(document).ready(function() {
$form.submit(function (item) {
    if ($.trim($inputLogin.val()) === "" || $.trim($inputEmail.val()) === ""){
      alert('Wypełnij wszystkie pola , aby polecenie zabytku było możliwe');
      return false;
    }
    store();
    numberOfRec();
  });
   numberOfRec();

});

function numberOfRec () {
    var dane = JSON.parse(localStorage.getItem($loginUsera));
    var ilosc = dane.length;
    $('#numberOfRecommendation').html(ilosc);

}

function getStore(polecone) {
    //pobieramy liste poleconych dla danego usera
    var dane = JSON.parse(localStorage.getItem($loginUsera));
    var ilosc = dane.length;
    //kazdy element z listy dodajemy do dropdowna
    for(var i = 0; i < ilosc; i++) {
        if (polecone.indexOf(dane[i]) === -1) {
            polecone.push("Użytkownik " + dane[i]);

        }
    }
}

function wyczyscForm(){
    $form[0].reset();
    $form.removeAttr('style');
    $('#alert').html('');
}

$('#btnPolec').click(function(){
    alert('tq')
    //$('#modalPolec').modal('show');
});

