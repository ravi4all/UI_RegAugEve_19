function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
}

// class Song {
//     constructor(id, name, url, image) {
//         this.id = id;
//         this.name = name;
//         this.url = url;
//         this.image = image;
//     }
// }

var obj = {
    playList: [],
    "addSong": function(id, name, url, image) {
        var song = new Song(id, name, url, image);
        this.playList.push(song);
        console.log(this.playList);
    }
}