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

  <title>Tuni</title>
</head>
<body>
  <div class="main-cont">

    <?php
      include_once "components/header.php";
    ?>

    <?php
      include_once "library.php";
      include_once "playlist.php";
      include_once "discover.php";
      include_once "search.php";
      include_once "profile.php";
    ?>
    
    <div class="music-player">
      <div class="music-player-header">
        <img src="images/svgs/down-arrow-icon.svg" alt="down-arrow-icon" class="music-player-downarrow-icon" width="30px">
        <!-- <img src="images/svgs/elipsis-icon.svg" alt="elipsis-icon" class="music-player-elipsis-icon" width="30px"> -->
      </div>

      <div class="music-player-img-cont">
        <img src="images/imgs/views.jpeg" alt="music-player-img" class="music-player-img">
      </div>

      <div class="music-player-default-img-cont">
        <img src="images/svgs/playlists-icon.svg" alt="" class="music-player-default-img">
      </div>

      <div class="music-player-content">
        <div class="music-player-song-info">
          <p class="music-player-song-name">Feel No Ways</p>
          <p class="music-player-artist-name">Drake</p>
        </div>
        <div class="music-player-default-message">
          Not Playing
        </div>
        <img src="images/svgs/heart-icon.svg" alt="heart-icon" class="music-player-heart-icon">
      </div>

      <div class="music-player-controls">
        <input type="range" class="song-slider">
        <div class="music-player-btns">
          <img src="images/svgs/skip-icon.svg" alt="back-icon" class="music-player-back-icon" width="50px">
          <div class="pause-start-cont">
            <img src="images/svgs/pause-icon.svg" alt="pause-icon" class="music-player-pause-icon" width="65px">
            <img src="images/svgs/start-icon.svg" alt="start-icon" class="music-player-play-icon" width="60px">
          </div>
          <img src="images/svgs/skip-icon.svg" alt="skip-icon" class="music-player-skip-icon" width="50px">
        </div>
      </div>

      <audio src="" class="music-player-song"></audio>
  
      <div class="volume-cont">
        <img src="images/svgs/volume-off-icon.svg" alt="" width="25px" class="song-volume-icon">
        <input type="range" class="song-volume" min="0" max="1" step=".01">
        <img src="images/svgs/volume-on-icon.svg" alt="" width ="25px" class="song-volume-icon">
      </div>

    </div>

    <div class="add-song-to-playlist-page">
      <div class="add-song-to-playlist-page-header">
        <img src="images/svgs/back-arrow-icon.svg" alt="down-arrow-icon" class="add-song-playlist-page-back-arrow" width="30px">
      </div>
      <div class="add-song-to-playlist-page-message">
        Choose a playlist:
      </div>
      <div class="add-playlists-cont">
        <?php displaySelectionPlaylists($playlistsInfo) ?>
      </div>

      <div class="add-playlist-success-fail-message"></div>

      <div class="add-song-playlist-submit-btn-cont">
        <button class="add-song-playlist-submit-btn">Add to playlist</button>
      </div>

    </div>

    <div class="add-song-library-success-fail-message">hey</div>

    <?php
      include_once "components/mini-player.php";
      include_once "components/nav.php";
    ?>
    
  </div>
  <script src="js/main.js"></script>
  <script src="js/playlist.js"></script>
  <script src="js/search.js"></script>
  <script src="js/profile.js"></script>
</body>
</html>