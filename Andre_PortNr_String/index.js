"use strict";

// Verdächtige
const url = "http://localhost:8080/api/v1/items/";
console.log(url);
let portnumber = "";


for (let i = 0; i < url.length; i++) {
  const isNumber = parseInt(url.charAt(i));

  if (!isNaN(isNumber) && portnumber.length < 4) {
    portnumber = portnumber + url.charAt( i );
  }
}

console.log("PortNr.: " + portnumber)


