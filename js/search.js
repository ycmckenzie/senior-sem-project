let genreBtns = document.querySelectorAll(".genre-btn");
let displayGenreSongsPage = document.querySelector(".display-genre-songs-page");
let genreSongsHeaderText = document.querySelector(".display-genre-songs-header-text");

//displaying the displayGenreSongsPage on button click
//hiding the header, mainnav, and miniplayer

genreBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    displayGenreSongsPage.style.display = "flex";
    miniPlayer.style.display = "none";
    mainNav.style.display = "none";
    mainHeader.style.display = "none";
    mainCont.style.height = "100vh";
    mainCont.style.overflowY = "hidden";

    genreSongsHeaderText.innerText = btn.lastElementChild.innerText + " Songs";
  })
})

//hiding the displayGenreSongsPage on button click
//displaying the header, mainnav, and miniplayer

let displayGenreSongsPageBackBtn = document.querySelector(".display-genre-songs-back-btn");

displayGenreSongsPageBackBtn.addEventListener("click", function(){
  displayGenreSongsPage.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  mainCont.style.height = "100%";
  mainCont.style.overflowY = "visible";
})

//specifiying which songs to display based on what genere button is clicked

let currentGenre;
let genreSongs = document.querySelectorAll(".genre-song-cont");

genreBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    currentGenre = btn.firstElementChild.innerText;

    genreSongs.forEach(song => {
      if (song.firstElementChild.innerText == currentGenre){
        song.style.display = "flex";
      }
      else{
        song.style.display = "none";
      }
    })
  })
})







