//3 Calculator

function Calculator() {
	var arr = Array.prototype.slice.call(arguments);

	this.add = function(num) {
		arr.push(num);

	};

	this.getCurrentSum = function(index) {
		if (index !== undefined) {
			var arrCut = arr.slice();
			arrCut.length = index;
		} else {
			arrCut = arr;
		}

		return arrCut.reduce(function (prev, cur) {
			return prev + cur;

		})

	};

}

var calc1 = new Calculator(3, 8, 11);
var calc2 = new Calculator(5, 12, 17);

console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
console.log(calc1.getCurrentSum(3) === calc1.getCurrentSum());