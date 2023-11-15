<?php
  include_once "php/views/profile-view.php";
?>

<div class="section-cont profile-page-cont">
  <div class="profile-page-header">
    <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow-icon" class="dm-icon profile-back-arrow-icon" width="30px">
    <p class="dm-text profile-header-title">Profile</p>
  </div>

  <div class="profile-img-cont">
    <div class="profile-img"></div>
  </div>

  <div class="profile-content">
    <?php displayUserInfo($userInfo, $joinedDate);?>
  </div>

  <div class="dark-mode-toggle-cont">
    <p class="dm-text dark-mode-message">Dark Mode</p>
    <div class="dark-mode-toggle">
      <div class="toggle-slider"></div>
      <div class="dm-text off">Off</div>
      <p class="dm-text on">On</p>
    </div>
  </div>

  <div class="favorites-btn">
    <div class="favorites-btn-content">
      <p class="dm-text favorites-text">Favorites</p>
      <img src="images/svgs/heart-icon.svg" alt="heart" class="dm-icon" width ="20px">
    </div>
    <img src="images/svgs/right-arrow-icon.svg" alt="" class="dm-icon" width="30px">
  </div>

  <div class="favorites-page section-cont">
    <div class="favorites-page-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="" width="30px" class="dm-icon favorites-page-back-btn">
      <p class="dm-text favorites-page-title">Favorites</p>
    </div>

    <div class="favorites-page-songs-cont">
      <?php displayFavoriteSongs($favoriteSongs)?>
    </div>
  </div>

  <form action="php/logout.php" method="POST" class="logout-btn-cont">
    <button class="logout-btn">
      <img src="images/svgs/logout-icon.svg" alt="" width="20px" class="logout-icon">
      Log out
    </button>
  </form>


</div>