<?php
  function requestRandomSongs($pdo){
    return getRandomSongs($pdo);
  }

  function requestRecentSongs($pdo){
    return getRecentSongs($pdo);
  }

  function requestOurPicks($pdo){
    return getOurPicks($pdo);
  }
