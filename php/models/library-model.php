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

  