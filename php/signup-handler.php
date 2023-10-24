<?php
  if($_SERVER["REQUEST_METHOD"] === "POST"){
    $firstname = $_POST["firstname"];
    $lastname = $_POST["lastname"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    
    try{
      require_once "conn.php";
      require_once "models/entry-model.php";
      require_once "controllers/entry-contr.php";

      $signupErrors = [];

      if(signupInputEmpty($firstname, $lastname, $email, $password)){
        $signupErrors["inputEmpty"] = "Must fill in all inputs!";
      }

      if(emailInvalid($email)){
        $signupErrors["emailInvalid"] = "Please enter a valid email.";
      }

      if(emailTaken($pdo, $email)){
       $signupErrors["emailTaken"] = "That email is already registered.";
      }
      
      require_once "session-config.php";

      if($signupErrors){
        $_SESSION["signupErrors"] = $signupErrors;
        header("Location: ../signup.php"); 
        die();
      }

      createUser($pdo, $firstname, $lastname, $email, $password);

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
    header("Location: ../signup.php");
    die();
  }
  