<?php
  include_once "php/views/discover-view.php";
?>

<div class="discover-page-cont section-cont">

  <div class="library-column-label-cont discover-column-label-cont">
    <div class="dm-text song-column">Song Name</div>
    <div class="dm-text artist-column">Artist</div>
    <div class="dm-text genre-column">Genre</div>
  </div>

  <div class="popular-songs-cont random-songs-cont">
    <div class="dm-text popular-songs-header">Discover New Songs</div>

    <div class="random-songs">
      <?php displayRandomSongs($randomSongs, $pdo, $userId)?>
    </div>
  </div>

  <div class="popular-songs-cont recently-added-songs-cont">
    <div class="dm-text popular-songs-header">Recently Added</div>
    
    <div class="recently-added-songs">
      <?php displayRecentSongs($recentSongs, $pdo, $userId)?>
    </div>
  </div>

  <div class="popular-songs-cont our-picks-cont">
  <div class="dm-text popular-songs-header">Our Picks</div>
    
    <div class="our-picks-songs">
      <?php displayOurPicks($ourPicks, $pdo, $userId)?>
    </div>
  </div>

</div>