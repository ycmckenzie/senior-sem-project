<?php 
  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/profile-model.php";
  include_once "../controllers/profile-contr.php";

  if(isset($_POST["addFavoritesId"])){
    $userId = $_SESSION["userId"];
    $songId = $_POST["addFavoritesId"];

    if(!isSongFavorited($pdo, $userId, $songId)){
      addSongFavorites($pdo, $userId, $songId);
      echo "Successfully added";
    }
    else{
      echo "Song already favorited";
    }

    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["addFavoritesId"]);
  }