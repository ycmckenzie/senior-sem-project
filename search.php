<?php
  include_once "php/views/search-view.php";
?>

<div class="search-page-cont section-cont">
  <div class="search-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon">
    <input type="text" class="searchbar" id="search-searchbar" placeholder="Search for Songs">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="search-x-btn">
  </div>

  <div class="desktop-library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon desktop-playlist-search-icon">
    <input type="text" class="searchbar" id="desktop-search-searchbar" placeholder="Search for Songs">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="desktop-search-x-btn">
  </div>

  <div class="genre-cont">
    <div class="genre-btn pop-genre-btn">
      <p class="btn-text">Pop</p>
    </div>
    <div class="genre-btn hip-hop-genre-btn">
      <p class="btn-text">Hip-Hop</p>
    </div>
    <div class="genre-btn rnb-genre-btn">
      <p class="genre-spec">RnB</p>
      <p class="btn-text">R&B</p>
    </div>
    <div class="genre-btn country-genre-btn">
      <p class="btn-text">Country</p>
    </div>
    <div class="genre-btn rock-genre-btn">
      <p class="btn-text">Rock</p>
    </div>
    <div class="genre-btn indie-genre-btn">
      <p class="btn-text">Indie</p>
    </div>
  </div>

  <div class="library-column-label-cont search-column-label-cont">
    <div class="dm-text song-column">Song Name</div>
    <div class="dm-text artist-column">Artist</div>
    <div class="dm-text genre-column">Genre</div>
  </div>

  <div class="search-songs-cont">
    <?php displaySearchSongs($genreSongs, $pdo, $userId);?>
  </div>

  <div class="dm-text search-no-results-message">No Results</div>

  <div class="section-cont display-genre-songs-page close-section">
    <div class="display-genre-songs-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow" class="dm-icon display-genre-songs-back-btn" width="30px">
      <p class="dm-text display-genre-songs-header-text"></p>
    </div>

    <div class="genre-songs-cont">
        <?php displayGenreSongs($genreSongs, $pdo, $userId);?>
    </div>

  </div>

</div>
