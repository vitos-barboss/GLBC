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

function favoriteSong() {

	for(var i = 0; i < this.length; i++) {
		console.log(this[i].name + ' // Played:' + this[i].played + ' #' +i);
	}

}

favoriteSong.call(songs);