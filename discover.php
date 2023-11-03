<?php
  include_once "php/views/discover-view.php";
?>

<div class="discover-page-cont">

  <div class="discover-btns-cont">
    <div class="discover-btn genre-discover-btn">
      <p>Genres</p>
      <img src="images/svgs/right-arrow-icon.svg" alt="right-arrow-icon">
    </div>
  </div>

  <div class="popular-songs-cont random-songs-cont">
    <div class="popular-songs-header">Discover New Songs</div>

    <div class="random-songs">
      <?php displayRandomSongs($randomSongs)?>
    </div>

  </div>

  <div class="popular-songs-cont recently-added-songs-cont">
    <div class="popular-songs-header">Recently Added</div>
    
    <div class="recently-added-songs">
      <?php displayRecentSongs($recentSongs)?>
    </div>

  </div>

</div>