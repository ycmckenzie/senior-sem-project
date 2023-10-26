
let createPlaylistBtn = document.querySelector(".create-playlist-btn");
let createPlaylistPage = document.querySelector(".create-new-playlist-page");

//displaying create new playlist page on button click
//hiding the navbar, header, and miniplayer

createPlaylistBtn.addEventListener("click", function(){
  createPlaylistPage.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";
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


