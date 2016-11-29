/**
 * Create MVC objects
 */

var Model = {},
	View = {},
	Controller = {};

/**
 * Method of Model for set data in localStorage.
 * @param {object} newDataSet.
 */

Model.setStorage = function (newDataSet) {

	if (newDataSet !== undefined){
		localStorage.setItem('savedData', JSON.stringify(newDataSet));
		Model.data = Model.getStorageData();
	}

};

/**
 * Method of Model for get data from localStorage.
 * @returns {object} Returns 'savedData' of localStorage if it contains, otherwise
 * set default 'savedData'.
 */

Model.getStorageData = function () {

	if (!localStorage.getItem('savedData')) {
		var stockArr = [1,2,3,4,5,6,7,8,9,10,12,15,13,14,11, ' '];
		Model.setStorage(stockArr);
	}

	 return JSON.parse(localStorage.getItem('savedData'));

};

/**
 * Property of Model with the data from localStorage.
 */

Model.data = Model.getStorageData();

/**
 * Method of View for render battle field and fill this one with Model.data.
 */

View.render = function () {

	createBattleField();
	fillTheField(Model.data);

};

/**
 * Method of Controller for initialize the game.
 */

Controller.handleOnLoad = function () {

	Model.setStorage();

	View.render(Model);

	var mainField = document.getElementsByClassName('mainField')[0];
	mainField.addEventListener('click', moveNumber);


	var newGame = document.getElementsByClassName('newGame')[0];
	newGame.addEventListener('click', sortData);

};

window.onload = Controller.handleOnLoad;

/**
 * Function for create the battle field.
 */

function createBattleField() {

	var div = document.createElement('div');
	var battleField = document.getElementsByClassName('battle-field')[0];
	var mainField = div.cloneNode(true);
	mainField.className = 'mainField';

	for (var i = 0; i < 4; i++) {
		var row = div.cloneNode(true);
		row.className = 'row row' + i;

		for (var j = 0; j < 4; j++) {
			var col = div.cloneNode(true);
			col.className = 'col';
			col.setAttribute('pos', j);
			row.appendChild(col);
		}
		mainField.appendChild(row);
	}

	var btnNewGame = document.createElement('button');
	btnNewGame.className = 'newGame';
	btnNewGame.textContent = 'New Game';
	battleField.appendChild(mainField);
	battleField.appendChild(btnNewGame);

}

/**
 * Function for fill the battle field with value.
 * @param {object} data Model.data.
 */

function fillTheField(data) {

	var divs = document.getElementsByClassName('col');

	var getData = data;

	for (var t = 0; t < getData.length; t++) {
		divs[t].textContent = getData[t];
	}
}

/**
 * Handler for move values clicking the battle field's charts.
 * @param {object} event.
 */

function moveNumber(event) {

	var eventElement = event.target;
	var eventElementAttr = event.target.getAttribute('pos');

	if (eventElement.nextSibling && eventElement.nextSibling.textContent === ' ') {
		eventElement.nextSibling.textContent = eventElement.textContent;
		eventElement.textContent = ' ';

	} else if (eventElement.previousSibling && eventElement.previousSibling.textContent === ' ') {
		eventElement.previousSibling.textContent = eventElement.textContent;
		eventElement.textContent = ' ';
	}

	if (eventElement.parentElement.previousElementSibling) {
		var upRow = eventElement.parentElement.previousElementSibling.children;
		for (var k = 0; k < upRow.length; k++) {
			if (upRow[k].getAttribute('pos') === eventElementAttr && upRow[k].textContent === ' ') {
				upRow[k].textContent = eventElement.textContent;
				eventElement.textContent = ' ';
			}
		}
	}

	if (eventElement.parentElement.nextElementSibling) {
		var downRow = eventElement.parentElement.nextElementSibling.children;
		for (var m = 0; m < downRow.length; m++) {
			if (downRow[m].getAttribute('pos') === eventElementAttr && downRow[m].textContent === ' ') {
				downRow[m].textContent = eventElement.textContent;
				eventElement.textContent = ' ';
			}
		}
	}

	Controller.data2model();
	Controller.checkWin();

}

/**
 * Method of Controller for check result of game.
 */

Controller.checkWin = function() {

	var data = JSON.stringify(Model.data);
	var winArr = JSON.stringify([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15, ' ']);

	if (data === winArr) {

		var mainField = document.getElementsByClassName('mainField')[0];

		mainField.style = 'width: 216px; height: 215px; background-color: #659cef; ' +
						  'font-size: 40px; text-align: center;color: white;';
		mainField.textContent = "You win";

	}

};

/**
 * Method of Controller for prepare data and send it to local storage.
 */

Controller.data2model = function() {

	var newData = [];

	var data = document.getElementsByClassName('col');

	for (var d = 0; d < data.length; d++) {
		var elem = data[d].textContent;

		if (elem === ' ') {
			newData.push(elem);
		} else {
			newData.push(parseInt(elem));
		}

	}

	Model.setStorage(newData);

};

/**
 * Handler for Game button to mix data, push it to local storage and
 * initialize the new game.
 */

function sortData() {

	var data = Model.data;

	function sortRandom() {
		return Math.random() - 0.5;
	}

	sortedData = data.sort(sortRandom);

	Model.setStorage(sortedData);

	var battleField = document.getElementsByClassName('battle-field')[0];
	battleField.textContent = '';

	Controller.handleOnLoad();

}
