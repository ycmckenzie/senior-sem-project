<?php
  include_once "php/models/library-model.php";
  include_once "php/controllers/library-contr.php";

  $userId = $_SESSION["userId"];

  $songs = requestLibrarySongs($pdo, $userId);

  function displayLibrarySongs($songs){
    foreach($songs as $song){
      ?>
        <div class="song-cont">
            <img src="song-content/<?php echo $song["song_image_path"];?>" alt="song-img" class="song-img">
            <div class="song-play-btn">
            </div>
            <div class="song-content">
              <p class="song-name"><?php echo $song["song_name"];?> </p>
              <p class="song-artist"><?php echo $song["artist_name"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="delete-cont popup-btn">
              <img src="images/svgs/trash-icon.svg" alt="" width="20px">
              <p>Delete from library</p>
            </div>

            <div class="add-cont popup-btn">
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist
            </div>
          </div>

          <div class="song-audio-src">
            <?php echo $song["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }


  