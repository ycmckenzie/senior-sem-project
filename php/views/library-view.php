<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);
  
  include_once "php/models/library-model.php";
  include_once "php/controllers/library-contr.php";

  $userId = $_SESSION["userId"];

  $songs = requestLibrarySongs($pdo, $userId);

  function displayLibrarySongs($songs, $pdo, $userId){
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
                <p class="dm-text song-genre"><?php echo $song["genre"];?></p>

                <?php
                  $date = explode(" ", $song["library_song_added_at"]);
                  $explodedDate = explode("-", $date[0]);
                  $reformattedDate = $explodedDate[1] . "-" . $explodedDate[2] . "-" . $explodedDate[0];
                ?>

                <p class="dm-text song-added"><?php echo $reformattedDate; ?></p>
                
                <?php
                  if(isLibrarySongFavorited($pdo, $userId, $song["song_id"])){
                    ?>
                      <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="library-song-heart song-heart" width="25px">
                    <?php
                  }
                ?>
              </div>
  
            <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 
  
            <div class="song-popup">
              <div class="close-btn popup-btn">
                <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
                <p class="dm-text">Close</p>
              </div>
  
              <div class="delete-cont popup-btn delete-library-btn">
                <div class="song-id"><?php echo $song["song_id"];?></div>
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

            <div class="song-info">
              <p class="dm-text song-info-id"><?php echo $song["song_id"];?></p>
              <p class="dm-text song-favorited">
                <?php
                  if(isLibrarySongFavorited($pdo, $userId, $song["song_id"])){
                    echo "true";
                  }
                  else{
                    echo "false";
                  }
                ?>
              </p>
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

  


  