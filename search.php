<?php
  include_once "php/views/search-view.php";
?>

<div class="search-page-cont">
  <div class="library-searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon">
    <input type="text" class="searchbar" id="search-searchbar" placeholder="Search for Songs">
  </div>

  <div class="genre-cont">
    <div class="genre-btn pop-genre-btn">
      <p class="btn-text">Pop</p>
    </div>
    <div class="genre-btn hip-hop-genre-btn">
      <p class="btn-text">Hip-Hop</p>
    </div>
    <div class="genre-btn rnb-genre-btn">
      <p class="genre-spec">RandB</p>
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
    <div class="genre-btn coming-genre-btn">
      <p class="btn-text">Coming Soon...</p>
    </div>
    <div class="genre-btn coming-genre-btn">
      <p class="btn-text">Coming Soon...</p>
    </div>
  </div>

  <div class="display-genre-songs-page">
    <div class="display-genre-songs-header">
      <img src="images/svgs/back-arrow-icon.svg" alt="back-arrow" class="display-genre-songs-back-btn" width="30px">
      <p class="display-genre-songs-header-text"></p>
    </div>

    <div class="genre-songs-cont">
        <?php displayGenreSongs($genreSongs);?>
    </div>

  </div>

</div>
