const playBtn = document.getElementsByClassName("play-btn")[0];
const audioPlayer = document.getElementsByTagName("audio")[0];
const play = document.getElementsByClassName("fa-solid fa-play button")[0];
const pause = document.getElementsByClassName("fa-solid fa-pause")[0];
const prevBtn = document.getElementsByClassName("prev-btn")[0];
const nextBtn = document.getElementsByClassName("next-btn")[0];
const songTitle = document.getElementsByClassName("songTitle")[0];
const coverImage = document.getElementsByTagName("img")[0];
console.log("jj", coverImage);

const playList = [
  {
    name: "UKULELE",
    src: "./assets/happy-mood-and-ukulele-version-60s-9895.mp3",
    image: "./assets/360_F_38128128_qnr51oAUxMG81lLe7zRDVs4444C0Qec7.jpg",
  },
  {
    name: "HEY",
    src: "./assets/acoustic-ho-hey-205903.mp3",
    image: "./assets/hey-lettering-design-illustration_23-2149543967.avif",
  },
  {
    name: "SUMMER",
    src: "./assets/summer-vibes-158665.mp3",
    image:
      "./assets/stock-vector-summer-time-vector-banner-design-with-white-circle-for-text-and-colorful-beach-elements-in-white-582601519.jpg",
  },
];

let currentSong = 0;

playBtn.addEventListener("click", () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    play.classList.add("hide");
    pause.classList.remove("hide");
    songTitle.textContent = playList[currentSong].name;
    coverImage.src = playList[currentSong].image;
  } else {
    audioPlayer.pause();
    play.classList.remove("hide");
    pause.classList.add("hide");
  }
  console.log("jj", playList[currentSong].image);
});

nextBtn.addEventListener("click", () => {
  currentSong++;

  if (currentSong === playList.length) {
    currentSong = 0;
  }
  console.log("jj", playList[currentSong].image);
  audioPlayer.src = playList[currentSong].src;
  songTitle.textContent = playList[currentSong].name;
  coverImage.src = playList[currentSong].image;
  audioPlayer.play();
});

prevBtn.addEventListener("click", () => {
  currentSong--;
  if (currentSong < 0) {
    currentSong = playList.length - 1;
  }
  console.log("jj", currentSong);
  console.log("jj", playList[currentSong].image);
  audioPlayer.src = playList[currentSong].src;
  songTitle.textContent = playList[currentSong].name;
  coverImage.src = playList[currentSong].image;
  audioPlayer.play();
});
