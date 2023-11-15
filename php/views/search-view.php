<?php
  include_once "php/models/search-model.php";
  include_once "php/controllers/search-contr.php";


  $genreSongs = requestGenreSongs($pdo);

  function displaySearchSongs($genreSongs){
    foreach($genreSongs as $song){
      ?>
        <div class="song-cont search-song-cont">
            <img src="data:image/jpeg;base64,<?php echo base64_encode($song["song_image"]);?>" alt="song-img" class="song-img search-song-img">

            <div class="song-play-btn">
            </div>
            <div class="song-content search-song-content">
              <p class="song-name search-song-name"><?php echo $song["song_name"];?> </p>
              <p class="song-artist search-song-artist"><?php echo $song["artist_name"];?></p>
              <p class="dm-text song-genre search-song-genre"><?php echo $song["genre"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup search-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon"src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="add-cont popup-btn add-library-btn search-add-library-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img class="dm-icon"src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn search-add-playlist-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist</p>
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn search-favorite-btn">
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
  
  function displayGenreSongs($genreSongs){
    foreach($genreSongs as $song){
      ?>
        <div class="song-cont genre-song-cont">
            <img src="data:image/jpeg;base64,<?php echo base64_encode($song["song_image"]);?>" alt="song-img" class="song-img genre-song-img">

            <div class="song-play-btn">
            </div>

            <div class="song-content genre-song-content">
              <p class="song-name genre-song-name"><?php echo $song["song_name"];?> </p>
              <p class="song-artist genre-song-artist"><?php echo $song["artist_name"];?></p>
              <p class="dm-text song-genre genre-song-genre"><?php echo $song["genre"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup genre-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="add-cont popup-btn add-library-btn genre-add-library-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img class="dm-icon"src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn genre-add-playlist-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img class="dm-icon"src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist</p>
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn genre-favorite-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
              <p class="dm-text">Favorite</p>
            </div>
          </div>

          <p class="genre-song-genre"><?php echo $song["genre"];?></p>

          <audio src="data:audio/mpeg;base64,<?php echo base64_encode($song["song_audio_file"]);?>" class="song-audio-src">
          </audio>
        </div>
      <?php
    }
  }
