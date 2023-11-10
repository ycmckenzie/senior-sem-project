<?php
  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/profile-model.php";
  include_once "../controllers/profile-contr.php";

  if(isset($_POST["removeFavoritesId"])){
    $userId = $_SESSION["userId"];
    $songId = $_POST["removeFavoritesId"];

    if(isSongFavorited($pdo, $userId, $songId)){
      removeSongFavorites($pdo, $userId, $songId);
      echo "Successfully removed";
    }
    else{
      echo "Song not favorited";
    }

    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["removeFavoritesId"]);
  }