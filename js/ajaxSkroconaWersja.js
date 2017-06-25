'use strict';


//tworzymy funkcje
function pobierzDane() {

    //tworzymy obiekt
    var httpReq = new XMLHttpRequest();


    //otwieramy połaczenie z serwerem , definiujemy gdzie wysyłąmy
    httpReq.open("GET", "http://echo.jsontest.com/userId/108/userName/Akademia108/userURL/akademia108.pl", true);


    //tworzymy funkcje, w ktorej definiujemy co ma sie wydarzyc gdy serwer odpowie
    httpReq.onreadystatechange = function () {

        // jak dane sa gotowe to ich status zmienia sie na 4
        if (httpReq.readyState == 4) {


            if (httpReq.status >= 200 && httpReq.status < 300 || httpReq.status == 304 || navigator.userAgent.indexOf('Safari') >= 0 && typeof httpReq.status == "undefined") {


                console.log(httpReq.responseText);
                var returnData = JSON.parse(httpReq.responseText);


                console.log(returnData);

                var userName = document.createElement('p');
                userName.innerHTML = 'nazwa użytkowanika to : ' + returnData.userName;
                document.body.appendChild(userName);
                
                var userURL = document.createElement('p');
                userURL.innerHTML = 'url użytkowanika to : <a href=https://' + returnData.userURL + '>' + returnData.userURL + '</a>';
                document.body.appendChild(userURL);
                
                var userId = document.createElement('p');
                userId.innerHTML = 'ID użytkowanika to : ' + returnData.userId;
                document.body.appendChild(userId);

                console.log(userName);

                httpReq = null; // nullem przerywamy połączenie
            }
        }
    }

    //wsyłamy, połcz z serwerem/ inicjowanie połączenia
    httpReq.send();

}


