let desktopFavoritesSearchbar = document.querySelector("#desktop-favorites-searchbar");
let desktopFavoritesXBtn = document.querySelector("#desktop-favorites-x-btn");
let favoriteSongs = document.querySelectorAll(".favorite-song-cont")
let desktopFavoritesNoResultsMessage = document.querySelector(".desktop-favorites-no-results-message")
let desktopFavoritesSearchbarValue;
let numDesktopFavoritesResults;

desktopFavoritesSearchbar.addEventListener("keyup", function(){
  desktopFavoritesSearchbarValue = (desktopFavoritesSearchbar.value).toLowerCase().trim();
  numDesktopFavoritesResults = 0;

  favoriteSongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText).toLowerCase();
    let songGenre = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText).toLowerCase();

    if(songName.includes(desktopFavoritesSearchbarValue) || songArtist.includes(desktopFavoritesSearchbarValue) || songGenre.includes(desktopFavoritesSearchbarValue)){
      song.style.display = "flex";
      numDesktopFavoritesResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(desktopFavoritesSearchbarValue.length <= 0){
      desktopFavoritesXBtn.style.display = "none";
      desktopFavoritesNoResultsMessage.style.display = "none";
    }
    else{
      desktopFavoritesXBtn.style.display = "block";
    }

  if(numDesktopFavoritesResults == 0){
    desktopFavoritesNoResultsMessage.style.display = "block";
  }
  else{
    desktopFavoritesNoResultsMessage.style.display = "none";
  }
})

desktopFavoritesXBtn.addEventListener("click", function(){
  desktopFavoritesXBtn.style.display = "none";
  desktopFavoritesSearchbar.value = "";
  desktopFavoritesNoResultsMessage.style.display = "none"

  favoriteSongs.forEach(song => {
    song.style.display = "flex";
  })
})

let mobileFavoritesSearchbar = document.querySelector("#mobile-favorites-searchbar");
let mobileFavoritesXBtn = document.querySelector("#mobile-favorites-x-btn");
//let favoriteSongs = document.querySelectorAll(".favorite-song-cont")
let mobileFavoritesNoResultsMessage = document.querySelector(".mobile-favorites-no-results-message")
let mobileFavoritesSearchbarValue;
let numMobileFavoritesResults;

mobileFavoritesSearchbar.addEventListener("keyup", function(){
  mobileFavoritesSearchbarValue = (mobileFavoritesSearchbar.value).toLowerCase().trim();
  numMobileFavoritesResults = 0;

  favoriteSongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText).toLowerCase();
    let songGenre = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText).toLowerCase();

    if(songName.includes(mobileFavoritesSearchbarValue) || songArtist.includes(mobileFavoritesSearchbarValue) || songGenre.includes(mobileFavoritesSearchbarValue)){
      song.style.display = "flex";
      numMobileFavoritesResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(mobileFavoritesSearchbarValue.length <= 0){
      mobileFavoritesXBtn.style.display = "none";
      mobileFavoritesNoResultsMessage.style.display = "none";
    }
    else{
      mobileFavoritesXBtn.style.display = "block";
    }

  if(numMobileFavoritesResults == 0){
    mobileFavoritesNoResultsMessage.style.display = "block";
  }
  else{
    mobileFavoritesNoResultsMessage.style.display = "none";
  }
})

mobileFavoritesXBtn.addEventListener("click", function(){
  mobileFavoritesXBtn.style.display = "none";
  mobileFavoritesSearchbar.value = "";
  mobileFavoritesNoResultsMessage.style.display = "none"

  favoriteSongs.forEach(song => {
    song.style.display = "flex";
  })
})

//library loop and shuffle functionality

let favoritesPlayIcon = document.querySelector("#favorites-play-icon");
let favoriteSongsCont = document.querySelector(".desktop-favorites-page-songs-cont");
//let favoriteSongs = document.querySelectorAll(".favorite-song-cont")

favoritesPlayIcon.addEventListener("click", startFavoritesMusicLoop)

function startFavoritesMusicLoop() {
  if(favoriteSongsCont.firstElementChild.classList.contains("favorite-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playFavoritesSong();
  }
}

function playFavoritesSong(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextFavoritesSong)
  }
  else{
    currentSong = favoriteSongsCont.firstElementChild;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextFavoritesSong)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function nextFavoritesSong(){
  if(currentSong.classList.contains("favorite-song-cont")){
    currentSong = currentSong.nextElementSibling;
    playFavoritesSong();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

//hiding default image and text for miniplayer and music player

favoritesPlayIcon.addEventListener("click", function(){
  if(currentSong){
    miniPlayerDefaultImg.style.display = "none";
    miniPlayerDefaultMessage.style.display = "none";
    miniPlayerImg.style.display = "block";
    miniPlayerContent.style.display = "flex";

    musicPlayerDefaultImg.style.display = "none";
    musicPlayerDefaultMessage.style.display = "none";
    musicPlayerImgCont.style.display = "block";
    musicPlayerSongInfo.style.display = "block";
  }
})

let favoritesShuffleIcon = document.querySelector("#favorites-shuffle-icon");
let favoritesShuffleSongs = document.querySelectorAll(".favorite-song-cont");


favoritesShuffleIcon.addEventListener("click", startFavoritesShuffleLoop);

function startFavoritesShuffleLoop() {
  if(favoriteSongsCont.firstElementChild.classList.contains("favorite-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playFavoritesShuffledSongs();
  }
}

function playFavoritesShuffledSongs(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleFavoritesSongs)
  }
  else{
    let randomNum = Math.floor(Math.random() * favoritesShuffleSongs.length)
    currentSong = favoritesShuffleSongs[randomNum];
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleFavoritesSongs)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function shuffleFavoritesSongs(){
  if(currentSong.classList.contains("favorite-song-cont")){
    let randomNum = Math.floor(Math.random() * favoritesShuffleSongs.length)

    currentSong = favoritesShuffleSongs[randomNum]

    playFavoritesShuffledSongs();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

favoritesShuffleIcon.addEventListener("click", function(){
  if(currentSong){
    miniPlayerDefaultImg.style.display = "none";
    miniPlayerDefaultMessage.style.display = "none";
    miniPlayerImg.style.display = "block";
    miniPlayerContent.style.display = "flex";

    musicPlayerDefaultImg.style.display = "none";
    musicPlayerDefaultMessage.style.display = "none";
    musicPlayerImgCont.style.display = "block";
    musicPlayerSongInfo.style.display = "block";
  }
})


//mobile favorites song loop

let mobileFavoritesPlayIcon = document.querySelector("#mobile-favorites-play-icon");
let mobileFavoriteSongsCont = document.querySelector(".favorites-page-songs-cont");
//let favoriteSongs = document.querySelectorAll(".favorite-song-cont")

mobileFavoritesPlayIcon.addEventListener("click", startMobileFavoritesMusicLoop)

function startMobileFavoritesMusicLoop() {
  if(mobileFavoriteSongsCont.firstElementChild.classList.contains("favorite-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playMobileFavoritesSong();
  }
  console.log("clicked")
}

function playMobileFavoritesSong(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextMobileFavoritesSong)
  }
  else{
    currentSong = favoriteSongsCont.firstElementChild;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextMobileFavoritesSong)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function nextMobileFavoritesSong(){
  if(currentSong.classList.contains("favorite-song-cont")){
    currentSong = currentSong.nextElementSibling;
    playMobileFavoritesSong();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

//hiding default image and text for miniplayer and music player

mobileFavoritesPlayIcon.addEventListener("click", function(){
  if(currentSong){
    miniPlayerDefaultImg.style.display = "none";
    miniPlayerDefaultMessage.style.display = "none";
    miniPlayerImg.style.display = "block";
    miniPlayerContent.style.display = "flex";

    musicPlayerDefaultImg.style.display = "none";
    musicPlayerDefaultMessage.style.display = "none";
    musicPlayerImgCont.style.display = "block";
    musicPlayerSongInfo.style.display = "block";
  }
})

let mobileFavoritesShuffleIcon = document.querySelector("#mobile-favorites-shuffle-icon");
let mobileFavoritesShuffleSongs = document.querySelectorAll(".favorite-song-cont");


mobileFavoritesShuffleIcon.addEventListener("click", startMobileFavoritesShuffleLoop);

function startMobileFavoritesShuffleLoop() {
  if(mobileFavoriteSongsCont.firstElementChild.classList.contains("favorite-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playMobileFavoritesShuffledSongs();
  }
}

function playMobileFavoritesShuffledSongs(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleMobileFavoritesSongs)
  }
  else{
    let randomNum = Math.floor(Math.random() * mobileFavoritesShuffleSongs.length)
    currentSong = favoritesShuffleSongs[randomNum];
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleMobileFavoritesSongs)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function shuffleMobileFavoritesSongs(){
  if(currentSong.classList.contains("favorite-song-cont")){
    let randomNum = Math.floor(Math.random() * mobileFavoritesShuffleSongs.length)

    currentSong = favoritesShuffleSongs[randomNum]

    playMobileFavoritesShuffledSongs();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

mobileFavoritesShuffleIcon.addEventListener("click", function(){
  if(currentSong){
    miniPlayerDefaultImg.style.display = "none";
    miniPlayerDefaultMessage.style.display = "none";
    miniPlayerImg.style.display = "block";
    miniPlayerContent.style.display = "flex";

    musicPlayerDefaultImg.style.display = "none";
    musicPlayerDefaultMessage.style.display = "none";
    musicPlayerImgCont.style.display = "block";
    musicPlayerSongInfo.style.display = "block";
  }
})