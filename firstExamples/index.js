"use strict";
let m = 80;
let l = 1.85;
let bmi = m / ( l * l);
let name = "BMI: ";
alert(name + bmi);

let a;
a = 5;
alert(a);

// Komentar in der Zeile

/*
Mehr-Zeilen-Kommentar
*/


let wort = "Ein Wort im console.log...";
console.log(wort);

function run(){
    console.log("Nachricht 1");
    console.log("Nachricht 2");
}

run();
console.log("Nachricht 3");
run();

/* zwei Schreibweisen:
    function run(){...}
    oder
    let run = function(){...}
    ============================> 2. Schreibweise ist besser!
    */

let run2 = function(x){
    console.log("1: " +x);
    console.log("2: " +x);
}

run2("Hallo");
run2("Hi");

// Kapitel 16: Rückgabewert!
let run3 = function(x, y){
    console.log("1: " +x);
    console.log("2: " +y);
}

run3("Wort 1", "word 2");


let sum = function(a1, b1){
    return a1 + b1;
}

let result = sum(1,2);
console.log("Ergebnis: " + result);


// Kapitel 18 --> Funktionen als Parameter übergeben
let run55 = function(callback){
    console.log("run() wurde ausgeführt");
    //console.log(callback);
    callback();
}

// Funktion als Parameter übergeben:
run55(function(){
    console.log("f() wurde ausgeführt");
});

/* Parameter wird an Funktion übergeben --> oben etwas einfacher mit Funktion wird als Parameter übergeben.
let f2 = function(){
    console.log("f() wurde ausgeführt");
}

run55(f2);
*/




// Timeout funktion --> setTimeout(func, t) ==> t in Millisekunden
setTimeout(function() {
    console.log("function() wurde ausgeführt");
}, 2000);

setTimeout(function() {
    console.log("function() wurde ausgeführt");
}, 4000);


console.log("Fertig! --> Kommt vor den Time-OUT-Funktionen --> ;-)")
// die Reihenfolge spielt keine Rolle: Asynchron!

// wichtige Funktionen:
// 1) setTimeout(func, t)
        //--> Nach t Millisekunden wird eine Funktion ausgeführt 

// 2) setInterval(func, t)
        //--> Eine Funktion wird alle t Millisekunden ausgeführt 

// 3) Wenn wir auf Ereignisse reagieren wollen:
        //--> document.getElementById("element").addEventListener()


// setInterval ---->   
// erst muss die Seite komplett geladen sein:
window.addEventListener("load", function(){
    document.getElementById("click-me").addEventListener("click", function(){
        console.log("BUTTON wurde gedrueckt");
    }, false);
});



/*
// setInterval ---->        
let counter = 0;
setInterval(function(){
    counter = counter +1;
    console.log(counter);
}, 1000);        
*/


