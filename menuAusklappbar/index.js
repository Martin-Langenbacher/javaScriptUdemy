"use strict";

window.addEventListener("load", function(){

    let heading = document.getElementById("box__heading");
    heading.addEventListener("click", function(){
        let content = document.getElementById("box__content");
        content.classList.toggle("hide");

        let indicator = document.getElementById("box__indicator");
        indicator.classList.toggle("hidden");

    }, false);
}, false);






/* Document Object Model:
===========================

--> Element holen:
let element = document.getElementByid()
let elements = document.getElementsByTagName()

--> Event-listener hinzufügen:
element.addEventListener("click", function() {...}, false);




Wie schreiben wir daten in Elemente?
=========================================

element.innerHTML: --> Hier können wir auf den HTML-Code zugreifen

element.innerText: --> Hier können wir auf den Text-Inhalt zugreifen

element.className / element.classList: --> Zugriff auf die CSS-Klassen

element.style: --> Zugriff auf CSS-Style-Attribute


*/





