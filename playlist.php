<?php
  include_once "php/views/playlist-view.php";
?>

<div class="playlist-page-cont section-cont">
  <div class="library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon">
    <input type="text" class="searchbar" id="playlist-searchbar" placeholder="Search for Playlists">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="playlist-x-btn">
  </div>

  <div class="desktop-library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon desktop-playlist-search-icon">
    <input type="text" class="searchbar" id="desktop-playlist-searchbar" placeholder="Search for Playlists">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="desktop-playlist-x-btn">
  </div>

  <div class="create-playlist-btn-cont">
    <img src="images/svgs/plus-icon.svg" alt="plus-icon" class="dm-icon create-playlist-btn" width="35px">
  </div>

  <div class="playlist-btns-cont">
    <?php displayPlaylists($playlistsInfo); ?>
  </div>

  <div class="dm-text playlist-no-results-message">
    No Results
  </div>

  <form class="create-new-playlist-page section-cont">
    <div class="create-new-playlist-page-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="" class="dm-icon create-playlist-page-back-icon" width="30px">
    </div>
    
    <div class="new-playlist-content">
      <label for="new-playlist-input" class="create-prompt dm-text">Create new playlist: </label>
      <input type="text" name="new-playlist-input" placeholder="Playlist Name" class="searchbar create-playlist-input">
      <p class="input-error-message dm-text">Must create playlist name!</p>
      <button class="create-new-playlist-btn">Create</button>
    </div>
  </form>

  <div class="playlist-page section-cont close-section">
    <div class="playlist-page-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow-icon" class="dm-icon playlist-back-arrow-btn" width="30px">
    </div>

    <div class="playlist-page-content">

      <div class="playlist-page-default-img-cont">
        <img src="images/svgs/playlists-icon.svg" alt="" class="playlist-page-default-img">
      </div>

      <div class="playlist-page-info">
        <p class="dm-text playlist-page-name"></p>
        <?php displayUsername($username)?>
        <img src="images/svgs/elipsis-icon.svg" alt="elipsis-icon" width="35px" class="playlist-option-btn dm-icon">

        <div class="playlist-page-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="delete-cont popup-btn delete-playlist-btn">
              <div class="delete-playlist-btn-id"></div>
              <img class="dm-icon" src="images/svgs/trash-icon.svg" alt="" width="20px">
              <p class="dm-text">Delete playlist</p>
            </div>
        </div>

      </div>
    </div>

    <div class="button-cont playlist-button-cont">
      <div class="song-message dm-text">Songs</div>
      <div class="buttons playlist-pause-shuffle-btn-cont">
        <img src="images/svgs/play-icon.svg" alt="play-icon" width="45px" class="play-icon" id="playlist-play-icon">
        <img src="images/svgs/shuffle-icon.svg" alt="shuffle-icon" width="35px" class="shuffle-icon" id="playlist-shuffle-icon">
      </div>
    </div>

    <div class="library-column-label-cont playlist-column-label-cont">
      <div class="dm-text song-column">Song Name</div>
      <div class="dm-text artist-column">Artist</div>
      <div class="dm-text genre-column">Genre</div>
    </div>
    
    <div class="playlist-songs-cont">
      <?php displayPlaylistSongs($playlistSongs, $pdo, $userId);?>
      <div class="dm-text empty-playlist-message">Playlist is empty</div>
    </div>
    
  </div>
</div>

