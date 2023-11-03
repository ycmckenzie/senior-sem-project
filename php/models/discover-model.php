<?php

  function getRandomSongs($pdo){
    $query = "SELECT * FROM songs ORDER BY RAND() LIMIT 3;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }

  function getRecentSongs($pdo){
    $query = "SELECT * FROM songs ORDER BY added_at DESC LIMIT 3;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }