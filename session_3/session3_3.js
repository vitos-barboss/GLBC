// //3 Calculator

function Calculator() {

	this.arr = Array.prototype.slice.call(arguments);

}

Calculator.prototype.add = function(num) {

	this.arr.push(num);

};

Calculator.prototype.getCurrentSum = function(index) {

	var arrayForCalculation = [];

	if (index !== undefined && index !== 0) {
		arrayForCalculation = this.arr.slice(0, index);
	} else {
		arrayForCalculation = this.arr;
	}

	return arrayForCalculation.reduce(function (prev, cur) {
		return prev + cur;

	})

};


var calc1 = new Calculator(3, 8, 11);
var calc2 = new Calculator(5, 12, 17);

console.log(calc1.getCurrentSum() + calc2.getCurrentSum());
console.log(calc1.getCurrentSum(2) + calc2.getCurrentSum(2));
console.log(calc1.getCurrentSum(3) === calc1.getCurrentSum());
