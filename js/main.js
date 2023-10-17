let mainCont = document.querySelector(".main-cont");

let miniPlayer = document.querySelector(".mini-player");
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

miniPlayer.addEventListener("click", function(){
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

