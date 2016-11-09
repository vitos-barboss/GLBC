// 2 Searching for favorite songs.

function CreateSong(name, played) {

	this.name = name;
	this.played = played;

}

function favoriteSong() {

	var favoriteSongName,
		favoriteSongPos;
		favoriteSongCount = this[0].played;

	for (var i = 0; i < this.length; i++) {
		if (this[i].played > favoriteSongCount) {
			favoriteSongName = this[i].name;
			favoriteSongPos = i;
			favoriteSongCount = this[i].played;
		}
	}

	return favoriteSongName + ' // Played:' + favoriteSongCount + ' #' + favoriteSongPos;

}

var listOfSongs = [];

listOfSongs.push(new CreateSong('Everlast – What It\'s Like', 20));
listOfSongs.push(new CreateSong('The Cancel – Summer tape', 26));
listOfSongs.push(new CreateSong('Soil – Halo', 9));
listOfSongs.push(new CreateSong('Jack White – Love Is Blindness', 17));
listOfSongs.push(new CreateSong('Leny Kravitz – I Belong To You', 24));

console.log(favoriteSong.call(listOfSongs));


