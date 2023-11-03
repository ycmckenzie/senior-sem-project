
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
})

//displaying the playlist page on playlist button click
//hiding the navbar, header, and miniplayer

let playlistBtns = document.querySelectorAll(".playlist");
let playlistPage = document.querySelector(".playlist-page");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    playlistPage.style.display = "flex";
    miniPlayer.style.display = "none";
    mainNav.style.display = "none";
    mainHeader.style.display = "none";
  })
})

// hiding the playlist page on back arrow button click
// displying the navbar, header, and miniplayer

let playlistPageBackIcon = document.querySelector(".playlist-back-arrow-btn");

playlistPageBackIcon.addEventListener("click", function(){
    playlistPage.style.display = "none";
    miniPlayer.style.display = "flex";
    mainNav.style.display = "flex";
    mainHeader.style.display = "flex";
})


//ajax post form
//creating new playlist on button click

let createPlaylistForm = document.querySelector(".create-new-playlist-page");

createPlaylistForm.addEventListener("submit", createPlaylist);

let createPlaylistInput = document.querySelector(".create-playlist-input");
let createPlaylistErrorMessage = document.querySelector(".input-error-message");

function createPlaylist(e){
    e.preventDefault();

  if(createPlaylistInput.value == ""){
    createPlaylistErrorMessage.style.display = "block";
  }
  else{
    let playlistName = document.querySelector(".create-playlist-input").value;
    createPlaylistInput.value = "";
    createPlaylistErrorMessage.style.display = "none";

    let params = "playlistName=" + playlistName;

    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/create-playlist.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.send(params);
    
  }
}

let playlistName = document.querySelector(".playlist-page-name");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    playlistName.innerText = btn.firstElementChild.nextElementSibling.innerText;
  })
})

let playlistId;
let playlistSongs = document.querySelectorAll(".playlist-song-cont");

playlistBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    playlistId = btn.lastElementChild.innerText;

    playlistSongs.forEach(song => {
      let songPlaylistId = song.lastElementChild.previousElementSibling.innerText;

      if(playlistId == songPlaylistId){
        song.style.display = "flex";
      }
      else{
        song.style.display = "none";
      }
    })

  })
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

