<?php
  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/playlist-model.php";
  include_once "../controllers/playlist-contr.php";

  if(isset($_POST["deletePlaylistId"])){
    $userId = $_SESSION["userId"];
    $playlistId = $_POST["deletePlaylistId"];

    removePlaylist($pdo, $playlistId, $userId);

    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["deletePlaylistId"]);
  }