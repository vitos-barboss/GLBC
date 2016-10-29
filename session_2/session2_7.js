/* 7.1.
 *  Write a function that can print entity details based on next model:
 *    {
 *        name: String,
 *        type: String,
 *        age: Number
 *     }
 *  Expected output: "%NAME%(%TYPE%) - %AGE%."
 */

var obj0 = {
    name: 'Bob',
    type: 'dog',
    age: 8
};

function print(obj) {
    return obj.name + '(' + obj.type + ') - ' + obj.age + '.';
}
console.log(print(obj0));


/* 7.2.
 * Rewrite that function to use this instead of argument
 * (use apply, call and bind to print the details of different entities).
 */

var obj1 = {
    name: 'Vasya',
    type: 'human',
    age: 10
};
var showObj1 = show.call(obj1, 'name', 'type', 'age');
console.log(showObj1);

var obj2 = {
    name: 'Terminator',
    type: 'cyborg',
    age: 35
};
var showObj2 = show.apply(obj2, ['name', 'type', 'age']);
console.log(showObj2);

var obj3 = {
    name: 'Marusya',
    type: 'cat',
    age: 5
};
var showObj3 = show.bind(obj3);
console.log(showObj3());


function show() {
    return this.name + '(' + this.type + ') - ' + this.age + '.';
}