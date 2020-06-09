"use strict";

// Verdächtige
const verdaechtige = [  { name: "Rev. Green", motive: 2},
                        { name: "Lady Red", motive: 3},
                        { name: "Mrs. White", motive: 0}];

console.log("forEach-Start")
verdaechtige.forEach( obj => console.log( obj ) );
console.log("forEach-Ende")

console.log(verdaechtige.filter( obj => obj.motive > 0));
console.log(verdaechtige.map( obj => obj.name));
console.log(verdaechtige.map( obj => obj.motive ));
console.log(verdaechtige.map( obj => obj.motive ).reduce ( ( sum, motive) => sum + motive ) );



// Tipp: Verkettung von filter, map und reduce.
//Ergebnis:
console.log("============================================================================");
console.log("Ergebnis:");
verdaechtige.filter( obj => obj.motive > 0).forEach( obj => console.log( obj ) );
console.log("Motive-Gesamt: " + verdaechtige.map( obj => obj.motive ).reduce ( ( sum, motive) => sum + motive ) + ".");
console.log("============================================================================");




console.log(" ");
//Ergebnis-Eine-Zeile:

console.log("Ergebnis-Eine-Zeile:\n" + 
      "noch offen" + //verdaechtige.join.filter( obj => obj.motive > 0).forEach( obj => console.log( obj ) ) +
//verdaechtige.filter( obj => obj.motive > 0).forEach( obj => console.log( obj ) ) +
      "\nMotive-Gesamt: " +
      verdaechtige.map( obj => obj.motive ).reduce ( ( sum, motive) => sum + motive ));




