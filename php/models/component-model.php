<?php
  function getHeaderName($pdo, $userId){
    $query = "SELECT firstname FROM users WHERE id = :userId;";

    $stmt = $pdo->prepare($query);
  
    $stmt->bindParam(":userId", $userId);

    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }