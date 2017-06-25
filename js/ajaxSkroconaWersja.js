'use strict';


//tworzymy funkcje
function pobierzDane(){
    
    //tworzymy obiekt
    var httpReq = new XMLHttpRequest();
    
    
    //otwieramy połaczenie z serwerem , definiujemy gdzie wysyłąmy
    httpReq.open("GET", "https://mnoidcwi.pl", true );
    
    
    //tworzymy funkcje, w ktorej definiujemy co ma sie wydarzyc gdy serwer odpowie
    httpReq.onreadystatechange = function(){
        
        // jak dane sa gotowe to ich status zmienia sie na 4
        if (httpReq.readyState == 4){
            
            httpReq = null; // nullem przerywamy połączenie
        }
    }
    
    //wsyłamy, połcz z serwerem/ inicjowanie połączenia
    httpReq.send();
}

//wywylujemy funkcje
pobierzDane