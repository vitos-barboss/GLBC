/* #6
 *
 * Write a JavaScript function that accepts a string as a
 * parameter and find the longest word within the string.
 */

function findLongestWord(str) {

	var fullArray = str.replace(/[\,.-\/#!$%\^&\*;:{}=\-_`~()]/gi, '').split(' ');

	fullArray.sort(function (a,b) {
		if (a.length < b.length) return 1;
		return -1;
	});

	return fullArray[0];

}

console.log(findLongestWord('Hello, GlobalLogic!'));
console.log(findLongestWord('long, longer the \,.-\/#!$%\^&longest\*;:{}=\-_`~() last'));