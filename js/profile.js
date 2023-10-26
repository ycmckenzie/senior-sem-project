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
