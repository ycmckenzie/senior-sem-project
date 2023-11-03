<?php
  include_once "php/models/search-model.php";
  include_once "php/controllers/search-contr.php";


  $genreSongs = requestGenreSongs($pdo);

  function displaySearchSongs($genreSongs){
    foreach($genreSongs as $song){
      ?>
        <div class="song-cont search-song-cont">
            <img src="song-content/<?php echo $song["song_image_path"];?>" alt="song-img" class="song-img search-song-img">

            <div class="song-play-btn">
            </div>
            <div class="song-content search-song-content">
              <p class="song-name search-song-name"><?php echo $song["song_name"];?> </p>
              <p class="song-artist search-song-artist"><?php echo $song["artist_name"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup search-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="add-cont popup-btn add-library-btn search-add-library-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn search-add-playlist-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist</p>
            </div>
          </div>

          <div class="song-audio-src">
            <?php echo $song["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }
  
  function displayGenreSongs($genreSongs){
    foreach($genreSongs as $song){
      ?>
        <div class="song-cont genre-song-cont">
            <img src="song-content/<?php echo $song["song_image_path"];?>" alt="song-img" class="song-img genre-song-img">

            <div class="song-play-btn">
            </div>

            <div class="song-content genre-song-content">
              <p class="song-name genre-song-name"><?php echo $song["song_name"];?> </p>
              <p class="song-artist genre-song-artist"><?php echo $song["artist_name"];?></p>
            </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup genre-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="add-cont popup-btn add-library-btn genre-add-library-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn genre-add-playlist-btn">
              <div class="song-id"><?php echo $song["song_id"] ?></div>
              <img src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p>Add to playlist</p>
            </div>
          </div>

          <p class="genre-song-genre"><?php echo $song["genre"];?></p>

          <div class="song-audio-src">
            <?php echo $song["song_audio_path"];?>
          </div>
        </div>
      <?php
    }
  }
