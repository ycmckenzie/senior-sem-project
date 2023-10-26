<?php
    include_once "session-config.php";
    
    session_unset();
    header("Location: ../login.php");