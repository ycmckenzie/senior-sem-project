<?php
  function getUserInfo($pdo, $userId){
    $query = "SELECT * FROM users WHERE id = :id;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $userId);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }

  function getFavoriteSongs($pdo, $userId){
    $query = "SELECT * FROM songs 
    JOIN favorites
    ON songs.song_id = favorites.song_id
    AND favorites.users_id = :user_id;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":user_id", $userId);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function checkSongFavorited($pdo, $userId, $songId){
    $query = "SELECT * FROM favorites WHERE users_id = :userId 
      AND song_id = :songId;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }

  function insertSongFavorites($pdo, $userId, $songId){
    $query = "INSERT INTO favorites (users_id, song_id)
      VALUES (:userId, :songId);";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();
  }

  function deleteSongFavorites($pdo, $userId, $songId){
    $query = "DELETE FROM favorites WHERE users_id = :userId
      AND song_id = :songId;";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);

    $stmt->execute();
  }