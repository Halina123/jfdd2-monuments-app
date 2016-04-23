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
          "objectType": object.id,
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
  var $alert = $('<p>').text('Dziękuję za Twoje polecenie');
  $('#alert').append($alert);
}

$(document).ready(function () {
  $form.submit(function (item) {
    if ($.trim($inputLogin.val()) === "" || $.trim($inputEmail.val()) === "") {
      alert('Wypełnij wszystkie pola, aby polecenie było możliwe');
      return false;
    }
    if ($.trim($inputLogin.val().length) > 10) {
      alert('Podałeś zbyt długie imię');
      return false;
    }
    store();
  });
});

function numberOfRec() {
  $('#numberOfRecommendation').html(recommended.length);
  $('#numberOfFavourites').html(favourites.length);
}

function wyczyscForm() {
  $form[0].reset();
  $form.removeAttr('style');
  $('#alert').html('');
}

$('#btnPolec').click(function () {
  alert('tq');
});