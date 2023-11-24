<?php
    error_reporting(E_ALL);
    ini_set('display_errors', 1);

    include_once "php/models/component-model.php";
    include_once "php/controllers/component-contr.php";

    $userId = $_SESSION["userId"];

    $headerName = requestHeaderName($pdo, $userId);
?>

<header class="main-header section-cont">
    <p class="header-title">Library</p>
    <div class="header-profile-cont">
        <p class="username">Hello, <?php echo " " . $headerName["firstname"];?></p>
        <img src="images/svgs/profile-icon.svg" alt="profile-img" width="40px"class="desktop-profile-icon">
    </div>
    <img src="images/svgs/profile-icon.svg" alt="profile-img" width="40px" class="profile-icon">
</header>