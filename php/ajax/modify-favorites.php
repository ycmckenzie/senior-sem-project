<?php
  error_reporting(E_ALL);
  ini_set('display_errors', 1);

  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/profile-model.php";
  include_once "../controllers/profile-contr.php";

  if(isset($_POST["favoriteSongId"])){
    $userId = $_SESSION["userId"];
    $songId = $_POST["favoriteSongId"];

    if(isSongFavorited($pdo, $userId, $songId)){
      removeSongFavorites($pdo, $userId, $songId);
      echo "removed song from favorites";
    }
    else{
      addSongFavorites($pdo, $userId, $songId);
      echo "added song to favorites";
    }

    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["favoriteSongId"]);
  }