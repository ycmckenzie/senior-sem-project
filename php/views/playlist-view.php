<?php
  include_once "php/models/playlist-model.php";
  include_once "php/controllers/playlist-contr.php";

  $userId = $_SESSION["userId"];

  $playlistsInfo = requestPlaylists($pdo, $userId);

  function displayPlaylists($playlistsInfo){
    if($playlistsInfo){
      foreach($playlistsInfo as $playlist){
        ?>
          <div class="playlist">
            <div class="playlist-img-cont">
              <img src="images/svgs/playlists-icon.svg" alt="playlist-img" class="playlist-img">
            </div>
  
            <p class="dm-text playlist-name"><?php echo $playlist["playlist_name"];?> </p>
  
            <img src="images/svgs/right-arrow-icon.svg" alt="right-arrow" class="dm-icon playlist-btn-right-arrow">
  
            <div class="playlist-id"><?php echo $playlist["playlist_id"];?> </div>
          </div>
        <?php
      }
    }
    else{
      ?>
        <div class="dm-text no-playlists-message">No playlists</div>
      <?php
    }
  }

  $username = requestUsername($pdo, $userId);

  function displayUsername($username){
    ?>
      <p class="playlist-user"><?php echo $username["firstname"] . " " . $username["lastname"]; ?></p>
    <?php
  }

  $playlistSongs = requestPlaylistSongs($pdo, $userId);

  function displayPlaylistSongs($playlistSongs, $pdo, $userId){
    foreach($playlistSongs as $playlistSong){
      ?>
        <div class="song-cont playlist-song-cont">
            <img src="data:image/jpeg;base64,<?php echo base64_encode($playlistSong["song_image"]);?>" alt="song-img" class="song-img playlist-song-img">
            <div class="song-play-btn playlist-song-btn">
            </div>
            <div class="playlist-song-content">
              <p class="dm-text playlist-song-name"><?php echo $playlistSong["song_name"];?> </p>
              <p class="playlist-song-artist"><?php echo $playlistSong["artist_name"];?></p>
              <p class="dm-text song-genre playlist-song-genre"><?php echo $playlistSong["genre"]?></p>
              <p class="dm-text song-plays playlist-song-plays"></p>

              <?php
                if(isPlaylistSongFavorited($pdo, $userId, $playlistSong["song_id"])){
                  ?>
                    <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="library-song-heart song-heart" width="25px">
                  <?php
                }
              ?>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup playlist-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="delete-cont popup-btn delete-playlist-song-btn">
              <div class="song-id"><?php echo $playlistSong["song_id"]; ?></div>
              <div class="delete-playlist-song-id"><?php echo $playlistSong["playlist_id"]; ?></div>
              <img class="dm-icon" src="images/svgs/trash-icon.svg" alt="" width="20px">
              <p class="dm-text">Delete from playlist</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn">
              <div class="song-id"><?php echo $playlistSong["song_id"]; ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn playlist-favorite-btn">
              <div class="song-id"><?php echo $playlistSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
              <p class="dm-text">Favorite</p>
            </div>
          </div>

          <div class="song-playlist-id"><?php echo $playlistSong["playlist_id"];?> </div>

          <div class="song-info">
              <p class="dm-text song-info-id"><?php echo $playlistSong["song_id"];?></p>
              <p class="dm-text song-favorited">
                <?php
                  if(isPlaylistSongFavorited($pdo, $userId, $playlistSong["song_id"])){
                    echo "true";
                  }
                  else{
                    echo "false";
                  }
                ?>
              </p>
            </div>

          <audio src="data:audio/mpeg;base64,<?php echo base64_encode($playlistSong["song_audio_file"]);?>" class="song-audio-src">
          </audio>
        </div>
      <?php
    }
  }

  function displaySelectionPlaylists($playlistsInfo){
    if($playlistsInfo){
      foreach($playlistsInfo as $playlist){
        ?>
          <div class="selection-playlist-cont">
            <label for="<?php echo $playlist["playlist_id"]?>" class="selection-playlist-content">
              <input type="radio" class="add-playlist-original-btn" name="playlist-id" value="<?php echo $playlist["playlist_id"]?>"
                id = "<?php echo $playlist["playlist_id"]?>">
  
              <div class="add-playlist-custom-btn"></div>
  
              <div class="playlist-img-cont">
                <img src="images/svgs/playlists-icon.svg" alt="playlist-img"class="playlist-img">
              </div>
              <p class="dm-text playlist-name"><?php echo $playlist["playlist_name"];?> </p>
  
            </label>
          </div>
        <?php
      }
    }
    else{
      ?>
        <div class="dm-text no-selection-playlists-message">No Playlists</div>
      <?php
    }
    
  }



