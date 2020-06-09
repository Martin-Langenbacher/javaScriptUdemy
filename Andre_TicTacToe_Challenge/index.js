"use strict";

// Mehrdimensionales Array
const ticTacToeMatrix = [ ["x", "o", "x"],
                          ["o", "x", "o"],
                          ["o", "o", "x"]];

for ( let i = 0; i < ticTacToeMatrix.length; i++){
  console.log(ticTacToeMatrix[i]);
}

console.log("");
console.log("Hier kommt das Ergebnis:");

// Convert Array to String
// const str = arr.join( ',' );  // => "1,2,3"

for ( let i = 0; i < ticTacToeMatrix.length; i++){
  console.log(ticTacToeMatrix[i].join( ' '));
}





