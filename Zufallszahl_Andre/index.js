"use strict";

// Ratespiel
const random = Math.floor( Math.random() * 100 +1 );
alert('Ich denke mir eine Zahl zwischen 1 und 100 aus.\nDu hast 10 Versuche sie zu erraten.')
let i = 1;
while(i <= 10) {
  const input = prompt( i + '. Versuch:')
  if ( random < input)
    alert( 'Deine Zahl ist noch zu groß!')
  else if (random > input)
    alert( ' Deine Zahl ist noch zu klein')
  else {
    alert( ' Glückwunsch. Meine Zahl ist ' + random);
    break;
  }
  i++;

}
if (i > 10)
  alert( ' Schade. Meine Zahl war ' + random );
