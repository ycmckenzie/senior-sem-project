let profileBtn = document.querySelector(".profile-icon");
let profilePageCont = document.querySelector(".profile-page-cont");

//displaying the profile page on button click
//hiding miniplayer, nav, header

profileBtn.addEventListener("click", function(){
  profilePageCont.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";
  mainCont.style.height = "100vh";
  mainCont.style.overflowY = "hidden";
})

//hiding the profile page on button click
//displaying miniplayer, nav, header

let profileBackBtn = document.querySelector('.profile-back-arrow-icon');

profileBackBtn.addEventListener("click", function(){
  profilePageCont.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  mainCont.style.height = "100%";
  mainCont.style.overflowY = "visible";
})

let favoritesBtn = document.querySelector(".favorites-btn")
let favoritesPage = document.querySelector(".favorites-page")
let favoritesPageBackBtn = document.querySelector(".favorites-page-back-btn")

favoritesBtn.addEventListener("click", function(){
  favoritesPage.style.display = "flex";
  profilePageCont.style.padding = "0px";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
})

favoritesPageBackBtn.addEventListener("click", function(){
  favoritesPage.style.display = "none";
  profilePageCont.style.padding = "0px 10px 0px 10px";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
})

let addFavoritesBtns = document.querySelectorAll(".add-favorites-btn");
let addFavoritesSongId;

addFavoritesBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    addFavoritesSongId = btn.firstElementChild.innerText

    let params = "addFavoritesId=" + addFavoritesSongId;
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/add-song-favorites.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){
      addLibrarySuccessFailMessage.style.display = "block";
      addLibrarySuccessFailMessage.innerText = this.responseText;
      console.log(this.responseText)
    }

    setTimeout(hideMessage, 3000);
      
    function hideMessage(){
      addLibrarySuccessFailMessage.style.display = "none"
    }

    xhr.send(params);

  })
})

let removeFavoritesBtns = document.querySelectorAll(".unfavorite-btn")
let removeFavoritesSongId;

removeFavoritesBtns.forEach(btn => {
  btn.addEventListener("click", function(){
    removeFavoritesSongId = btn.firstElementChild.innerText

    let params = "removeFavoritesId=" + removeFavoritesSongId;
    
    let xhr = new XMLHttpRequest();
    xhr.open('POST', 'php/ajax/delete-favorites-song.php', true);
    xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

    xhr.onload = function(){
      console.log(this.responseText)
    }

    xhr.send(params);

  })
})


let desktopProfileIcon = document.querySelector(".desktop-profile-icon");
let desktopProfileModal = document.querySelector(".desktop-profile-modal");

desktopProfileIcon.addEventListener("click", function(){
  desktopProfileModal.style.display = "flex";
})

let desktopProfileBackBtn = document.querySelector(".desktop-profile-back-arrow-icon")

desktopProfileBackBtn.addEventListener("click", function(){
  desktopProfileModal.style.display = "none";
})



let darkModeToggle = document.querySelectorAll(".dark-mode-toggle");
let toggleSlider = document.querySelector(".toggle-slider");
let desktopToggleSlider = document.querySelector(".desktop-toggle-slider")
let sectionConts = document.querySelectorAll(".section-cont");

let songNames = document.querySelectorAll(".song-name");
let searchBarConts = document.querySelectorAll(".searchbar-cont")
let searchIcons = document.querySelectorAll(".search-icon");
let searchbars = document.querySelectorAll(".searchbar");
let dmIcons = document.querySelectorAll(".dm-icon");
let dmText = document.querySelectorAll(".dm-text");
let sliders = document.querySelectorAll(".slider");
let dmPopups = document.querySelectorAll(".song-popup")
let dmPopupBtns = document.querySelectorAll(".popup-btn")
let playlistPopup = document.querySelector(".playlist-page-popup")
let profileImg = document.querySelectorAll(".profile-img")
let addSongLibraryFavoritesMessage = document.querySelector(".add-song-library-success-fail-message")
let body = document.getElementsByTagName("body")[0];
let logoutBtn = document.querySelector(".logout-btn")
let logoutIcon = document.querySelector(".logout-icon")
let columnConts = document.querySelectorAll(".library-column-label-cont")
let darkModeActive = false;
let navBtnImgs = document.querySelectorAll(".nav-btn-img")

darkModeToggle.forEach(toggle =>{
  toggle.addEventListener("click", function(){
    if(darkModeActive == false){
      darkModeActive = true
    }
    else{
      darkModeActive = false
    }

    toggleSlider.classList.toggle("toggle-slider-on");
    desktopToggleSlider.classList.toggle("toggle-slider-on")
    desktopProfileModal.classList.toggle("desktop-modal-dark-mode-active")

    if(desktopProfileModal.style.borderColor === "white"){
      desktopProfileModal.style.borderColor = "black"
    }
    else{
      desktopProfileModal.style.borderColor = "white"
    }
   
    if(body.style.backgroundColor == "black"){
      body.style.backgroundColor = "#e5e5e5";
    }
    else{
      body.style.backgroundColor = "black";
    }
  
    mainCont.classList.toggle("main-cont-dark-mode-active");
  
    sectionConts.forEach(cont=> {
      cont.classList.toggle("section-cont-dark-mode-active");
    })
  
    optionsIcons.forEach(icon => {
      icon.classList.toggle("icon-dark-mode-active")
    })
  
    songNames.forEach(songName => {
      songName.classList.toggle("text-dark-mode-active")
    })
  
    searchBarConts.forEach(cont => {
      cont.classList.toggle("searchbar-dark-mode-active")
    })
  
    searchIcons.forEach(icon => {
      icon.classList.toggle("icon-dark-mode-active")
    })
  
    searchbars.forEach(searchbar => {
      searchbar.classList.toggle("searchbar-input-dark-mode-active")
    })
  
    musicPlayer.classList.toggle("section-cont-dark-mode-active");
  
    dmIcons.forEach(icon => {
      icon.classList.toggle("icon-dark-mode-active")
    })
  
    dmText.forEach(text => {
      text.classList.toggle("text-dark-mode-active")
    })
  
    sliders.forEach(slider => {
      slider.classList.toggle("slider-dark-mode-active");
      slider.classList.toggle("slider::-webkit-slider-thumb");
    })
  
    darkModeToggle.forEach(toggle=>{
      toggle.classList.toggle("toggle-dark-mode-active");
    })
  
    toggleSlider.classList.toggle("slider-dark-mode-active");
    desktopToggleSlider.classList.toggle("slider-dark-mode-active")
  
    dmPopups.forEach(popup =>{
      popup.classList.toggle("popup-dark-mode-active")
    })
  
    dmPopupBtns.forEach(btn =>{
      btn.classList.toggle("toggle-dark-mode-active");
    })
  
    playlistPopup.classList.toggle("popup-dark-mode-active");
  
    profileImg.forEach(img => {
      img.classList.toggle("toggle-dark-mode-active");
    })

  
    addSongLibraryFavoritesMessage.classList.toggle("dm-text")
    addSongLibraryFavoritesMessage.classList.toggle("popup-dark-mode-active")
  
    logoutBtn.classList.toggle("logout-btn-dark-mode-active")
  
    logoutIcon.classList.toggle("logout-icon-dark-mode-active")

    columnConts.forEach(column => {
      if(column.style.borderColor === "white"){
        column.style.borderColor = "black"
      }
      else{
        column.style.borderColor = "white"
      }
    })
  
    mainHeader.classList.toggle("dark-mode-active");
    mainNav.classList.toggle("dark-mode-active")
    miniPlayer.classList.toggle("dark-mode-active")

    navBtnImgs.forEach(img =>{
      img.classList.toggle("icon-dark-mode-active")
    })
  })
})



