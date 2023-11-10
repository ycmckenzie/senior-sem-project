<?php

include_once "../conn.php";
include_once "../session-config.php";
include_once "../models/library-model.php";
include_once "../controllers/library-contr.php";

if(isset($_POST["addLibrarySongId"])){

  $userId = $_SESSION["userId"];
  $songId = $_POST["addLibrarySongId"];
  if(!songAlreadyInLibrary($pdo, $userId, $songId)){
    addLibrarySong($pdo, $userId, $songId);
    echo "Successfully added";
  }
  else{
    echo "Song already in library";
  }

  $pdo = null;
  $stmt = null;
  die();

  unset($_POST["addLibrarySongId"]);
}