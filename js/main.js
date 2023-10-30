let mainCont = document.querySelector(".main-cont");

let miniPlayer = document.querySelector(".mini-player");
let miniPlayerOpen = document.querySelector(".mini-player-open-btn");

let mainNav = document.querySelector(".main-nav");
let mainHeader = document.querySelector(".main-header");

let musicPlayer = document.querySelector(".music-player");
let musicPlayerClose = document.querySelector(".music-player-downarrow-icon");

musicPlayerClose.addEventListener("click", function(){
  musicPlayer.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  mainCont.style.height = "100%";
  mainCont.style.overflowY = "visible";
})

miniPlayerOpen.addEventListener("click", function(){
  musicPlayer.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";
  mainCont.style.height = "100vh";
  mainCont.style.overflowY = "hidden";
})

let navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    navBtns.forEach(btn => {
      btn.classList.add("nav-btn-unactive");
    })
    
    btn.classList.remove("nav-btn-unactive")

    if(!btn.classList.contains("nav-btn-active")){

      btn.classList.toggle("nav-btn-active");
    }
  })
})

let headerText = document.querySelector(".header-title");

navBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    headerText.innerText = btn.lastElementChild.innerText;
  })
})


let libraryBtn = document.querySelector(".library-nav-btn");
let playlistBtn = document.querySelector(".playlists-nav-btn");
let discoverBtn = document.querySelector(".discover-nav-btn");
let searchBtn = document.querySelector(".search-nav-btn");

let libraryCont = document.querySelector(".library-cont");
let playlistPageCont = document.querySelector(".playlist-page-cont");
let discoverPageCont = document.querySelector(".discover-page-cont");
let searchPageCont = document.querySelector(".search-page-cont");

libraryBtn.addEventListener("click", function(){
  libraryCont.style.display = "flex";
  playlistPageCont.style.display = "none";
  discoverPageCont.style.display = "none";
  searchPageCont.style.display = "none";
  window.scrollTo({top: 0})
})

playlistBtn.addEventListener("click", function(){
  playlistPageCont.style.display = "flex";
  libraryCont.style.display = "none";
  discoverPageCont.style.display = "none";
  searchPageCont.style.display = "none";
  window.scrollTo({top: 0})
})

discoverBtn.addEventListener("click", function(){
  discoverPageCont.style.display = "flex";
  libraryCont.style.display = "none";
  playlistPageCont.style.display = "none";
  searchPageCont.style.display = "none";
  window.scrollTo({top: 0})
})

searchBtn.addEventListener("click", function(){
  searchPageCont.style.display = "flex";
  libraryCont.style.display = "none";
  playlistPageCont.style.display = "none";
  discoverPageCont.style.display = "none";
  window.scrollTo({top: 0})
})

let musicPlayerPause = document.querySelector(".music-player-pause-icon");
let musicPlayerPlay = document.querySelector(".music-player-play-icon");

musicPlayerPause.addEventListener("click", function(){
  musicPlayerPause.style.display = "none";
  musicPlayerPlay.style.display = "block";
})

musicPlayerPlay.addEventListener("click", function(){
  musicPlayerPause.style.display = "block";
  musicPlayerPlay.style.display = "none";
})

//Library functions

//Displaying the popups for each song on button click

let optionsIcons = document.querySelectorAll(".elipsis-icon");

optionsIcons.forEach(icon => {
  icon.addEventListener("click", function(){
    icon.nextElementSibling.style.display = "flex";
  })
})

//Closing the popup on button click

let popupCloseBtns = document.querySelectorAll(".close-btn");

popupCloseBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    btn.parentElement.style.display = "none";
  })
})

let librarySongs = document.querySelectorAll(".song-play-btn");

let miniPlayerImg = document.querySelector(".mini-player-img");
let miniPlayerSongName = document.querySelector(".mini-player-song-name");
let miniPlayerArtistName = document.querySelector(".mini-player-artist-name");

let musicPlayerImg = document.querySelector(".music-player-img");
let musicPlayerSongName = document.querySelector(".music-player-song-name");
let musicPlayerArtistName = document.querySelector(".music-player-artist-name")

let musicPlayerSong = document.querySelector(".music-player-song");

let currentSong;

librarySongs.forEach(song => {
  song.addEventListener("click", function(){
    let songSrc = song.previousElementSibling.src
    let newSrc = songSrc.substring(40, songSrc.length)
    miniPlayerImg.src = newSrc;
    miniPlayerSongName.innerText = song.nextElementSibling.firstElementChild.innerText;
    miniPlayerArtistName.innerText = song.nextElementSibling.lastElementChild.innerText;

    musicPlayerImg.src = newSrc;
    musicPlayerSongName.innerText = song.nextElementSibling.firstElementChild.innerText;
    musicPlayerArtistName.innerText = song.nextElementSibling.lastElementChild.innerText;

    let songAudioSrc = "song-content/" + song.parentElement.lastElementChild.innerText.trim();
    musicPlayerSong.src = songAudioSrc;
    musicPlayerSong.play();

    currentSong = song.parentElement;

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";
  })
})

//hiding the default miniplayer image and message when a song is played
//displaying the image, song name, and artist of the playing song

let miniPlayerDefaultImg = document.querySelector(".mini-player-default-img-cont");
let miniPlayerDefaultMessage = document.querySelector(".mini-player-default-message");
let miniPlayerContent = document.querySelector(".mini-player-content");
let musicPlayerDefaultImg = document.querySelector(".music-player-default-img-cont");
let musicPlayerImgCont = document.querySelector(".music-player-img-cont");
let musicPlayerSongInfo = document.querySelector(".music-player-song-info");
let musicPlayerDefaultMessage = document.querySelector(".music-player-default-message");

librarySongs.forEach(song => {
  song.addEventListener("click", function(){
    miniPlayerDefaultImg.style.display = "none";
    miniPlayerDefaultMessage.style.display = "none";
    miniPlayerImg.style.display = "block";
    miniPlayerContent.style.display = "flex";

    musicPlayerDefaultImg.style.display = "none";
    musicPlayerDefaultMessage.style.display = "none";
    musicPlayerImgCont.style.display = "block";
    musicPlayerSongInfo.style.display = "block";
  })
})


let musicPlayerBackBtn = document.querySelector(".music-player-back-icon");

musicPlayerBackBtn.addEventListener("click", function(){
  if (currentSong && currentSong.previousElementSibling != null){
    let previousSong = currentSong.previousElementSibling;
    currentSong = previousSong

    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText

    let newSongSrc = "song-content/" + currentSong.lastElementChild.innerText.trim();
    musicPlayerSong.src = newSongSrc;
    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";
    musicPlayerSong.play();
  }
})

let musicPlayerSkipBtn = document.querySelector(".music-player-skip-icon");

musicPlayerSkipBtn.addEventListener("click", function(){
  if (currentSong && currentSong.nextElementSibling != null){
    let nextSong = currentSong.nextElementSibling;
    currentSong = nextSong

    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText

    let newSongSrc = "song-content/" + currentSong.lastElementChild.innerText.trim();
    musicPlayerSong.src = newSongSrc;
    musicPlayerSong.play();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";
  }
})

//if there is a song selected, pause it on button click

musicPlayerPause.addEventListener("click", function(){
  if(currentSong){
    musicPlayerSong.pause();
  }
})

//if there is a song selected, play it on button click

musicPlayerPlay.addEventListener("click", function(){
  if(currentSong){
    musicPlayerSong.play();
  }
})

// after song has finished display the play button, hide the pause button

musicPlayerSong.addEventListener("ended", function(){
  musicPlayerPause.style.display = "none";
  musicPlayerPlay.style.display = "block";
})

let songProgressBar = document.querySelector(".song-slider");

musicPlayerSong.addEventListener("canplay", function(){
  songProgressBar.max = musicPlayerSong.duration;
  songProgressBar.value = musicPlayerSong.currentTime;
  songProgressBar.step = .05;
})


musicPlayerSong.addEventListener('play', function(){
  interval = setInterval(function() {
    songProgressBar.value = musicPlayerSong.currentTime

    if (musicPlayerSong.ended){
      clearInterval(interval)
    }

  }, 1)
})

songProgressBar.addEventListener("input", function(){
  musicPlayerSong.currentTime = songProgressBar.value;
})

let songVolume = document.querySelector(".song-volume");

songVolume.addEventListener("input", function(){
  musicPlayerSong.volume = songVolume.value;
})

