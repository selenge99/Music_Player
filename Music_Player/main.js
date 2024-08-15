const playBtn = document.getElementsByClassName("play-btn")[0]
const audioPlayer = document.getElementsByTagName("audio")[0]
const play = document.getElementsByClassName("fa-solid fa-play button")[0]
const pause = document.getElementsByClassName("fa-solid fa-pause")[0]
const prevBtn = document.getElementsByClassName("prev-btn")[0]
const nextBtn = document.getElementsByClassName("next-btn")[0]

const playList = [
    {
        name:"ukulele",
        src:"./assets/happy-mood-and-ukulele-version-60s-9895.mp3",
        img:"./assets/ukulele-music-instrument-logo-design-vector_72766-684.avif"
    },
    {
        name:"hey",
        src:"./assets/acoustic-ho-hey-205903.mp3",
        img:"./assets/hey-lettering-design-illustration_23-2149543967.avif"
    },
    {
        name:"summer",
        src:"./assets/summer-vibes-158665.mp3",
        img:"./assets/stock-vector-summer-time-vector-banner-design-with-white-circle-for-text-and-colorful-beach-elements-in-white-582601519.jpg"
    }
]

let currentSong = 0;

playBtn.addEventListener("click", ()=>{
    if( audioPlayer.paused){
        audioPlayer.play();
        play.classList.add("hide")
        pause.classList.remove("hide")
    } else {
        audioPlayer.pause()
        play.classList.remove("hide")
        pause.classList.add("hide")
    }
})

nextBtn.addEventListener("click", () => {
    currentSong++;
    if (currentSong === playList.length) {
      currentSong = 0;
    }
    audioPlayer.src = playList[currentSong].src;
    audioPlayer.play();
    //   console.log(currentsong);
  });
  prevBtn.addEventListener("click", () => {
    currentSong--;
    if (currentSong === 0) {
      currentSong = playList.length;
    }
    audioPlayer.src = playList[currentSong].src;
    audioPlayer.play();
    //   console.log(currentsong);
  });