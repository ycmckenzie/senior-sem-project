<?php 
  include_once "php/models/profile-model.php";
  include_once "php/controllers/profile-contr.php";

  $userId = $_SESSION["userId"];

  $userInfo = requestUserInfo($pdo, $userId);

  $date = substr($userInfo["user_created_at"], 0, 10);

  $dateTime = new DateTime($date);
  $joinedDate = $dateTime->format("F Y");

  function displayUserInfo($userInfo, $joinedDate){
    ?>
      <div class="dm-text profile-user-name"><?php echo $userInfo["firstname"] . " " . $userInfo["lastname"];?></div>
      <div class="profile-joined-date"><?php echo "Joined " . $joinedDate?></div>
    <?php
  }

  $favoriteSongs = requestFavoriteSongs($pdo, $userId);

  function displayFavoriteSongs($favoriteSongs){
    if($favoriteSongs){
      foreach($favoriteSongs as $favoriteSong){
        ?>
          <div class="song-cont favorite-song-cont">
              <img src="data:image/jpeg;base64,<?php echo base64_encode($favoriteSong["song_image"]);?>" alt="song-img" class="song-img">
              <div class="song-play-btn">
              </div>
              <div class="song-content">
                <p class="song-name"><?php echo $favoriteSong["song_name"];?> </p>
                <p class="song-artist"><?php echo $favoriteSong["artist_name"];?></p>
                <p class="dm-text song-genre favorites-song-genre"><?php echo $favoriteSong["genre"];?></p>

                <?php
                  $date = explode(" ", $favoriteSong["favorite_added_at"]);
                  $explodedDate = explode("-", $date[0]);
                  $reformattedDate = $explodedDate[1] . "-" . $explodedDate[2] . "-" . $explodedDate[0];
                ?>
                <p class="dm-text song-added favorites-song-added"><?php echo $reformattedDate?></p>

                <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="profile-song-heart song-heart" width="25px">
              </div>
  
            <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 
  
            <div class="song-popup">
              <div class="close-btn popup-btn">
                <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
                <p class="dm-text">Close</p>
              </div>
  
              <div class="add-cont popup-btn add-playlist-btn favorites-add-playlist-btn">
                <div class="song-id"><?php echo $favoriteSong["song_id"] ?></div>
                <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
                <p class="dm-text">Add to playlist</p>
              </div>

              <div class="add-cont popup-btn unfavorite-btn favorites-unfavorite-btn">
                <div class="song-id"><?php echo $favoriteSong["song_id"] ?></div>
                <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="20px">
                <p class="dm-text">Unfavorite</p>
              </div>
            </div>

            <div class="song-info">
              <p class="dm-text song-info-id"><?php echo $favoriteSong["song_id"];?></p>
              <p class="dm-text song-favorited">true</p>
            </div>
  
            <audio src="data:audio/mpeg;base64,<?php echo base64_encode($favoriteSong["song_audio_file"]);?>" class="song-audio-src">
            </audio>
          </div>
        <?php
      }
    }
    else{
      ?>
        <div class="dm-text no-favorites-message">No favorites</div>
      <?php
    }
  }