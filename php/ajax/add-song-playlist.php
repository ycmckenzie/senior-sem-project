<?php

  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/playlist-model.php";
  include_once "../controllers/playlist-contr.php";

  if(isset($_POST["ids"])){
    $userId = $_SESSION["userId"];

    $id_arr = explode(",", $_POST["ids"]);
    $playlistId = $id_arr[0];
    $songId = $id_arr[1];

    if(!songAlreadyInserted($pdo, $userId, $songId, $playlistId)){
      addPlaylistSong($pdo, $userId, $songId, $playlistId);
      echo "Successfully added!";
    }
    else{
      echo "Playlist already contains song.";
    }

    $pdo = null;
    $stmt = null;
    die();

    unset($_POST["ids"]);
  }