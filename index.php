<?php
    require_once "php/conn.php";
    require_once "php/session-config.php";

    if (!isset($_SESSION["userId"])){
      header("Location: login.php");
    }
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/main.css">
  <link rel="stylesheet" href="css/playlist.css">
  <link rel="stylesheet" href="css/discover.css">
  <link rel="stylesheet" href="css/search.css">
  <link rel="stylesheet" href="css/profile.css">
  <link rel="stylesheet" href="css/responsive.css">

  <title>Tuni</title>
</head>
<body>
  <div class="main-cont">

    <?php
      include_once "components/header.php";
      
      include_once "library.php";
      include_once "playlist.php";
      include_once "favorites.php";
      include_once "discover.php";
      include_once "search.php";
      include_once "profile.php";
    ?>
    
    <div class="music-player">
      <div class="music-player-header">
        <img src="images/svgs/down-arrow-icon.svg" alt="down-arrow-icon" class="dm-icon music-player-downarrow-icon" width="30px">
        <!-- <img src="images/svgs/elipsis-icon.svg" alt="elipsis-icon" class="music-player-elipsis-icon" width="30px"> -->
      </div>

      <div class="music-player-img-cont">
        <img src="" alt="music-player-img" class="music-player-img">
      </div>

      <div class="music-player-default-img-cont">
        <img src="images/svgs/playlists-icon.svg" alt="" class="music-player-default-img">
      </div>

      <div class="desktop-content-cont">
        <div class="music-player-content">
          <div class="music-player-song-info">
            <p class="dm-text music-player-song-name"></p>
            <p class="music-player-artist-name"></p>
          </div>
          <div class="dm-text music-player-default-message">
            Not Playing
          </div>
          <div class="heart-icon-cont">
            <img src="images/svgs/heart-icon.svg" alt="heart-icon" class="dm-icon music-player-heart-icon modify-favorites-btn">
            <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="music-player-red-heart-icon modify-favorites-btn" width="30px">
          </div>
        </div>

        <div class="music-player-controls">
          <input type="range" class="song-slider">
          <div class="music-player-btns">
            <img src="images/svgs/skip-icon.svg" alt="back-icon" class="dm-icon music-player-back-icon" width="50px">
            <div class="pause-start-cont">
              <img src="images/svgs/pause-icon.svg" alt="pause-icon" class="dm-icon music-player-pause-icon" width="65px">
              <img src="images/svgs/start-icon.svg" alt="start-icon" class="dm-icon music-player-play-icon" width="60px">
            </div>
            <img src="images/svgs/skip-icon.svg" alt="skip-icon" class="dm-icon music-player-skip-icon" width="50px">
          </div>
        </div>

        <audio src="" class="music-player-song"></audio>
    
        <div class="volume-cont">
          <img src="images/svgs/volume-off-icon.svg" alt="" width="25px" class="song-volume-icon">
          <input type="range" class="song-volume" min="0" max="1" step=".01">
          <img src="images/svgs/volume-on-icon.svg" alt="" width ="25px" class="song-volume-icon">
        </div>
      </div>

    </div>

    <div class="section-cont add-song-to-playlist-page">
      <div class="add-song-to-playlist-page-header">
        <img src="images/svgs/back-arrow-icon.svg" alt="down-arrow-icon" class="dm-icon add-song-playlist-page-back-arrow" width="30px">
      </div>
      <div class="dm-text add-song-to-playlist-page-message">
        Choose a playlist:
      </div>
      <div class="add-playlists-cont">
        <?php displaySelectionPlaylists($playlistsInfo) ?>
      </div>

      <div class="dm-text add-playlist-success-fail-message"></div>

      <div class="add-song-playlist-submit-btn-cont">
        <button class="dm-text add-song-playlist-submit-btn">Add to playlist</button>
      </div>

    </div>

    <div class="desktop-profile-modal">
      <div class="profile-page-header desktop-profile-page-header">
        <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow-icon" class="dm-icon desktop-profile-back-arrow-icon" width="30px">
        <p class="dm-text profile-header-title">Profile</p>
      </div>

      <div class="profile-img-cont desktop-profile-img-cont">
        <div class="profile-img">
          <img src="images/svgs/profile-icon-two.svg" alt="" class="profile-icon-img dm-icon">
        </div>
      </div>

      <div class="profile-content desktop-profile-content">
        <?php displayUserInfo($userInfo, $joinedDate);?>
      </div>

      <div class="dark-mode-toggle-cont">
        <p class="dm-text dark-mode-message">Dark Mode</p>
        <div class="dark-mode-toggle">
          <div class="toggle-slider desktop-toggle-slider"></div>
          <div class="dm-text off">Off</div>
          <p class="dm-text on">On</p>
        </div>
      </div>

      <form action="php/logout.php" method="POST" class="logout-btn-cont desktop-logout-btn-cont">
        <button class="logout-btn">
          <img src="images/svgs/logout-icon.svg" alt="" width="20px" class="logout-icon">
          Log out
        </button>
      </form>
    </div>

    <div class="dm-text add-song-library-success-fail-message"></div>

    <?php
      include_once "components/mini-player.php";
      include_once "components/nav.php";
    ?>
    
  </div>
  <script src="js/main.js"></script>
  <script src="js/playlist.js"></script>
  <script src="js/search.js"></script>
  <script src="js/profile.js"></script>
  <script src="js/favorites.js"></script>
</body>
</html>