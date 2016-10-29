/* #4
 *
 * In Browser environment declare a variable:
 * var myVar = { key: 'value' };
 * Look at window.myVar;
 *
 * 1. Declare a private variable using IIFE.
 * 2. Is there any other ways how to declare private variables in JavaScript?
 *
 */

var myVar = {
    key:'value'
};
console.log(window.myVar); // {key: "value"}

(function () {

    var myVar = {
        key: 'value'
    };

})();

/*
 *  There are several other methods to create private variable
 */

/*
 * The first one:
 */

function PrivateConstructor() {

    var myVar = {
        key: 'value'
    };

    this.show = function () {
        console.log(myVar);
    }

}

var myObj = new PrivateConstructor();
console.log(myObj.myVar); // undefined;
myObj.show(); // {key: "value"}

/*
 * The Second one:
 */

function privateByClosure() {
    var myVarClosure = {
        key: 'value'
    };

    return function () {
        return myVarClosure;
    }
}

var a = privateByClosure();
console.log(a()); // {key: "value"}

