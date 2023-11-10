<?php
  function requestUserInfo($pdo, $userId){
    return getUserInfo($pdo, $userId);
  }

  function requestFavoriteSongs($pdo, $userId){
    return getFavoriteSongs($pdo, $userId);
  }

  function isSongFavorited($pdo, $userId, $songId){
    if(checkSongFavorited($pdo, $userId, $songId)){
      return true;
    }
    else{
      return false;
    }
  }

  function addSongFavorites($pdo, $userId, $songId){
    insertSongFavorites($pdo, $userId, $songId);
  }

  function removeSongFavorites($pdo, $userId, $songId){
    deleteSongFavorites($pdo, $userId, $songId);
  }
