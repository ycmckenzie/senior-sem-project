<?php
  include_once "php/views/playlist-view.php";
?>

<div class="playlist-page-cont">
  <div class="library-searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon">
    <input type="text" class="searchbar" id="playlist-searchbar" placeholder="Search for Playlists">
  </div>

  <div class="create-playlist-btn-cont">
    <img src="images/svgs/plus-icon.svg" alt="plus-icon" class="create-playlist-btn" width="35px">
  </div>

  <div class="playlist-btns-cont">
    <?php displayPlaylists($playlistsInfo) ?>
  </div>

  <form class="create-new-playlist-page">
    <div class="create-new-playlist-page-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="" class="create-playlist-page-back-icon" width="30px">
    </div>
    
    <div class="new-playlist-content">
      <label for="new-playlist-input" class="create-prompt">Create new playlist: </label>
      <input type="text" name="new-playlist-input" placeholder="Playlist Name" class="create-playlist-input">
      <p class="input-error-message">Must create playlist name!</p>
      <button class="create-new-playlist-btn">Create</button>
    </div>
  </form>

  <div class="playlist-page">
    <div class="playlist-page-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow-icon" class="playlist-back-arrow-btn" width="30px">
    </div>

    <div class="playlist-page-content">

      <div class="playlist-page-default-img-cont">
        <img src="images/svgs/playlists-icon.svg" alt="" class="playlist-page-default-img">
      </div>

      <div class="playlist-page-info">
        <p class="playlist-page-name"></p>
        <?php displayUsername($username)?>
        <img src="images/svgs/elipsis-icon.svg" alt="elipsis-icon" width="35px" class="playlist-option-btn">
      </div>
    </div>

    <div class="button-cont">
      <div class="song-message">Songs</div>
      <div class="buttons">
        <img src="images/svgs/play-icon.svg" alt="play-icon" width="45px" class="play-icon" id="playlist-play-icon">
        <img src="images/svgs/shuffle-icon.svg" alt="shuffle-icon" width="35px" class="shuffle-icon" id="playlist-shuffle-icon">
      </div>
    </div>
    
    <div class="playlist-songs-cont">
      <?php displayPlaylistSongs($playlistSongs);?>
    </div>
    
  </div>
</div>

