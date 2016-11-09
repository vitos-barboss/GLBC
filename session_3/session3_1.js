///1 Compare object according to property.

function compareObjects(obj1, obj2, prop) {

	if (obj1[prop] > obj2[prop])
		console.log(obj1.name + ' is ' + obj1[prop]);
	else if (obj1[prop] < obj2[prop])
		console.log(obj2.name + ' is ' + obj2[prop]);
	else
		console.log('Properties are equal');

}

var marusya = {

	name: 'Marusya',
	age: 5
};

function Animal(name, age) {

	this.name = name;
	this.age = age;
}

var barsyk = new Animal('Barsyk', 8);
compareObjects(marusya, barsyk, 'age');