<?php

  function getRandomSongs($pdo){
    $query = "SELECT * FROM songs ORDER BY RAND() LIMIT 3;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function getRecentSongs($pdo){
    $query = "SELECT * FROM songs ORDER BY song_added_at DESC LIMIT 3;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function getOurPicks($pdo){
    $query = "SELECT * FROM songs WHERE song_id = 5 
      OR song_id = 3 OR song_id = 9;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function checkDiscoverSongFavorited($pdo, $userId, $songId){
    $query = "SELECT * FROM favorites WHERE users_id = :userId 
        AND song_id = :songId;";
  
      $stmt = $pdo->prepare($query);
  
      $stmt->bindParam(":userId", $userId);
      $stmt->bindParam(":songId", $songId);
  
      $stmt->execute();
  
      $result = $stmt->fetch(PDO::FETCH_ASSOC);
  
      return $result;
  }