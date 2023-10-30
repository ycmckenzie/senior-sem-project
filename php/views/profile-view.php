<?php 
  include_once "php/models/profile-model.php";
  include_once "php/controllers/profile-contr.php";

  $userId = $_SESSION["userId"];

  $userInfo = requestUserInfo($pdo, $userId);

  $date = substr($userInfo["created_at"], 0, 10);

  $dateTime = new DateTime($date);
  $joinedDate = $dateTime->format("F Y");

  function displayUserInfo($userInfo, $joinedDate){
    ?>
      <div class="profile-user-name"><?php echo $userInfo["firstname"] . " " . $userInfo["lastname"];?></div>
      <div class="profile-joined-date"><?php echo "Joined " . $joinedDate?></div>
    <?php
  }