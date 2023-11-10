<?php
  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/library-model.php";
  include_once "../controllers/library-contr.php";

  $userId = $_SESSION["userId"];

  $songs = requestLibrarySongs($pdo, $userId);

  function displayLibrarySongs($songs){
    if($songs){
      foreach($songs as $song){
        ?>
          <div class="song-cont library-song-cont">
              <img src="data:image/jpeg;base64,<?php echo base64_encode($song["song_image"]);?>" alt="song-img" class="song-img">
              <div class="song-play-btn">
              </div>
              <div class="song-content">
                <p class="song-name"><?php echo $song["song_name"];?> </p>
                <p class="song-artist"><?php echo $song["artist_name"];?></p>
              </div>
  
            <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="dm-icon elipsis-icon library-options-icon"> 
  
            <div class="song-popup">
              <div class="close-btn popup-btn">
                <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
                <p class="dm-text">Close</p>
              </div>
  
              <div class="delete-cont popup-btn delete-library-btn">
                <div class="song-id"><?php echo $song["song_id"]; ?></div>
                <img class="dm-icon" src="images/svgs/trash-icon.svg" alt="" width="20px">
                <p class="dm-text">Delete from library</p>
              </div>
  
              <div class="add-cont popup-btn add-playlist-btn library-add-playlist-btn">
                <div class="song-id"><?php echo $song["song_id"]; ?></div>
                <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
                <p class="dm-text">Add to playlist</p>
              </div>

              <div class="favorite-cont popup-btn add-favorites-btn library-favorite-btn">
                <div class="song-id"><?php echo $song["song_id"] ?></div>
                <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
                <p class="dm-text">Favorite</p>
              </div>
            </div>
  
            <audio src="data:audio/mpeg;base64,<?php echo base64_encode($song["song_audio_file"]);?>" class="song-audio-src">
            </audio>
          </div>
        <?php
      }
    }
    else{
      ?>
        <div class="dm-text no-library-songs-message">Library is empty</div>
      <?php
    }
  }

  displayLibrarySongs($songs);