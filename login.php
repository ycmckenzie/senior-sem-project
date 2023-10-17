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
  <title>Tuni | Login</title>
</head> 
<body>
  <div class="cont li-cont">
    <div class="header li-header">Log In</div>
    <p class="message li-message">Log In to start listening</p>
    <form action="php/login-handler.php" method="POST" class="li-form">
      <input type="text" name="email" placeholder="Email" class="input li-input">
      <?php
        emailNotRegistered();
      ?>
      <input type="password" name="password" placeholder="Password" class="input li-input">
      <?php
        incorrectPassword();
        checkLoginInputs();
      ?>
      <button class="li-btn">Log In</button>
    </form>
    <p class="redirect-link">Don't have an account? <a href="signup.php">Sign Up</a></p>
  </div>
</body>
</html>