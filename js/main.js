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

let libraryNavBtn = document.querySelector(".library-nav-btn");

window.addEventListener("load", function(){
  libraryNavBtn.classList.add("nav-btn-active");
  console.log("load")
})

let navBtns = document.querySelectorAll(".nav-btn");

navBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    navBtns.forEach(btn => {
      btn.classList.add("nav-btn-unactive");
    })
    
    btn.classList.remove("nav-btn-unactive")

    btn.classList.add("nav-btn-active")

    /*
    if(!btn.classList.contains("nav-btn-active")){
      btn.classList.toggle("nav-btn-active");
    }
    */
  })
})
let closeSections = document.querySelectorAll(".close-section")

navBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    mainHeader.style.display = "flex"
    closeSections.forEach(section => {
      section.style.display = "none"
    })
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

  miniPlayerPauseBtn.style.display = "none";
  miniPlayerPlayBtn.style.display = "block";
})

musicPlayerPlay.addEventListener("click", function(){
  musicPlayerPause.style.display = "block";
  musicPlayerPlay.style.display = "none";

  miniPlayerPauseBtn.style.display = "block";
  miniPlayerPlayBtn.style.display = "none";
})

//Library functions

//Displaying the popups for each song on button click

let songPopups = document.querySelectorAll(".song-popup");
let optionsIcons = document.querySelectorAll(".elipsis-icon");

optionsIcons.forEach(icon => {
  icon.addEventListener("click", function(){
    songPopups.forEach(popup =>{
      popup.style.display = "none"
    })
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


//library search functionality

let librarySearchbar = document.querySelector("#library-searchbar");
let libraryXBtn = document.querySelector("#library-x-btn");
let librarySongs = document.querySelectorAll(".library-song-cont");
let librarySearchbarValue;
let libraryNoResultsMessage = document.querySelector(".library-no-results-message")
let numLibraryResults;

librarySearchbar.addEventListener("keyup", function(){
  librarySearchbarValue = (librarySearchbar.value).toLowerCase().trim();
  numLibraryResults = 0;

  librarySongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText).toLowerCase();

    if(songName.includes(librarySearchbarValue) || songArtist.includes(librarySearchbarValue)){
      song.style.display = "flex";
      numLibraryResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(librarySearchbarValue.length <= 0){
      libraryXBtn.style.display = "none";
      libraryNoResultsMessage.style.display = "none";
    }
    else{
      libraryXBtn.style.display = "block";
    }

  if(numLibraryResults == 0){
    libraryNoResultsMessage.style.display = "block";
  }
  else{
    libraryNoResultsMessage.style.display = "none";
  }

})


libraryXBtn.addEventListener("click", function(){
  libraryXBtn.style.display = "none";
  librarySearchbar.value = "";
  libraryNoResultsMessage.style.display = "none"

  librarySongs.forEach(song => {
    song.style.display = "flex";
  })
})

//desktopLibrarySearchFunctionality

let desktopLibrarySearchbar = document.querySelector("#desktop-library-searchbar");
let desktopLibraryXBtn = document.querySelector("#desktop-library-x-btn");
let desktopLibrarySearchbarValue;
let numDesktopLibraryResults;

desktopLibrarySearchbar.addEventListener("keyup", function(){
  desktopLibrarySearchbarValue = (desktopLibrarySearchbar.value).toLowerCase().trim();
  numDesktopLibraryResults = 0;

  librarySongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText).toLowerCase();
    let songGenre = (song.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.innerText).toLowerCase();

    if(songName.includes(desktopLibrarySearchbarValue) || songArtist.includes(desktopLibrarySearchbarValue) || songGenre.includes(desktopLibrarySearchbarValue)){
      song.style.display = "flex";
      numDesktopLibraryResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(desktopLibrarySearchbarValue.length <= 0){
      desktopLibraryXBtn.style.display = "none";
      libraryNoResultsMessage.style.display = "none";
    }
    else{
      desktopLibraryXBtn.style.display = "block";
    }

  if(numDesktopLibraryResults == 0){
    libraryNoResultsMessage.style.display = "block";
  }
  else{
    libraryNoResultsMessage.style.display = "none";
  }
})

desktopLibraryXBtn.addEventListener("click", function(){
  desktopLibraryXBtn.style.display = "none";
  desktopLibrarySearchbar.value = "";
  libraryNoResultsMessage.style.display = "none"

  librarySongs.forEach(song => {
    song.style.display = "flex";
  })
})


//playing the song when a song is clicked, changing the image source of the miniplayer and music player to the image of the song
//changing the song name, artist name, and setting the current song to the song that was clicked

let librarySongPlayBtn = document.querySelectorAll(".song-play-btn");

let miniPlayerImg = document.querySelector(".mini-player-img");
let miniPlayerSongName = document.querySelector(".mini-player-song-name");
let miniPlayerArtistName = document.querySelector(".mini-player-artist-name");

let musicPlayerImg = document.querySelector(".music-player-img");
let musicPlayerSongName = document.querySelector(".music-player-song-name");
let musicPlayerArtistName = document.querySelector(".music-player-artist-name")

let musicPlayerSong = document.querySelector(".music-player-song");

let currentSong;

librarySongPlayBtn.forEach(song => {
  song.addEventListener("click", function(){
    let songSrc = song.previousElementSibling.src;
    miniPlayerImg.src = songSrc;
    miniPlayerSongName.innerText = song.nextElementSibling.firstElementChild.innerText;
    miniPlayerArtistName.innerText = song.nextElementSibling.firstElementChild.nextElementSibling.innerText;

    musicPlayerImg.src = songSrc;
    musicPlayerSongName.innerText = song.nextElementSibling.firstElementChild.innerText;
    musicPlayerArtistName.innerText = song.nextElementSibling.firstElementChild.nextElementSibling.innerText;

    let songAudioSrc = song.parentElement.lastElementChild.src;
    musicPlayerSong.src = songAudioSrc;
    musicPlayerSong.play();

    currentSong = song.parentElement;

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
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

librarySongPlayBtn.forEach(song => {
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



// music player functionality

let musicPlayerBackBtn = document.querySelector(".music-player-back-icon");

musicPlayerBackBtn.addEventListener("click", function(){
  if (currentSong && currentSong.previousElementSibling != null && currentSong.previousElementSibling.style.display != "none"){
    let previousSong = currentSong.previousElementSibling;
    currentSong = previousSong

    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    let newSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = newSongSrc;
    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
    musicPlayerSong.play();
  }
})

let musicPlayerSkipBtn = document.querySelector(".music-player-skip-icon");

musicPlayerSkipBtn.addEventListener("click", function(){
  if (currentSong && currentSong.nextElementSibling != null && currentSong.nextElementSibling.style.display != "none"){
    let nextSong = currentSong.nextElementSibling;
    currentSong = nextSong;

    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText;

    let newSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = newSongSrc;
    musicPlayerSong.play();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
})

let miniPlayerSkipBtn = document.querySelector(".mini-player-skip-btn");

miniPlayerSkipBtn.addEventListener("click", function(){
  if (currentSong && currentSong.nextElementSibling != null && currentSong.nextElementSibling.style.display != "none"){
    let nextSong = currentSong.nextElementSibling;
    currentSong = nextSong

    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    let newSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = newSongSrc;
    musicPlayerSong.play();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
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

// after song has finished playing display the play button, hide the pause button

musicPlayerSong.addEventListener("ended", function(){
  musicPlayerPause.style.display = "none";
  musicPlayerPlay.style.display = "block";

  miniPlayerPauseBtn.style.display = "none";
  miniPlayerPlayBtn.style.display = "block";
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

  }, 500)
})

songProgressBar.addEventListener("input", function(){
  musicPlayerSong.currentTime = songProgressBar.value;
})

let songVolume = document.querySelector(".song-volume");

songVolume.addEventListener("input", function(){
  musicPlayerSong.volume = songVolume.value;
})

//mini-player functionality

let miniPlayerPlayBtn = document.querySelector(".mini-player-play-btn");
let miniPlayerPauseBtn = document.querySelector(".mini-player-pause-btn");

miniPlayerPlayBtn.addEventListener("click", ()=> {
  miniPlayerPlayBtn.style.display = "none";
  miniPlayerPauseBtn.style.display = "block";

  musicPlayerPlay.style.display = "none";
  musicPlayerPause.style.display = "block";

  if(currentSong){
    musicPlayerSong.play();
  }
})

miniPlayerPauseBtn.addEventListener("click", ()=> {
  miniPlayerPauseBtn.style.display = "none";
  miniPlayerPlayBtn.style.display = "block";

  musicPlayerPause.style.display = "none";
  musicPlayerPlay.style.display = "block";

  if(currentSong){
    musicPlayerSong.pause();
  }
})



//add to playlist functionality

//when add to playlist button is clicked, open the add to playlist page, and hide the main components

let addToPlaylistBtns = document.querySelectorAll(".add-playlist-btn");
let addToPlaylistPage = document.querySelector(".add-song-to-playlist-page");

addToPlaylistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    addToPlaylistPage.style.display = "flex";
    miniPlayer.style.display = "none";
    mainNav.style.display = "none";
    mainHeader.style.display = "none";

  })
})



//closing the add to playlist page
//when the back button is clciked, hide the add to playlist page and display the main components

let addToPlaylistPageBackBtn = document.querySelector(".add-song-playlist-page-back-arrow");

addToPlaylistPageBackBtn.addEventListener("click", function(){
  addToPlaylistPage.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  addToPlaylistSuccessFailMessage.style.display = "none";

  songPopups.forEach(popup => {
    popup.style.display = "none"
  })

  playlistSelections.forEach(selection => {
    selection.checked = false;
  })

})


// setting the variable's value to the id of the song that is clicked

let addToPlaylistSongId;

addToPlaylistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    addToPlaylistSongId = btn.firstElementChild.innerText;
  })
})



//making ajax request to submit a song into playlist_songs table

let addToPlaylistPageSubmitBtn = document.querySelector(".add-song-playlist-submit-btn")
let addToPlaylistSuccessFailMessage = document.querySelector(".add-playlist-success-fail-message")

let playlistSelections = document.querySelectorAll(".add-playlist-original-btn")
let playlistAddId;

addToPlaylistPageSubmitBtn.addEventListener("click", function(){
  playlistSelections.forEach(selection => {
    if (selection.checked){
      playlistAddId = selection.value
    }
  })

  if(playlistAddId && addToPlaylistSongId){
    
    let ids = [playlistAddId, addToPlaylistSongId]

    let params = "ids=" + ids;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/add-song-playlist.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){
      addToPlaylistSuccessFailMessage.style.display = "block";
      addToPlaylistSuccessFailMessage.innerText = this.responseText;
    }

    xhr.send(params);
  }
  
})

//added^

//making ajax request to insert song into libraries table

let addToLibraryBtns = document.querySelectorAll(".add-library-btn");
let addLibrarySuccessFailMessage = document.querySelector(".add-song-library-success-fail-message")
let addToLibrarySongId;

addToLibraryBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    addToLibrarySongId = btn.firstElementChild.innerText;
    
    let params = "addLibrarySongId= " + addToLibrarySongId;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/add-song-library.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){
      addLibrarySuccessFailMessage.style.display = "block";
      addLibrarySuccessFailMessage.innerText = this.responseText;
    }

    setTimeout(hideMessage, 3000);
      
    function hideMessage(){
      addLibrarySuccessFailMessage.style.display = "none"
    }


    xhr.send(params);
  })
})

// deleting from libraries table using ajax

let deleteLibrarySongBtns = document.querySelectorAll(".delete-library-btn");
let deleteLibrarySongId;

deleteLibrarySongBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    deleteLibrarySongId = btn.firstElementChild.innerText;

    let params = "deleteLibrarySongId= " + deleteLibrarySongId;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/delete-library-song.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(params);

  })
})

//library loop and shuffle functionality

let libraryPlayIcon = document.querySelector("#library-play-icon");
let librarySongsCont = document.querySelector(".songs-cont");
let libraySongs = document.querySelectorAll(".library-song-cont")

libraryPlayIcon.addEventListener("click", startMusicLoop)

function startMusicLoop() {
  if(librarySongsCont.firstElementChild.classList.contains("library-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playSong();
  }
}

function playSong(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextSong)
  }
  else{
    currentSong = librarySongsCont.firstElementChild;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", nextSong)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function nextSong(){
  if(currentSong.classList.contains("library-song-cont")){
    currentSong = currentSong.nextElementSibling;
    playSong();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

//hiding default image and text for miniplayer and music player
libraryPlayIcon.addEventListener("click", function(){
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

let libraryShuffleIcon = document.querySelector("#library-shuffle-icon");
let libraryShuffleSongs = document.querySelectorAll(".library-song-cont");


libraryShuffleIcon.addEventListener("click", startShuffleLoop);

function startShuffleLoop() {
  if(librarySongsCont.firstElementChild.classList.contains("library-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();
    playShuffledSongs();
  }
}

function playShuffledSongs(){
  if(currentSong){
    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    musicPlayerSong.src = musicPlayerSongSrc
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleSongs)
  }
  else{
    let randomNum = Math.floor(Math.random() * libraryShuffleSongs.length)
    currentSong = libraryShuffleSongs[randomNum];
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.lastElementChild.previousElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    musicPlayerSong.addEventListener("ended", shuffleSongs)

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function shuffleSongs(){
  if(currentSong.classList.contains("library-song-cont")){
    let randomNum = Math.floor(Math.random() * libraryShuffleSongs.length)

    currentSong = libraryShuffleSongs[randomNum]

    playShuffledSongs();

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

libraryShuffleIcon.addEventListener("click", function(){
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




//music play functionality

let musicPlayerAddFavoritesBtn = document.querySelector(".music-player-heart-icon");
let musicPlayerRemoveFavoritesBtn = document.querySelector(".music-player-red-heart-icon");

musicPlayerAddFavoritesBtn.addEventListener("click", function(){
  musicPlayerAddFavoritesBtn.style.display = "none";
  musicPlayerRemoveFavoritesBtn.style.display = "block"
})

musicPlayerRemoveFavoritesBtn.addEventListener("click", function(){
  musicPlayerAddFavoritesBtn.style.display = "block";
  musicPlayerRemoveFavoritesBtn.style.display = "none"
})
