$(function(){
    'use strict';
    console.log("dziala");
   
    /*ajax w jquery - 1 metoda na pobranie danych*/
    $.ajax({
        url: "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl",
        dataType: "json",
        success: function(resultJSON){
            console.log(resultJSON);
        },
        
        error: function(msg){
            console.log(msg);
        }
    });
    
    
    /*2 metoda na pobranie danych*/
    $.getJSON("http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", function(data){
        console.log(data);
        
        
        
    });
});