// 2 Searching for favorite songs.

function CreateSong(name, played) {

	this.name = name;
	this.played = played;

}

CreateSong.favoriteSong = function () {

	var favoriteSongName,
		favoriteSongPos,
		favoriteSongCount = 0;

	for (var i = 0; i < this.length; i++) {
		if (this[i].played > favoriteSongCount) {
			favoriteSongCount = this[i].played;
			favoriteSongName = this[i].name;
			favoriteSongPos = i + 1;
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

console.log(CreateSong.favoriteSong.call(listOfSongs));

