/* #1
 * Напишите функцию, которая будет возвращать набор уникальных символов,
 * которые были переданы в эту функцию, как аргумент. Сортировка - не нужна,
 * строчные и заглавные буквы - 1 символ.
 */

function extractCharacters(str){
    var obj = {};
    for (var i = 0; i < str.length; i++) {
        obj[str[i].toLowerCase()] = true;
    }
    console.log(Object.keys(obj));
}

extractCharacters('abcd');
//['a', 'b', 'c', 'd']

extractCharacters('aaaabc');
//['a', 'b', 'c']
extractCharacters('Hello, world');
//[ 'h', 'e', 'l', 'o', ',', ' ', 'w', 'r', 'd' ];