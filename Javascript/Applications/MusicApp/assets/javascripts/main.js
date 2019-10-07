window.addEventListener("load", initEvents);
var audio;

function initEvents() {
    audio = document.querySelector("#audio");
    loadSongs();
}

function loadSongs() {
    var ul = document.querySelector("#songs");
    for (var i = 0; i < songsList.length; i++) {
        var li = document.createElement("li");
        var span = document.createElement("span");
        var img = document.createElement("img");
        var btn = document.createElement("button");
        btn.innerHTML = "Add to playlist";
        btn.className = "btn btn-primary w-100"
        span.innerHTML = songsList[i].song_name;
        img.src = songsList[i].song_thumb;
        img.setAttribute('title', songsList[i].song_id);
        li.appendChild(img);
        li.appendChild(span);
        li.appendChild(btn);
        ul.appendChild(li);
        img.addEventListener("click", playSong);
        btn.addEventListener("click", addToPlaylist);
    }
}

function playSong() {
    var song_id = event.srcElement.title;
    var current_span = document.querySelector("#current_song");
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            var songUrl = songsList[i].song_url;
            var songName = songsList[i].song_name;
        }
    }
    current_span.innerHTML = songName;
    audio.src = songUrl;
    audio.play();
}

function addToPlaylist() {
    var song_id = event.srcElement.parentElement.children[0].title;
    for (var i = 0; i < songsList.length; i++) {
        if (songsList[i].song_id == song_id) {
            obj.addSong(songsList[i].song_id, songsList[i].song_name, songsList[i].song_url, songsList[i].song_thumb);
        }
    }
}