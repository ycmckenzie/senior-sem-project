<?php

  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/playlist-model.php";
  include_once "../controllers/playlist-contr.php";

  if(isset($_POST["deletePlaylistIds"])){
    $userId = $_SESSION["userId"];

    $id_arr = explode(",", $_POST["deletePlaylistIds"]);
    $songId = $id_arr[0];
    $playlistId = $id_arr[1];

    removePlaylistSong($pdo, $userId, $songId, $playlistId);

    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["deletePlaylistIds"]);
  }