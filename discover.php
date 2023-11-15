<?php
  include_once "php/views/discover-view.php";
?>

<div class="discover-page-cont section-cont">

  <div class="popular-songs-cont random-songs-cont">
    <div class="dm-text popular-songs-header">Discover New Songs</div>

    <div class="random-songs">
      <?php displayRandomSongs($randomSongs)?>
    </div>
  </div>

  <div class="popular-songs-cont recently-added-songs-cont">
    <div class="dm-text popular-songs-header">Recently Added</div>
    
    <div class="recently-added-songs">
      <?php displayRecentSongs($recentSongs)?>
    </div>
  </div>

  <div class="popular-songs-cont our-picks-cont">
  <div class="dm-text popular-songs-header">Our Picks</div>
    
    <div class="our-picks-songs">
      <?php displayOurPicks($ourPicks)?>
    </div>
  </div>

</div>