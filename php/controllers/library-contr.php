<?php

  function requestLibrarySongs($pdo, $userId){
   return getLibrarySongs($pdo, $userId);
  }

  function songAlreadyInLibrary($pdo, $userId, $songId){
    return checkSongInLibrary($pdo, $userId, $songId);
  }

  function addLibrarySong($pdo, $userId, $songId){
    insertLibrarySong($pdo, $userId, $songId);
  }

  function removeLibrarySong($pdo, $userId, $songId){
    deleteLibrarySong($pdo, $userId, $songId);
  }

  function isLibrarySongFavorited($pdo, $userId, $songId){
    return checkLibrarySongFavorited($pdo, $userId, $songId);
  }
