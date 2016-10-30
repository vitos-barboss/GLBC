/* #1
 * Напишите функцию, которая будет возвращать набор уникальных символов,
 * которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
 * строчные и заглавные буквы - 1 символ.
 *
 * Version 1
 */

 function extractCharacters1(str){
        
	var newStr = str.toLocaleLowerCase();
	var arr = [];
	for(var i = 0; i < newStr.length; i++) {
		if (arr.indexOf(newStr[i]) === -1) {
			arr.push(newStr[i]);
		}
	}

	console.log(arr);
        
 }

console.time('1 method');
extractCharacters1('abcd');
//['a', 'b', 'c', 'd']
extractCharacters1('aaaabc');
//['a', 'b', 'c']
extractCharacters1('Hello, world');
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];
console.timeEnd('1 method');

/*
 * Version 2
 */

function extractCharacters2(str) {

var arr = str.toLowerCase().split('');
	
	for (var i = 0; i < arr.length; i++) {
		for (var j = i+1; j < arr.length; j++) {
			if(arr[j] === arr[i]) {
				arr.splice(j,1);
				i--;
			}
		}
	}
	
	console.log(arr);

}
console.time('2 method');
extractCharacters2('abcd');
//['a', 'b', 'c', 'd']
extractCharacters2('aaaabc');
//['a', 'b', 'c']
extractCharacters2('Hello, world');
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];
console.timeEnd('2 method');

/*
 * Version 3
 * The fastest
 */

function extractCharacters3(str){
	
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        obj[str[i].toLowerCase()] = true;
    }
    console.log(Object.keys(obj));
}
console.time('3 method');
extractCharacters3('abcd');
//['a', 'b', 'c', 'd']
extractCharacters3('aaaabc');
//['a', 'b', 'c']
extractCharacters3('Hello, world');
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];
console.timeEnd('3 method');
