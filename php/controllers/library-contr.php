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