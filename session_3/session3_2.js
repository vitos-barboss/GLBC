// 2 Searching for favorite songs.

var songs = [
	{
		name: 'Everlast – What It\'s Like',
		played: rand()
	},
	{
		name: 'The Cancel – Summer tape',
		played: rand()
	},
	{
		name: 'Soil – Halo',
		played: rand()
	},
	{
		name: 'Jack White – Love Is Blindness',
		played: rand()
	},
	{
		name: 'Leny Kravitz – I Belong To You',
		played: rand()
	}
];

function rand() {

	return Math.round(Math.random()*100);

}

function favoriteSong(list) {

	for(var i = 0; i < list.length; i++) {
		console.log('' + list[i].name + ' // Played:' + list[i].played + ' #' +i);
	}

}

favoriteSong(songs);