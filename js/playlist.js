
let createPlaylistBtn = document.querySelector(".create-playlist-btn");
let createPlaylistPage = document.querySelector(".create-new-playlist-page");

//displaying create new playlist page on button click
//hiding the navbar, header, and miniplayer

createPlaylistBtn.addEventListener("click", function(){
  createPlaylistPage.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";

  playlistXBtn.style.display = "none";
  playlistSearchbar.value = "";
  playlistNoResultsMessage.style.display = "none"

  playlists.forEach(playlist => {
    playlist.style.display = "flex";
  })

})

//hiding the create playlist page on button click
//displaying the navbar, header, and miniplayer

let createPlaylistBtnClose = document.querySelector(".create-playlist-page-back-icon")

createPlaylistBtnClose.addEventListener("click", function(){
  createPlaylistPage.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";

  createPlaylistErrorMessage.style.display = "none";
  createPlaylistSuccessMessage.style.display = "none";
})

//displaying the playlist page on playlist button click
//hiding the navbar, header, and miniplayer

let playlistBtns = document.querySelectorAll(".playlist");
let playlistPage = document.querySelector(".playlist-page");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    playlistPage.style.display = "flex";
    //miniPlayer.style.display = "none";
    //mainNav.style.display = "none";
    mainHeader.style.display = "none";
  })
})


// hiding the playlist page on back arrow button click
// displying the navbar, header, and miniplayer

let playlistPageBackIcon = document.querySelector(".playlist-back-arrow-btn");

playlistPageBackIcon.addEventListener("click", function(){
    playlistPage.style.display = "none";
    //miniPlayer.style.display = "flex";
    //mainNav.style.display = "flex";
    mainHeader.style.display = "flex";
})


//ajax post form
//creating new playlist on button click

let createPlaylistForm = document.querySelector(".create-new-playlist-page");

createPlaylistForm.addEventListener("submit", createPlaylist);

let createPlaylistInput = document.querySelector(".create-playlist-input");
let createPlaylistErrorMessage = document.querySelector(".input-error-message");
let createPlaylistSuccessMessage = document.querySelector(".input-success-message");

function createPlaylist(e){
    e.preventDefault();

  if(createPlaylistInput.value == ""){
    createPlaylistErrorMessage.style.display = "block";
  }
  else{
    let playlistName = document.querySelector(".create-playlist-input").value;
    createPlaylistInput.value = "";
    createPlaylistErrorMessage.style.display = "none"
    createPlaylistSuccessMessage.style.display = "block"

    let params = "playlistName=" + playlistName;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/create-playlist.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(params);
    
  }
}

let deletePlaylistSongBtns = document.querySelectorAll(".delete-playlist-song-btn");
let deletePlaylistSongId; 
let deletePlaylistId;

deletePlaylistSongBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    deletePlaylistSongId = btn.firstElementChild.innerText;
    deletePlaylistId = btn.firstElementChild.nextElementSibling.innerText;

    let deletePlaylistIds = [deletePlaylistSongId, deletePlaylistId];

    let params = "deletePlaylistIds=" + deletePlaylistIds;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/delete-playlist-song.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(params);
  })
})

let playlistName = document.querySelector(".playlist-page-name");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    playlistName.innerText = btn.firstElementChild.nextElementSibling.innerText;
  })
})

let playlistId;
let playlistSongs = document.querySelectorAll(".playlist-song-cont");
let emptyPlaylistMessage = document.querySelector(".empty-playlist-message")
let numPlaylistSongs;

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    numPlaylistSongs = 0;
    playlistId = btn.lastElementChild.innerText;

    playlistSongs.forEach(song => {
      let songPlaylistId = song.lastElementChild.previousElementSibling.previousElementSibling.innerText;

      if(playlistId == songPlaylistId){
        song.style.display = "flex";
        numPlaylistSongs++;
      }
      else{
        song.style.display = "none";
      }
    })

    if(numPlaylistSongs <= 0){
      emptyPlaylistMessage.style.display = "block";
    }
    else{
      emptyPlaylistMessage.style.display = "none";
    }

  })
})

let deletePlaylistBtnId = document.querySelector(".delete-playlist-btn-id");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    deletePlaylistBtnId.innerText = btn.lastElementChild.innerText;
  })
})

let deletePlaylistBtn = document.querySelector(".delete-playlist-btn");

deletePlaylistBtn.addEventListener("click", function(){
  let deletePlaylistId = deletePlaylistBtnId.innerText;

  let params = "deletePlaylistId=" + deletePlaylistId;

  let xhr = new XMLHttpRequest();
  xhr.open('POST', 'php/ajax/delete-playlist.php', true);
  xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");


  xhr.send(params);

  playlistPage.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
})

let playlistSearchbar = document.querySelector("#playlist-searchbar");
let playlistXBtn = document.querySelector("#playlist-x-btn");
let playlists = document.querySelectorAll(".playlist");
let playlistSearchbarValue;
let playlistNoResultsMessage = document.querySelector(".playlist-no-results-message")
let numPlaylistResults;

playlistSearchbar.addEventListener("keyup", function(){
  playlistSearchbarValue = (playlistSearchbar.value).toLowerCase().trim();
  numPlaylistResults = 0;

  playlists.forEach(playlist => {
    let playlistName = (playlist.firstElementChild.nextElementSibling.innerText).toLowerCase();
      
    if(playlistName.includes(playlistSearchbarValue)){
      playlist.style.display = "flex";
      numPlaylistResults++;
    }
    else{
      playlist.style.display = "none";
    }
  })

    if(playlistSearchbarValue.length <= 0){
      playlistXBtn.style.display = "none";
      playlistNoResultsMessage.style.display = "none";
    }
    else{
      playlistXBtn.style.display = "block";
    }

  if(numPlaylistResults == 0){
    playlistNoResultsMessage.style.display = "block";
  }
  else{
    playlistNoResultsMessage.style.display = "none";
  }

})


playlistXBtn.addEventListener("click", function(){
  playlistXBtn.style.display = "none";
  playlistSearchbar.value = "";
  playlistNoResultsMessage.style.display = "none"

  playlists.forEach(playlist => {
    playlist.style.display = "flex";
  })
})

//desktop playlist search functionality

let desktopPlaylistSearchbar = document.querySelector("#desktop-playlist-searchbar");
let desktopPlaylistXBtn = document.querySelector("#desktop-playlist-x-btn");
let desktopPlaylistSearchbarValue;
let numDesktopPlaylistResults;

desktopPlaylistSearchbar.addEventListener("keyup", function(){
  desktopPlaylistSearchbarValue = (desktopPlaylistSearchbar.value).toLowerCase().trim();
  numDesktopPlaylistResults = 0;

  playlists.forEach(playlist => {
    let playlistName = (playlist.firstElementChild.nextElementSibling.innerText).toLowerCase();
      
    if(playlistName.includes(desktopPlaylistSearchbarValue)){
      playlist.style.display = "flex";
      numDesktopPlaylistResults++;
    }
    else{
      playlist.style.display = "none";
    }
  })

    if(desktopPlaylistSearchbarValue.length <= 0){
      desktopPlaylistXBtn.style.display = "none";
      playlistNoResultsMessage.style.display = "none";
    }
    else{
      desktopPlaylistXBtn.style.display = "block";
    }

  if(numDesktopPlaylistResults == 0){
    playlistNoResultsMessage.style.display = "block";
  }
  else{
    playlistNoResultsMessage.style.display = "none";
  }

})

desktopPlaylistXBtn.addEventListener("click", function(){
  desktopPlaylistXBtn.style.display = "none";
  desktopPlaylistSearchbar.value = "";
  playlistNoResultsMessage.style.display = "none"

  playlists.forEach(playlist => {
    playlist.style.display = "flex";
  })
})


//hiding/displaying playlist popup

let playlistOptionBtn = document.querySelector(".playlist-option-btn");
let playlistPagePopup = document.querySelector(".playlist-page-popup");

playlistOptionBtn.addEventListener("click", function(){
  playlistPagePopup.style.display = "block";
})

//playlist loop

let playlistPlayIcon = document.querySelector("#playlist-play-icon");
let playlistSongsCont = document.querySelector(".playlist-songs-cont");
let currentPlaylistSongs = [];

playlistPlayIcon.addEventListener("click", startPlaylistMusicLoop);

function startPlaylistMusicLoop() {
  if(playlistSongsCont.firstElementChild.classList.contains("playlist-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();

    let allPlaylistSongs = document.querySelectorAll(".playlist-song-cont")
    
    for(let i = 0; i < allPlaylistSongs.length; i++){
      if(allPlaylistSongs[i].style.display == "flex"){
        currentPlaylistSongs.push(allPlaylistSongs[i])
      }
    }

    playPlaylistSong(currentPlaylistSongs, 0);

    currentPlaylistSongs = [];
  }
  console.log("hey")
}

function playPlaylistSong(currentPlaylistSongs, currIndex){
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
    musicPlayerSong.addEventListener("ended", function(){
      nextPlaylistSong(currentPlaylistSongs, currIndex)
    })
  }
  else{
    currentSong = currentPlaylistSongs[0];
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    
    musicPlayerSong.addEventListener("ended", function(){
      nextPlaylistSong(currentPlaylistSongs, currIndex)
    })

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function nextPlaylistSong(currentPlaylistSongs, currIndex){
  if(currentSong.classList.contains("playlist-song-cont")){
    let newIndex = currIndex + 1;
    currentSong = currentPlaylistSongs[newIndex];
    playPlaylistSong(currentPlaylistSongs, newIndex);

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

playlistPlayIcon.addEventListener("click", function(){
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


//playlist shuffle

let playlistShuffleIcon = document.querySelector("#playlist-shuffle-icon");

playlistShuffleIcon.addEventListener("click", startPlaylistShuffleLoop);

function startPlaylistShuffleLoop() {
  if(playlistSongsCont.firstElementChild.classList.contains("playlist-song-cont")){
    currentSong = false;
    musicPlayerSong.pause();

    let allPlaylistSongs = document.querySelectorAll(".playlist-song-cont")
    
    for(let i = 0; i < allPlaylistSongs.length; i++){
      if(allPlaylistSongs[i].style.display == "flex"){
        currentPlaylistSongs.push(allPlaylistSongs[i])
      }
    }

    playShuffledPlaylistSong(currentPlaylistSongs);

    currentPlaylistSongs = [];
  }
  console.log("start")
}

function playShuffledPlaylistSong(currentPlaylistSongs){
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
    musicPlayerSong.addEventListener("ended", function(){
      nextShuffledPlaylistSong(currentPlaylistSongs)
    })
  }
  else{
    let ranNum = Math.floor(Math.random() * currentPlaylistSongs.length)
    currentSong = currentPlaylistSongs[ranNum];
    miniPlayerImg.src = currentSong.firstElementChild.src;
    musicPlayerImg.src = currentSong.firstElementChild.src;
    miniPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    musicPlayerSongName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText
    miniPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText
    musicPlayerArtistName.innerText = currentSong.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText

    let musicPlayerSongSrc = currentSong.lastElementChild.src;
    musicPlayerSong.src = musicPlayerSongSrc;
    musicPlayerSong.play();
    
    musicPlayerSong.addEventListener("ended", function(){
      nextShuffledPlaylistSong(currentPlaylistSongs)
    })

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

function nextShuffledPlaylistSong(currentPlaylistSongs){
  if(currentSong.classList.contains("playlist-song-cont")){
    let ranNum = Math.floor(Math.random() * currentPlaylistSongs.length)
    currentSong = currentPlaylistSongs[ranNum];
    playShuffledPlaylistSong(currentPlaylistSongs);

    musicPlayerPause.style.display = "block";
    musicPlayerPlay.style.display = "none";

    miniPlayerPauseBtn.style.display = "block";
    miniPlayerPlayBtn.style.display = "none";
  }
}

playlistShuffleIcon.addEventListener("click", function(){
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
