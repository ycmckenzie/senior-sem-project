<?php
  include_once "php/views/profile-view.php";
?>

<div class="favorites-page-cont section-cont">
  <div class="desktop-library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon desktop-favorites-search-icon">
    <input type="text" class="searchbar" id="desktop-favorites-searchbar" placeholder="Search for favorites">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="desktop-favorites-x-btn">
  </div>

  <div class="button-cont favorites-btn-cont section-cont">
    <div class="dm-text song-message library-song-message">Songs</div>
    <div class="buttons">
      <img src="images/svgs/play-icon.svg" alt="play-icon" width="45px" class="play-icon" id="favorites-play-icon">
      <img src="images/svgs/shuffle-icon.svg" alt="shuffle-icon" width="35px" class="shuffle-icon" id="favorites-shuffle-icon">
    </div>
  </div>


  <div class="library-column-label-cont favorites-column-label-cont">
    <div class="dm-text song-column">Song Name</div>
    <div class="dm-text artist-column">Artist</div>
    <div class="dm-text genre-column">Genre</div>
    <div class="dm-text added-column favorite-added-column">Added</div>
  </div>

  <div class="dm-text desktop-favorites-no-results-message">
    No Results
  </div>

  <div class="desktop-favorites-page-songs-cont">
    <?php displayFavoriteSongs($favoriteSongs)?>
  </div>

</div>