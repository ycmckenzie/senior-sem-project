<?php
  include_once "php/views/profile-view.php";
?>

<div class="profile-page-cont">
  <div class="profile-page-header">
    <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow-icon" class="profile-back-arrow-icon" width="30px">
    <p class="profile-header-title">Profile</p>
  </div>

  <div class="profile-img-cont">
    <div class="profile-img"></div>
  </div>

  <div class="profile-content">
    <?php displayUserInfo($userInfo, $joinedDate);?>
  </div>

  <form action="php/logout.php" method="POST" class="logout-btn-cont">
    <button class="logout-btn">Log out</button>
  </form>
</div>