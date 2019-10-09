function Song(id, name, url, image) {
    this.id = id;
    this.name = name;
    this.url = url;
    this.image = image;
    this.selected = false;
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
    },

    "deleteSong": function(id) {
        current_song = this.playList.filter(function(x) {
            return x.id == id;
        })
        current_song[0].selected = true;

        this.playList = this.playList.filter(function(x) {
            return x.selected == false;
        })

    }
}