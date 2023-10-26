<?php

 function getGenreSongs($pdo){
    $query = "SELECT * FROM songs;";

    $stmt = $pdo->prepare($query);

    $stmt->execute();
    
    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result;
  }