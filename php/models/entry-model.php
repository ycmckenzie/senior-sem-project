<?php
  
  function getEmail($pdo, $email){
    $query = "SELECT email FROM users WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }

  function setUser($pdo, $firstname, $lastname, $email, $password){
    $query = "INSERT INTO users (firstname, lastname, email, pwd) 
      VALUES (:firstname, :lastname, :email, :pwd);";
    $stmt = $pdo->prepare($query);

    $options = [
      'cost' => 12
    ];

    $hashedPwd = password_hash($password, PASSWORD_BCRYPT, $options);

    $stmt->bindParam(":firstname", $firstname);
    $stmt->bindParam(":lastname", $lastname);
    $stmt->bindParam(":email", $email);
    $stmt->bindParam(":pwd", $hashedPwd);

    $stmt->execute();
  }


  function getId($pdo, $email){
    $query = "SELECT id FROM users WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);
    
    return $result;
  }

  function getUserInfo($pdo, $email){
    $query = "SELECT * FROM users WHERE email = :email;";
    $stmt = $pdo->prepare($query);
    $stmt->bindParam(":email", $email);
    $stmt->execute();

    $result = $stmt->fetch(PDO::FETCH_ASSOC);

    return $result;
  }
  
