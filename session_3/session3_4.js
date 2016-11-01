//4 Deep copy of object

function deepCopy(obj) {

	var newObj = {};

	for(var key in obj) {
		if (obj.hasOwnProperty(key)) {
			if (typeof obj[key] === 'object') {
				newObj[key] = deepCopy(obj[key]);
			} else {
				newObj[key] = obj[key];
			}
		}
	}

	return newObj;

}

var primaryObj = {
	a: 5,
	b: {
		c: 'primary inside',
		d: {
			g: 'primary value',
		}
	}
};

var deepCopyObj = deepCopy(primaryObj);
deepCopyObj.a = 100;
deepCopyObj.b.d.g = 'changed value';
console.log(primaryObj);
console.log(deepCopyObj);
console.log('primaryObj.b.d.g: ' + primaryObj.b.d.g);
console.log('deepCopyObj.b.d.g: ' + deepCopyObj.b.d.g);