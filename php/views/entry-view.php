<?php
  function checkInputs(){
    if(isset($_SESSION["signupErrors"]["inputEmpty"])){

      $error = $_SESSION["signupErrors"]["inputEmpty"];

      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["signupErrors"]["inputEmpty"]);
    }
  }

  function checkValidEmail(){
    if(isset($_SESSION["signupErrors"]["emailInvalid"])){

      $error = $_SESSION["signupErrors"]["emailInvalid"];

      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["signupErrors"]["emailInvalid"]);
    }
  }

  function checkEmailTaken(){
    if(isset($_SESSION["signupErrors"]["emailTaken"])){

      $error = $_SESSION["signupErrors"]["emailTaken"];

      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["signupErrors"]["emailTaken"]);
    }
  }

  function emailNotRegistered(){
    if(isset($_SESSION["loginErrors"]["emailNotRegistered"])){

      $error = $_SESSION["loginErrors"]["emailNotRegistered"];
      
      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["loginErrors"]["emailNotRegistered"]);
    }
  }

  function checkLoginInputs(){
    if(isset($_SESSION["loginErrors"]["inputEmpty"])){

      $error = $_SESSION["loginErrors"]["inputEmpty"];

      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["loginErrors"]["inputEmpty"]);
    }
  }

  function incorrectPassword(){
    if(isset($_SESSION["loginErrors"]["incorrectPassword"])){

      $error = $_SESSION["loginErrors"]["incorrectPassword"];

      echo "<p class='signup-error'>" . $error . "</p>";

      unset($_SESSION["loginErrors"]["incorrectPassword"]); 
    }
  }
  
