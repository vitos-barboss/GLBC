/* #3
 *
 * 1. Create a function that will take any number of arguments and return their sum.
 * 2. Make this function be able to take array as argument.
 *
 */

function sum() {

    var result = 0;
    if (arguments.length > 1) {
        for (var i = 0; i < arguments.length; i++) {
            result += arguments[i];
        }
        return result;
    } else {
        return arguments[0].reduce(function (previous, current) {
            return previous + current;
        })
    }

}

console.log(sum(1,2,3)); // 6
console.log(sum([5,6,8])); //19