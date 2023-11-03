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
              <img src="images/svgs/playlists-icon.svg" alt="playlist-img"class="playlist-img">
            </div>
  
            <p class="playlist-name"><?php echo $playlist["playlist_name"];?> </p>
  
            <img src="images/svgs/right-arrow-icon.svg" alt="right-arrow">
  
            <div class="playlist-id"><?php echo $playlist["playlist_id"];?> </div>
          </div>
        <?php
      }
    }
    else{
      ?>
        <div class="no-playlists-message">No playlists</div>
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

  function displayPlaylistSongs($playlistSongs){
    foreach($playlistSongs as $playlistSong){
      ?>
        <div class="song-cont playlist-song-cont">
            <img src="song-content/<?php echo $playlistSong["song_image_path"];?>" alt="song-img" class="song-img playlist-song-img">
            <div class="song-play-btn playlist-song-btn">
            </div>
            <div class="playlist-song-content">
              <p class="playlist-song-name"><?php echo $playlistSong["song_name"];?> </p>
              <p class="playlist-song-artist"><?php echo $playlistSong["artist_name"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup playlist-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="delete-cont popup-btn">
              <div class="song-id"><?php echo $playlistSong["song_id"] ?></div>
              <img src="images/svgs/trash-icon.svg" alt="" width="20px">
              <p>Delete from playlist</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn">
              <div class="song-id"><?php echo $playlistSong["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist
            </div>
          </div>

          <div class="song-playlist-id"><?php echo $playlistSong["playlist_id"];?> </div>

          <div class="song-audio-src">
            <?php echo $playlistSong["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }

  function displaySelectionPlaylists($playlistsInfo){
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
            <p class="playlist-name"><?php echo $playlist["playlist_name"];?> </p>

          </label>
        </div>
      <?php
    }
  }



