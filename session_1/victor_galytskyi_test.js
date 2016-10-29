/*
	#1
	Напишите функцию, которая принимает 1 аргумент и возварщает его тип
*/
function getDataType (variable) {
	if (typeof variable === 'string')
		return 'string';
	else if (typeof variable === 'number')
		return 'number';
	else if (typeof variable === 'boolean')
		return 'boolean';
	else if (!variable && typeof variable === 'object')
		return 'object';
	else if (typeof variable === 'undefined')
		return 'undefined';
	else
		return 'object';
}

/*
 	#2
 	Напишите функцию, которая принимает 1 аргумент и возвращает:
	'primitive' если тип данных относится к примивным
	'primitive-special' если тип данных специальный
	'object' - если простой обьект
	'object-array' - если массив
	'object-function' - если функция
*/
function getDataTypePseudoName (variable) {

	var typeofValue = toString.call(variable).slice(8, -1).toLowerCase();

	if (typeofValue === 'string' || typeofValue === 'number' || typeofValue === 'boolean')
		return 'primitive';
	else if (typeofValue === 'undefined' || typeofValue === 'null')
		return 'primitive-special';
	else if (typeofValue === 'object')
		return 'object';
	else if (typeofValue === 'array')
		return 'object-array';
	else
		return 'object-function';
}


/*
	#3
	Напишите функцию, которая принимает 2 аргумента,
	и возврвщает 1 если их значения и их типы равны,
	0 если равны только значения
	и -1 в другом случае
*/
function compareByType (a, b) {
	if (a === b) return 1;
	if (a == b)  return 0;
	return -1;
}

// Numbers

/*
 	#4
 	Напишите функцию, которая принимает 1 аргумент,
	и в случае если аргумент имеет числовой тип увеличивает его на 1
	и возврвщвет результат,
	в любом другом случае возврвщвет -1
*/
function increase (value) {
	if (typeof value === 'number')
		return ++value;
	return -1
}

/*
 	#5 Напишите функцию, которая принимает 1 аргумент(число),
	и в случае если аргумент не Infinity или  NaN возвращает строку 'safe' иначе 'danger'
*/
function testForSafeNumber (value) {
	//debugger;
	if (value !== Infinity && !isNaN(value))
		return 'safe';
	return 'danger';
}



// Strings

/*
 	#6 Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает массив из елементов строки разделенных по пробелу ' '
*/
function stringToArray (str) {
	return str.split(' ');
}


/*
 	#7 Напишите функцию, которая принимает 1 аргумент (строку),
	и возвращает часть этой строки до первой запятой
*/
function getStringPart(str) {

	var arr = str.split('');
	return arr.slice(0, arr.indexOf(',')).join('');

}

/*
 	#8 Напишите функцию, которая принимает 2 аргумента (строку и симовл),
	и возвращает порядковый номер симовола в строе если символ встречается в строке 1 раз,
	false в противоположном случае
*/
function isSingleSymbolMatch(str, symbol) {

	if (str.split(symbol).length - 1 === 1){
		return str.split('').indexOf(symbol.toString());
	}
	return false;
}

/*
 	#9 Напишите функцию, которая принимает 2 аргумента,
	массив в разделитель[опционально],
	и возвращает строку ввиде элементов массива c разделителями если разделитель задан
	или строку разделенную "-" если не задан
*/
function join (array, separator) {

	if (separator.length)
		return array.join(separator);
	else
		return array.join('-');
}


/*
 	#10
 	Напишите функцию, которая принимает 2 массива,
	и возвращает один состоящий из элементов перового и второго (последовательно сначала первый потом второй)
*/
function glue (arrA, arrB) {
	return arrA.concat(arrB);
}


/*
 	#11
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой массив отсортированный от большего к меньшему
*/
function order (arr) {
	return arr.sort(function (a, b) {
		if (a > b) return -1;
		if (a < b) return 1;
	});

}


/*
	#12
	Напишите функцию, которая принимает 1 массив,
	и возвращает другой без чисел которые меньше 0
*/
function removeNegative (arr) {
	return arr.filter(function (value, i) {
		return arr[i] > 0;
	});

}

/*
	#13
	Напишите функцию, которая принимает 2 числовых массива,
	и возвращает новый массив, состоящий из элементов первого но без элементов
	которые присутствуют во втром
	[1,2,3], [1, 3] => [2]
*/
function without (arrA, arrB) {
	var objA = {};
	var objB = {};
	var resultArr = [];
	for (var i = 0; i < arrA.length; i++) {
		objA[arrA[i]] = arrA[i];
	}
	for (var i = 0; i < arrB.length; i++) {
		objB[arrB[i]] = arrB[i];
	}
	for (var key in objA) {
		if (objA[key] !== objB[key]) {
			resultArr.push(objA[key]);
		}
	}
	return resultArr;
}
