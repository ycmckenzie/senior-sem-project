<?php

  function insertPlaylist($pdo, $userId, $playlistName){
    $query = "INSERT INTO playlists (users_id, playlist_name) 
      VALUES (:users_id, :playlist_name);";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":users_id", $userId);
    $stmt->bindParam(":playlist_name", $playlistName);

    $stmt->execute();
  }