<?php
  function signupInputEmpty($firstname, $lastname, $email, $password){
    if (empty($firstname) || empty($lastname) || empty($email) || empty($password)){
      return true;
    }
    else{
      return false;
    }
  }

  function emailInvalid($email){
    if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
      return true;
    }
    else{
      return false;
    }
  }

  function emailTaken($pdo, $email){
    if(getEmail($pdo, $email)){
      return true;
    }
    else{
      return false;
    }
  }

  function createUser($pdo, $firstname, $lastname, $email, $password){
    setUser($pdo, $firstname, $lastname, $email, $password);
  }

  function getUserId($pdo, $email){
    return getId($pdo, $email);
  }

  function loginInputEmpty($email, $password){
    if (empty($email) || empty($password)){
      return true;
    }
    else{
      return false;
    }
  }

  function emailNotRegistered($pdo, $email){
    if(!getEmail($pdo, $email)){
      return true;
    }
    else{
      return false;
    }
  }

  function passwordIncorrect($password, $hasedPassword){
    if(!password_verify($password, $hasedPassword)){
      return true;
    }
    else{
      return false;
    }
  }
  