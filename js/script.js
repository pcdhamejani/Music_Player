const play = document.getElementById("play");
const title = document.getElementById("title");
const artist = document.getElementById("artist");
const next = document.getElementById("next");
const prev = document.getElementById("prev");
const img = document.querySelector("img");
const music = document.querySelector("audio");

const songs = [
  {
    name: "onelove",
    title: "One Love",
    artist: "Shubh",
  },
  {
    name: "bhardojolimeri",
    title: "Bhar Do Joli Meri",
    artist: "Adnan Sami",
  },
  {
    name: "withyou",
    title: "With You",
    artist: "AP Dhilon",
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
  music.src = "music/" + songs.name + ".mp3";
  img.src = "images/" + songs.name + ".jpg";
};

let songIndex = 0;

const nextSong = () => {
  songIndex = (songIndex + 1) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
  playNextIfEnded();
};

const prevSong = () => {
  songIndex = (songIndex - 1 + songs.length) % songs.length;
  loadSong(songs[songIndex]);
  playMusic();
};

const playNextIfEnded = () => {
  if (music.ended) {
    nextSong();
  }
};

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);

// let volume = document.getElementById("volume-slider");
// volume.addEventListener("change", function (e) {
//   music.volume = e.currentTarget.value / 100;
// });

// const value = document.getElementById("vol_value");
// const input = document.getElementById("volume_slider");
// value.textContent = input.value;
// input.addEventListener("change", (event) => {
//   value.textContent = event.currentTarget.value;
// });
