<?php
  
  function getLibrarySongs($pdo, $userId){
    $query = "SELECT * FROM songs 
      JOIN libraries
      ON songs.song_id = libraries.song_id
      AND libraries.users_id = :user_id;";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":user_id", $userId);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function checkSongInLibrary($pdo, $userId, $songId){
    $query = "SELECT * FROM libraries WHERE users_id = :userId 
      AND song_id = :songId;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }

  function insertLibrarySong($pdo, $userId, $songId){
    $query = "INSERT INTO libraries (users_id, song_id) 
      values (:userId, :songId);";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();
  }

  function deleteLibrarySong($pdo, $userId, $songId){
    $query = "DELETE FROM libraries WHERE users_id = :userId 
      AND song_id = :songId;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();
  }

function checkLibrarySongFavorited($pdo, $userId, $songId){
  $query = "SELECT * FROM favorites WHERE users_id = :userId 
      AND song_id = :songId;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
}
