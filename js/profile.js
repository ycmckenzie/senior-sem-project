let profileBtn = document.querySelector(".profile-icon");
let profilePageCont = document.querySelector(".profile-page-cont");

profileBtn.addEventListener("click", function(){
  profilePageCont.style.display = "flex";
  miniPlayer.style.display = "none";
  mainNav.style.display = "none";
  mainHeader.style.display = "none";
})
