<?php
  include_once "php/models/search-model.php";
  include_once "php/controllers/search-contr.php";

  $genreSongs = requestGenreSongs($pdo);

  function displayGenreSongs($genreSongs){
    foreach($genreSongs as $song){
      ?>
        <div class="genre-song-cont">
          <p class="genre-song-genre"><?php echo $song["genre"];?></p>
          <img src="song-content/<?php echo $song["song_image_path"];?>" alt="song-img" class="genre-song-img">

          <div class="genre-song-content">
            <p class="genre-song-name"><?php echo $song["song_name"];?> </p>
            <p class="genre-song-artist"><?php echo $song["artist_name"];?></p>
          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="genre-song-popup">
            <div class="close-btn popup-btn">
              <img src="images/svgs/x-icon.svg" alt="" width="20px">
              <p>Close</p>
            </div>

            <div class="genre-add-lib-btn popup-btn">
              <img src="images/svgs/trash-icon.svg" alt="" width="20px">
              <p>Add to library</p>
           </div>

          </div>
        </div>
      <?php
    }
  }
