<?php
  function requestGenreSongs($pdo){
    return getGenreSongs($pdo); 
  }

  function isSearchSongFavorited($pdo, $userId, $songId){
    return checkSearchSongFavorited($pdo, $userId, $songId);
  }