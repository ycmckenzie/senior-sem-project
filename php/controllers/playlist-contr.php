<?php
  function createPlaylist($pdo, $userId, $playlistName){
    insertPlaylist($pdo, $userId, $playlistName);
  }

  function requestPlaylists($pdo, $userId){
    return getPlaylists($pdo, $userId);
  }

  function requestUsername($pdo, $userId){
    return getUsername($pdo, $userId);
  }

  function requestPlaylistSongs($pdo, $userId){
    return getPlaylistSongs($pdo, $userId);
  }

  function songAlreadyInserted($pdo, $userId, $songId, $playlistId){
    return checkSongInserted($pdo, $userId, $songId, $playlistId);
  }

  function addPlaylistSong($pdo, $userId, $songId, $playlistId){
    insertPlaylistSong($pdo, $userId, $songId, $playlistId);
  }

