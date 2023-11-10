<?php
  include_once "../conn.php";
  include_once "../session-config.php";
  include_once "../models/library-model.php";
  include_once "../controllers/library-contr.php";

  if(isset($_POST["deleteLibrarySongId"])){
    $userId = $_SESSION["userId"];
    $songId = $_POST["deleteLibrarySongId"];

    removeLibrarySong($pdo, $userId, $songId);
    
    $pdo = null;
    $stmt = null;
    die();
    unset($_POST["deleteLibrarySongId"]);
  }