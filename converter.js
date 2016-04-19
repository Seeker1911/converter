// Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

// In the HTML, have one input field where someone can enter in a temperature.
// Create a radio button group where Celsius or Fahrenheit can be selected as the scale that the number 
// should be converted to.
// Create a block level element that will hold the text of the converted temperature.
// Create a button that, when clicked, displays the converted temperature.
// Create another button that, when clicked, clears any text in the input field.
// Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, 
// perform the conversion.
// If the temperature is greater than 90F/32C the color of the converted temperature should be red.
// If the temperature is less than 32F/0C the color of the converted temperature should be blue.
// For any other temperature, the color should be green.

var fahrenheit = "";
var celsius = "";
var answer = document.getElementById("answer");

function toCelsius() {
    celsius = (temp.value - 32) * 5 / 9;
}

function toFahrenheit() {
    fahrenheit = (temp.value * 9) / 5 + 32;
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");
var temp = document.getElementById("temp");

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter(click) {
    // console.log("event", click);
    if (document.getElementById("cel").checked === true) {
        toCelsius();
        document.getElementById("answer").innerHTML = celsius;
        if (celsius >= 32) {
            answer.style.color = "#ff0000"
        } else if (celsius <= 0) {
            answer.style.color = "#0000ff"
        } else {
            answer.style.color = "#00ff00"
        }
    } else if (document.getElementById("far").checked === true) {
        toFahrenheit();
        document.getElementById("answer").innerHTML = fahrenheit;
        if (fahrenheit >= 90) {
            answer.style.color = "#ff0000"
        } else if (fahrenheit <= 32) {
            answer.style.color = "#0000ff"
        } else {
            answer.style.color = "#00ff00"
        }
    }
};

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);
// Clear input and answer on click.
document.getElementById("clear").addEventListener("click", function() {
    document.getElementById("temp").value = "";
    document.getElementById("answer").innerHTML = "";
});
temp.addEventListener("keypress", tempEnter)
function tempEnter (keypress) {
		if (keypress.which === 13) {
			determineConverter();
		}
}
