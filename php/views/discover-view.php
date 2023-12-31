<?php
  include_once "php/models/discover-model.php";
  include_once "php/controllers/discover-contr.php";

  $randomSongs = requestRandomSongs($pdo);

  function displayRandomSongs($randomSongs, $pdo, $userId){
    foreach($randomSongs as $randomSong){
      ?>
        <div class="song-cont random-song-cont">
          <img src="data:image/jpeg;base64,<?php echo base64_encode($randomSong["song_image"]);?>" alt="song-img" class="song-img random-song-img">
          <div class="song-play-btn random-song-play-btn">
          </div>
          <div class="song-content random-song-content">
            <p class="song-name random-song-name"><?php echo $randomSong["song_name"];?> </p>
            <p class="song-artist random-song-artist"><?php echo $randomSong["artist_name"];?></p>
            <p class="dm-text song-genre random-song-genre"><?php echo $randomSong["genre"]?></p>
            <p class="dm-text random-song-plays"></p>

            <?php
              if(isDiscoverSongFavorited($pdo, $userId, $randomSong["song_id"])){
                ?>
                  <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="discover-song-heart song-heart" width="25px">
                <?php
              }
            ?>

          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup random-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="delete-cont popup-btn add-library-btn random-song-add-library-btn">
              <div class="song-id"><?php echo $randomSong["song_id"] ?></div>
              <img class="dm-icon"src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn random-song-add-playlist-btn">
              <div class="song-id"><?php echo $randomSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn random-song-favorite-btn">
              <div class="song-id"><?php echo $randomSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
              <p class="dm-text">Favorite</p>
            </div>
          </div>

          <div class="song-info">
            <p class="dm-text song-info-id"><?php echo $randomSong["song_id"];?></p>
            <p class="dm-text song-favorited">
              <?php
                if(isDiscoverSongFavorited($pdo, $userId, $randomSong["song_id"])){
                  echo "true";
                }
                else{
                  echo "false";
                }
              ?>
            </p>
          </div>

          <audio src="data:audio/mpeg;base64,<?php echo base64_encode($randomSong["song_audio_file"]);?>" class="song-audio-src">  
          </audio>
        </div>
      <?php
    }
  }

  $recentSongs = requestRecentSongs($pdo);

  function displayRecentSongs($recentSongs, $pdo, $userId){
    foreach($recentSongs as $recentSong){
      ?>
        <div class="song-cont recent-song-cont">
          <img src="data:image/jpeg;base64,<?php echo base64_encode($recentSong["song_image"]);?>" alt="song-img" class="song-img recent-song-img">
          <div class="song-play-btn recent-song-play-btn">
          </div>
          <div class="song-content recent-song-content">
            <p class="song-name recent-song-name"><?php echo $recentSong["song_name"];?> </p>
            <p class="song-artist recent-song-artist"><?php echo $recentSong["artist_name"];?></p>
            <p class="dm-text song-genre recent-song-genre"><?php echo $recentSong["genre"]?></p>
            <p class="dm-text recent-song-plays"></p>

            <?php
              if(isDiscoverSongFavorited($pdo, $userId, $recentSong["song_id"])){
                ?>
                  <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="discover-song-heart song-heart" width="25px">
                <?php
              }
            ?>
          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup recent-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="delete-cont popup-btn add-library-btn recent-song-add-library-btn">
              <div class="song-id"><?php echo $recentSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn recent-song-add-playlist-btn">
              <div class="song-id"><?php echo $recentSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn recent-song-favorite-btn">
              <div class="song-id"><?php echo $recentSong["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
              <p class="dm-text">Favorite</p>
            </div>
          </div>
          
          <div class="song-info">
            <p class="dm-text song-info-id"><?php echo $recentSong["song_id"];?></p>
            <p class="dm-text song-favorited">
              <?php
                if(isDiscoverSongFavorited($pdo, $userId, $recentSong["song_id"])){
                  echo "true";
                }
                else{
                  echo "false";
                }
              ?>
            </p>
          </div>

          <audio src="data:audio/mpeg;base64,<?php echo base64_encode($recentSong["song_audio_file"]);?>" class="song-audio-src">
          </audio>
        </div>
      <?php
    }
  }

  $ourPicks = requestOurPicks($pdo);

  function displayOurPicks($ourPicks, $pdo, $userId){
    foreach($ourPicks as $pick){
      ?>
        <div class="song-cont recent-song-cont">
          <img src="data:image/jpeg;base64,<?php echo base64_encode($pick["song_image"]);?>" alt="song-img" class="song-img recent-song-img">
          <div class="song-play-btn recent-song-play-btn">
          </div>
          <div class="song-content recent-song-content">
            <p class="song-name recent-song-name"><?php echo $pick["song_name"];?> </p>
            <p class="song-artist recent-song-artist"><?php echo $pick["artist_name"];?></p>
            <p class="dm-text song-genre recent-song-genre"><?php echo $pick["genre"]?></p>
            <p class="dm-text recent-song-plays"></p>

            <?php
              if(isDiscoverSongFavorited($pdo, $userId, $pick["song_id"])){
                ?>
                  <img src="images/svgs/red-heart-icon.svg" alt="heart-icon" class="discover-song-heart song-heart" width="25px">
                <?php
              }
            ?>

          </div>

          <img src="images/svgs/elipsis-icon.svg" alt="" width="30px" class="elipsis-icon"> 

          <div class="song-popup recent-song-popup">
            <div class="close-btn popup-btn">
              <img class="dm-icon" src="images/svgs/x-icon.svg" alt="" width="20px">
              <p class="dm-text">Close</p>
            </div>

            <div class="delete-cont popup-btn add-library-btn recent-song-add-library-btn">
              <div class="song-id"><?php echo $pick["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to library</p>
            </div>

            <div class="add-cont popup-btn add-playlist-btn recent-song-add-playlist-btn">
              <div class="song-id"><?php echo $pick["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/plus-icon.svg" alt="" width="20px">
              <p class="dm-text">Add to playlist
            </div>

            <div class="favorite-cont popup-btn add-favorites-btn recent-song-favorite-btn">
              <div class="song-id"><?php echo $pick["song_id"] ?></div>
              <img class="dm-icon" src="images/svgs/heart-icon.svg" alt="" width="19px">
              <p class="dm-text">Favorite</p>
            </div>
          </div>

          <div class="song-info">
            <p class="dm-text song-info-id"><?php echo $pick["song_id"];?></p>
            <p class="dm-text song-favorited">
              <?php
                if(isDiscoverSongFavorited($pdo, $userId, $pick["song_id"])){
                  echo "true";
                }
                else{
                  echo "false";
                }
              ?>
            </p>
          </div>

          <audio src="data:audio/mpeg;base64,<?php echo base64_encode($pick["song_audio_file"]);?>" class="song-audio-src">
          </audio>
        </div>
      <?php
    }
  }