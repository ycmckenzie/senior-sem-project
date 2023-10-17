<?php

  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/playlist-model.php";
  include_once "../controllers/playlist-contr.php";

  if(isset($_POST["playlistName"])){
    echo "playlistName: " . $_POST["playlistName"]; 

    $userId = $_SESSION["userId"];
    $playlistName = $_POST["playlistName"];


    createPlaylist($pdo, $userId, $playlistName);

    $pdo = null;
    $stmt = null;
    die();
  }