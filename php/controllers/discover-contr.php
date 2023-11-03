<?php
  function requestRandomSongs($pdo){
    return getRandomSongs($pdo);
  }

  function requestRecentSongs($pdo){
    return getRecentSongs($pdo);
  }
