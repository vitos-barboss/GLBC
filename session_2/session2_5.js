/* 5.1.
 *  Create a function called celsiusToFahrenheit:
 *  Store a celsius temperature into a variable.
 *  Convert it to fahrenheit and output "NN°C is NN°F".
 */

function celsiusToFahrenheit(c) {

    var celsius = c,
        fahrenheit = celsius * 1.8 + 32;

    return celsius + '\u00B0C is ' + fahrenheit + '\u00B0F.';
 }

console.log(celsiusToFahrenheit(100)); //212

/* 5.2
 *  Create a function called fahrenheitToCelsius:
 *  Now store a fahrenheit temperature into a variable.
 *  Convert it to celsius and output "NN°F is NN°C."
 *  F = C * 1.8 + 32
 */

function fahrenheitToCelsius(f) {

    var fahrenheit = f,
        celsius = (fahrenheit - 32)/1.8;

    return fahrenheit + '\u00B0F is ' + celsius + '\u00B0C.';
}

console.log(fahrenheitToCelsius(113)); // 45C