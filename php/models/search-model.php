<?php

 function getGenreSongs($pdo){
    $query = "SELECT * FROM songs;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function checkSearchSongFavorited($pdo, $userId, $songId){
    $query = "SELECT * FROM favorites WHERE users_id = :userId 
        AND song_id = :songId;";
  
      $stmt = $pdo->prepare($query);
  
      $stmt->bindParam(":userId", $userId);
      $stmt->bindParam(":songId", $songId);
  
      $stmt->execute();
  
      $result = $stmt->fetch(PDO::FETCH_ASSOC);
  
      return $result;
  }