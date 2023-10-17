<?php
  if ($_SERVER["REQUEST_METHOD"] = "POST"){
    $email = $_POST["email"];
    $password = $_POST["password"];

    try{
      require_once "conn.php";
      require_once "models/entry-model.php";
      require_once "controllers/entry-contr.php";

      $loginErrors = [];

      if(loginInputEmpty($email, $password)){
        $loginErrors["inputEmpty"] = "Must fill in all inputs!";
      }
      if(emailNotRegistered($pdo, $email)){
        $loginErrors["emailNotRegistered"] = "That email is not registered.";
      }
      
      $userInfo = getUserInfo($pdo, $email);

      if(passwordIncorrect($password, $userInfo["pwd"])){
        $loginErrors["incorrectPassword"] = "We didn't recognize that password.";
      }

      require_once "session-config.php";

      if($loginErrors){
        $_SESSION["loginErrors"] = $loginErrors;
        header("Location: ../login.php"); 
        die();
      }

      $userId = getUserId($pdo, $email);

      $_SESSION["userId"] = $userId["id"];

      header("Location: ../index.php");

      $pdo = null;
      $stmt = null;
      die();

    }
    catch (PDOException $e){
      die("Query Failed: " . $e->getMessage());
    }
  }
  else{
    header("Location: ../login.php");
    die();
  }