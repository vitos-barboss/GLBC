document.addEventListener('DOMContentLoaded', function () {

	var game = document.getElementsByClassName('battle-field')[0];

	var startArr = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11, ' '];

	/*
	 * function createField() to create and set class to any cells;
	 *
	 */

	function createField() {

		var fragment = document.createDocumentFragment();
		var div = document.createElement('div');

		for(var i = 0; i <= 15; i++) {
			var newDiv = div.cloneNode(true);
			newDiv.className = i;
			newDiv.textContent = startArr[i];
			fragment.appendChild(newDiv);
		}

		game.appendChild(fragment);
	}

	createField();

	/*
	 * function checkResult() - checking result of game and give win message;
	 *
	 */


	function checkResult() {

		var resStr = '';

		for (var i = 0; i <= 15; i++) {
			resStr += game.children[i].textContent;
		}

		var winStr = startArr.sort(fn).join('');

		function fn(a, b) {
			if (a > b) return 1;
			if (a < b) return -1;
			return 0;
		}

		if (parseInt(winStr) === parseInt(resStr)) {
			console.log('win');
			game.textContent = 'You win';
			game.removeEventListener('click', handler);

		}
	}

	/*
	 * Add event 'click':
	 * 		- replace value if gap is next to target;
	 * 		- call checkResult() for check game statusж
	 *
	 */
	
	game.addEventListener('click', handler);

	function handler(event) {
		var targetClass = event.target.className;
		var leftClass = targetClass - 1;
		var rightClass = +targetClass + 1;
		var upClass = targetClass - 4;
		var downClass = +targetClass + 4;

		var left = game.getElementsByClassName(leftClass)[0];
		var right = game.getElementsByClassName(rightClass)[0];
		var up = game.getElementsByClassName(upClass)[0];
		var down = game.getElementsByClassName(downClass)[0];

		if (left && left.textContent === ' ') {
			left.textContent = event.target.textContent;
			event.target.textContent = ' ';
		} else if (right && right.textContent === ' ') {
			right.textContent = event.target.textContent;
			event.target.textContent = ' ';
		} else if (up && up.textContent === ' ') {
			up.textContent = event.target.textContent;
			event.target.textContent = ' ';
		} else if (down && down.textContent === ' ') {
			down.textContent = event.target.textContent;
			event.target.textContent = ' ';
		}
		checkResult();

	}
	
	






















});