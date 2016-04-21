



    //getPeople: function(callback, queryData) {
    //    $.ajax({
    //        type: 'GET',
    //        url: this.url + '/people',
    //        dataType: 'json',
    //        success: function(result) {
    //            console.info(result);
    //            callback(result);
    //        }
    //    });
    //},
    //
    //
    ////getBooksWithPromise: function() {
    ////    return $.ajax({
    ////        type: 'GET',
    ////        url: this.url + '/books',
    ////        dataType: 'xml'
    ////    });
    ////},
    ////
    ////getCompaniesWithPromise: function() {
    ////    return $.ajax({
    ////        type: 'GET',
    ////        url: this.url + '/companies',
    ////        dataType: 'json'
    ////    });
    ////},
    ////
    ////getPeopleWithPromise: function() {
    ////    return $.ajax({
    ////        type: 'GET',
    ////        url: this.url + '/people',
    ////        dataType: 'json'
    ////    });
    ////},
    ////
    ////
    ////getCompanieseWithPromise: function (){
    ////    return $.ajax({
    ////        type: 'GET',
    ////        url: this.url + '/companies',
    ////        dataType: 'json'
    ////    });
    ////},
    //
    //
    ////runPromise: function() {
    ////
    ////    $.when(serverStorage.getPeopleWithPromise(), serverStorage.getBooksWithPromise())
    ////        .done(function(people, books) {
    ////            console.debug(people, books);
    ////        })
    ////        .fail(function(error) {
    ////            console.error(error);
    ////        })
    ////        .always(function(){
    ////            console.log('always method');
    ////        })
    ////},
    //
    //
    //addPerson: function(person) {
    //    $.ajax({
    //        type: 'POST',
    //        url: this.url + '/people/add',
    //        contentType: 'json',
    //        data: JSON.stringify(person),
    //        success: function (result) {
    //            console.log(result);
    //        },
    //        error: function (result){
    //            console.error(result);
    //        }
    //    });
