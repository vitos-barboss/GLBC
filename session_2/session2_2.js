/*#2
 *
 * Напишите функцию, которая будет возвращать новую функцию,
 * с помощью которой можно будет выводить в консоль текстовую информацию.
 * hint: use toISOString method to format Date object
 *
 * Задача на 5+: сделать так, чтобы кастомный логгер не "ломал" коллстек.
*/



function createLogger(prefix) {

    var start = new Date().toISOString() + ' ' + prefix + ': ';

    return console.log.bind(console,start);

}

var myLogger = createLogger('My Logger');

myLogger('some data'); // it doesn't break call stack

//2016-10-29T21:55:05.977Z My Logger:  some data