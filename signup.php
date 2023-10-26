<?php
  include_once "php/session-config.php";
  include_once "php/views/entry-view.php";
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="css/entry.css">
  <title>Tuni | Sign Up</title>
</head>
<body>
  <div class="cont su-cont">
    <div class="header su-header">Create Account</div>
    <p class="message su-message">Sign Up to start listening</p>
    <form action="php/signup-handler.php" method="POST" class="su-form">
      <input type="text" name="firstname" placeholder="Firstname" class="input su-input">
      <input type="text" name="lastname" placeholder="Lastname" class="input su-input">
      <input type="text" name="email" placeholder="Email" class="input su-input">
      <?php
        checkValidEmail();
        checkEmailTaken();
      ?>
      <input type="password" name="password" placeholder="Password" class="input su-input">
      <?php
        checkInputs();
      ?>
      <button class="su-btn">Sign Up</button>
    </form>
    <p class="redirect-link">Already have an account? <a href="login.php">Log In</a></p>
  </div>
</body>
</html>