// 2 Searching for favorite songs.

function CreateSong(name, played) {

	this.name = name;
	this.played = played;

}

function favoriteSong(list) {

	var position,
		myFavoriteSongSong = list[0];


	for (var i = 1; i < list.length; i++) {
		if (list[i].played > myFavoriteSongSong.played) {
			myFavoriteSongSong = list[i];
			position = i + 1;
		}
	}

	return myFavoriteSongSong.name + ' // Played:' + myFavoriteSongSong.played + ' #' + position;

}

var listOfSongs = [];

listOfSongs.push(new CreateSong('Everlast – What It\'s Like', 20));
listOfSongs.push(new CreateSong('The Cancel – Summer tape', 26));
listOfSongs.push(new CreateSong('Soil – Halo', 9));
listOfSongs.push(new CreateSong('Jack White – Love Is Blindness', 17));
listOfSongs.push(new CreateSong('Leny Kravitz – I Belong To You', 24));

console.log(favoriteSong(listOfSongs));


