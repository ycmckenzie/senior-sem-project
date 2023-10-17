let profileBtn = document.querySelector(".profile-icon");
let profilePageCont = document.querySelector(".profile-page-cont");

profileBtn.addEventListener("click", function(){
  profilePageCont.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";
  mainCont.style.height = "100vh";
  mainCont.style.overflowY = "hidden";
})

let profileBackBtn = document.querySelector('.profile-back-arrow-icon');

profileBackBtn.addEventListener("click", function(){
  profilePageCont.style.display = "none";
  miniPlayer.style.display = "flex";
  mainNav.style.display = "flex";
  mainHeader.style.display = "flex";
  mainCont.style.height = "100%";
  mainCont.style.overflowY = "visible";
})
