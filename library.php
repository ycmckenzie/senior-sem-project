<?php
  include_once "php/views/library-view.php";
?>

<div class="library-cont section-cont">    
  <div class="library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon">
    <input type="text" class="searchbar" id="library-searchbar" placeholder="Search for Songs">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="library-x-btn">
  </div>

  <div class="desktop-library-searchbar-cont searchbar-cont">
    <img src="images/svgs/search-icon.svg" alt="search-icon" width="20px" class="search-icon desktop-search-icon">
    <input type="text" class="searchbar" id="desktop-library-searchbar" placeholder="Search for Songs">
    <img src="images/svgs/x-icon.svg" alt="x" class="dm-icon searchbar-x-btn" id="desktop-library-x-btn">
  </div>

  <div class="button-cont library-btn-cont section-cont">
    <div class="dm-text song-message library-song-message">Songs</div>
    <div class="buttons">
      <img src="images/svgs/play-icon.svg" alt="play-icon" width="45px" class="play-icon" id="library-play-icon">
      <img src="images/svgs/shuffle-icon.svg" alt="shuffle-icon" width="35px" class="shuffle-icon" id="library-shuffle-icon">
    </div>
  </div>

  <div class="library-column-label-cont">
    <div class="dm-text song-column">Song Name</div>
    <div class="dm-text artist-column">Artist</div>
    <div class="dm-text genre-column">Genre</div>
    <div class="dm-text added-column">Added</div>
  </div>


  <div class="dm-text library-no-results-message">
    No Results
  </div>

  <div class="songs-cont">
    <?php displayLibrarySongs($songs, $pdo, $userId)?>
  </div> 

</div>
