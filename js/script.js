const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const img = document.querySelector("img");
const music = document.querySelector("audio");

const songs = [
  {
    title: "One Love",
    artist: "Shubh",
  },
  {
    title: "With You",
    artist: "AP Dhilon",
  },
  {
    title: "Kesariya",
    artist: "Arijit Singh",
  },
  {
    title: "Faded",
    artist: "Alan Walker",
  },
  {
    title: "Metamorphosis",
    artist: "INTERWORLD",
  },
];

let isPlaying = false;
const playMusic = () => {
  isPlaying = true;
  music.play();
  play.classList.replace("fa-play", "fa-pause");
  img.classList.add("anime");
};
const pauseMusic = () => {
  isPlaying = false;
  music.pause();
  play.classList.replace("fa-pause", "fa-play");
  img.classList.remove("anime");
};
play.addEventListener("click", () => {
  isPlaying ? pauseMusic() : playMusic();
});

const loadSong = (songs) => {
  title.textContent = songs.title;
  artist.textContent = songs.artist;
  music.src = "music/" + songs.title + ".mp3";
  img.src = "images/" + songs.title + ".jpg";
};

let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);
