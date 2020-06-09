"use strict";

// Ratespiel

let versuche = 0;
let zahl = Math.floor(Math.random() *100 +1);
console.log(zahl);


document.querySelector("button").addEventListener("click", function(){
  
  const input = document.querySelector("input").value;
  
  alert(input);
});




playGame();


function playGame(){

while (versuche < 10){

  versuche++;

  let eingabeZahl = parseInt(prompt("Bitte eine Zahl zwischen 1 und 100 eingeben:\nVersuch: " + versuche));
  

    // Anzeige auf Page klappt noch nicht!
    


    // Zahl-Eingabe:
    if ( eingabeZahl === zahl) {
      console.log('eingabeZahl = zahl');
      document.getElementById("zahl").innerHTML = "Deine Zahl ist " + eingabeZahl + " und Du hast gewonnen! Mit " + versuche + " Versuchen.";
      break;
      }
      else if ( eingabeZahl > zahl && eingabeZahl < 101) {
        console.log('eingabeZahl > zahl');
        document.getElementById("zahl").innerHTML = "Deine Zahl ist " + eingabeZahl + " und die Zahl ist kleiner!";
      }
      else if ( eingabeZahl < zahl && eingabeZahl > 0) {
        console.log('eingabeZahl < zahl');
        document.getElementById("zahl").innerHTML = "Deine Zahl ist " + eingabeZahl + " und die Zahl ist größer!";
        }
      else {
      console.log('Falsche Eingabe !');
      document.getElementById("zahl").innerHTML = "Falsche Eingabe !";
      }

      if ( versuche > 10) {
        console.log( versuche );
        document.getElementById("zahl").innerHTML = versuche + " Versuche: Leider verloren !";
      }
    
  }

}


