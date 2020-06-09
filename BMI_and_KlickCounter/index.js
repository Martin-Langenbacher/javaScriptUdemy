"use strict";

// Formel: bmi = körpermasse / (körperhöhe in meter) ^ 2

window.addEventListener("load", function(){

    let heightObj = document.getElementById("height");
    let weightObj = document.getElementById("weight");

    let calculateBmi = function(){

        let height = parseFloat(heightObj.value.replace(",", "."));
        let weight = parseFloat(weightObj.value);

        let bmi = (weight / (height * height));
        // console.log(bmi);
        // console.log(heightObj.value);
        // console.log(weightObj.value);

        //alert("Dein BMI ist: " + bmi);

        let result = Math.round(bmi * 1000) / 1000;

        let resultObj = document.getElementById("result");
        resultObj.innerText = ("" + result).replace(".", ",");


        document.getElementById("weight-below").style.display = "none";
        document.getElementById("weight-normal").style.display = "none";
        document.getElementById("weight-above").style.display = "none";


        if (bmi < 18.5){
            document.getElementById("weight-below").style.display = "block";
        } else if(bmi > 18.5 && bmi < 25) {
            document.getElementById("weight-normal").style.display = "block";
            // NaN: Not A Number: 
        } else if (!isNaN(bmi)){
            document.getElementById("weight-above").style.display = "block";
        }
    };

    /*
    let button = document.getElementById("calculate");
    button.addEventListener("click", calculateBmi );
    */
    

    // wenn ich klicke wird der BMI berechnet
    heightObj.addEventListener("change", calculateBmi);
    weightObj.addEventListener("change", calculateBmi);

    // der BMI wird sofort berechnet - bereits bei der Eingabe
    heightObj.addEventListener("keyup", calculateBmi);
    weightObj.addEventListener("keyup", calculateBmi);

});



// Link: HTML5:
// https://developer.mozilla.org/de/docs/Web/HTML/HTML5/HTML5_element_list




// Klickzähler
window.addEventListener("load", function(){
    let counterElement = this.document.getElementById("counter");
    counterElement.innerText = 0;

    let counter = 0;
    let buttonElement = document.getElementById("button");
    buttonElement.addEventListener("click", function(){
        counter++; //counter = counter + 1;
        counterElement.innerText = counter;
    }, false);

});

