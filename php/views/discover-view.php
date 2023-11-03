<?php
  include_once "php/models/discover-model.php";
  include_once "php/controllers/discover-contr.php";

  $randomSongs = requestRandomSongs($pdo);

  function displayRandomSongs($randomSongs){
    foreach($randomSongs as $randomSong){
      ?>
        <div class="song-cont random-song-cont">
          <img src="song-content/<?php echo $randomSong["song_image_path"];?>" alt="song-img" class="song-img random-song-img">
          <div class="song-play-btn random-song-play-btn">
          </div>
          <div class="song-content random-song-content">
            <p class="song-name random-song-name"><?php echo $randomSong["song_name"];?> </p>
            <p class="song-artist random-song-artist"><?php echo $randomSong["artist_name"];?></p>
          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup random-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="delete-cont popup-btn add-library-btn random-song-add-library-btn">
              <div class="song-id"><?php echo $randomSong["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn random-song-add-playlist-btn">
              <div class="song-id"><?php echo $randomSong["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist
            </div>
          </div>

          <div class="song-audio-src">
            <?php echo $randomSong["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }

  $recentSongs = requestRecentSongs($pdo);

  function displayRecentSongs($recentSongs){
    foreach($recentSongs as $recentSong){
      ?>
        <div class="song-cont recent-song-cont">
          <img src="song-content/<?php echo $recentSong["song_image_path"];?>" alt="song-img" class="song-img recent-song-img">
          <div class="song-play-btn recent-song-play-btn">
          </div>
          <div class="song-content recent-song-content">
            <p class="song-name recent-song-name"><?php echo $recentSong["song_name"];?> </p>
            <p class="song-artist recent-song-artist"><?php echo $recentSong["artist_name"];?></p>
          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup recent-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="delete-cont popup-btn add-library-btn recent-song-add-library-btn">
              <div class="song-id"><?php echo $recentSong["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn recent-song-add-playlist-btn">
              <div class="song-id"><?php echo $recentSong["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist
            </div>
          </div>

          <div class="song-audio-src">
            <?php echo $recentSong["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }