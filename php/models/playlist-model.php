<?php
  function insertPlaylist($pdo, $userId, $playlistName){
    $query = "INSERT INTO playlists (users_id, playlist_name) 
      VALUES (:users_id, :playlist_name);";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":users_id", $userId);
    $stmt->bindParam(":playlist_name", $playlistName);
    $stmt->execute();
  }

  function getPlaylists($pdo, $userId){
    $query = "SELECT * FROM playlists WHERE users_id = :id;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $userId);
    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function getUsername($pdo, $userId){
    $query = "SELECT * FROM users WHERE id = :id;";

    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":id", $userId);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }

  function getPlaylistSongs($pdo, $userId){
    $query = "SELECT * FROM songs 
      JOIN playlist_songs
      ON songs.song_id = playlist_songs.song_id
      AND playlist_songs.users_id = :user_id;";
      
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":user_id", $userId);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function checkSongInserted($pdo, $userId, $songId, $playlistId){
    $query = "SELECT * FROM playlist_songs WHERE users_id = :userId AND 
      song_id = :songId AND playlist_id = :playlistId;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);
    $stmt->bindParam(":playlistId", $playlistId);

    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function insertPlaylistSong($pdo, $userId, $songId, $playlistId){
    $query = "INSERT INTO playlist_songs (users_id, song_id, playlist_id) 
      values (:userId, :songId, :playlistId);";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);
    $stmt->bindParam(":playlistId", $playlistId);

    $stmt->execute();
  }

  function deletePlaylistSong($pdo, $userId, $songId, $playlistId){
    $query = "DELETE FROM playlist_songs WHERE users_id = :userId 
      AND song_id = :songId AND playlist_id = :playlistId;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":songId", $songId);
    $stmt->bindParam(":playlistId", $playlistId);

    $stmt->execute();
  }

  function deletePlaylist($pdo, $playlistId, $userId){
    $query = "DELETE FROM playlists WHERE users_id = :userId 
      AND playlist_id = :playlistId;";

    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":userId", $userId);
    $stmt->bindParam(":playlistId", $playlistId);

    $stmt->execute();
  }