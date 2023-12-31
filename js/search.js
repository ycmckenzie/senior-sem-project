let genreBtns = document.querySelectorAll(".genre-btn");
let displayGenreSongsPage = document.querySelector(".display-genre-songs-page");
let genreSongsHeaderText = document.querySelector(".display-genre-songs-header-text");

//displaying the displayGenreSongsPage on button click
//hiding the header, mainnav, and miniplayer

genreBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    displayGenreSongsPage.style.display = "flex";
    //miniPlayer.style.display = "none";
    //mainNav.style.display = "none";
    mainHeader.style.display = "none";
    //mainCont.style.height = "100vh";
    //mainCont.style.overflowY = "hidden";

    genreSongsHeaderText.innerText = btn.lastElementChild.innerText + " Songs";
  })
})

//hiding the displayGenreSongsPage on button click
//displaying the header, mainnav, and miniplayer

let displayGenreSongsPageBackBtn = document.querySelector(".display-genre-songs-back-btn");

displayGenreSongsPageBackBtn.addEventListener("click", function(){
  displayGenreSongsPage.style.display = "none";
  //miniPlayer.style.display = "flex";
  //mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  //mainCont.style.height = "100%";
  //mainCont.style.overflowY = "visible";
})

//specifiying which songs to display based on what genere button is clicked

let currentGenre;
let genreSongs = document.querySelectorAll(".genre-song-cont");

genreBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    currentGenre = btn.firstElementChild.innerText;

    genreSongs.forEach(song => {
      if (song.lastElementChild.previousElementSibling.previousElementSibling.innerText == currentGenre){
        song.style.display = "flex";
      }
      else{
        song.style.display = "none";
      }
    })
  })
})

//hide genre buttons, display songs on key up click

let searchSearchbar = document.querySelector("#search-searchbar");
let searchXBtn = document.querySelector("#search-x-btn");
let genreBtnCont = document.querySelector(".genre-cont");
let searchSongCont = document.querySelector(".search-songs-cont");
let searchSongs = document.querySelectorAll(".search-song-cont");
let searchSearchbarValue;
let searchNoResultsMessage = document.querySelector(".search-no-results-message")
let numResults;

searchSearchbar.addEventListener("keyup", function(){
  searchSearchbarValue = (searchSearchbar.value).toLowerCase().trim();
  numResults = 0;
  searchSongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText).toLowerCase();
    let songGenre = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText).toLowerCase();

    if(songName.includes(searchSearchbarValue) || songArtist.includes(searchSearchbarValue) || songGenre.includes(searchSearchbarValue)){
      song.style.display = "flex";
      numResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(searchSearchbarValue.length <= 0){
      searchXBtn.style.display = "none";
      genreBtnCont.style.display = "flex";
      searchSongCont.style.display = "none";
      searchNoResultsMessage.style.display = "none";
    }
    else{
      searchXBtn.style.display = "block";
      genreBtnCont.style.display = "none";
      searchSongCont.style.display = "flex";
    }

  if(numResults == 0){
    searchNoResultsMessage.style.display = "block";
  }
  else{
    searchNoResultsMessage.style.display = "none";
  }

})

searchXBtn.addEventListener("click", function(){
  searchXBtn.style.display = "none";
  genreBtnCont.style.display = "flex";
  searchSongCont.style.display = "none";
  searchSearchbar.value = "";
  searchNoResultsMessage.style.display = "none"
})


//desktop search bar functionality

let desktopSearchSearchbar = document.querySelector("#desktop-search-searchbar");
let desktopSearchXBtn = document.querySelector("#desktop-search-x-btn");
let desktopSearchSearchbarValue;
let numDesktopSearchResults;
let searchColumns = document.querySelector(".search-column-label-cont")

desktopSearchSearchbar.addEventListener("keyup", function(){
  desktopSearchSearchbarValue = (desktopSearchSearchbar.value).toLowerCase().trim();
  numDesktopSearchResults = 0;
  searchSongs.forEach(song => {
    let songName = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.innerText).toLowerCase();
    let songArtist = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.innerText).toLowerCase();
    let songGenre = (song.firstElementChild.nextElementSibling.nextElementSibling.firstElementChild.nextElementSibling.nextElementSibling.innerText).toLowerCase();

    if(songName.includes(desktopSearchSearchbarValue) || songArtist.includes(desktopSearchSearchbarValue) || songGenre.includes(desktopSearchSearchbarValue)){
      song.style.display = "flex";
      numDesktopSearchResults++;
    }
    else{
      song.style.display = "none";
    }
  })

    if(desktopSearchSearchbarValue.length <= 0){
      desktopSearchXBtn.style.display = "none";
      genreBtnCont.style.display = "flex";
      searchSongCont.style.display = "none";
      searchNoResultsMessage.style.display = "none";
      searchColumns.style.display = "none";
    }
    else{
      desktopSearchXBtn.style.display = "block";
      genreBtnCont.style.display = "none";
      searchSongCont.style.display = "flex";
      searchColumns.style.display = "flex";
    }

  if(numDesktopSearchResults == 0){
    searchNoResultsMessage.style.display = "block";
  }
  else{
    searchNoResultsMessage.style.display = "none";
  }

})

desktopSearchXBtn.addEventListener("click", function(){
  desktopSearchXBtn.style.display = "none";
  genreBtnCont.style.display = "flex";
  searchSongCont.style.display = "none";
  desktopSearchSearchbar.value = "";
  searchNoResultsMessage.style.display = "none";
  searchColumns.style.display = "none";
})











