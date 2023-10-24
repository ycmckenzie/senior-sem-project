<?php
  include_once "../conn.php";
  include_once "../session-config.php";

  $userId = $_SESSION["userId"];
  
  function getLibrarySongs($pdo, $userId){
    $query = "SELECT * FROM songs 
      JOIN libraries
      ON songs.song_id = libraries.song_id
      AND libraries.users_id = :user_id;";
    
    $stmt = $pdo->prepare($query);

    $stmt->bindParam(":user_id", $userId);

    $stmt->execute();

    $result = $stmt->fetchAll(PDO::FETCH_ASSOC);

    return $result; 
  }

  $results = getLibrarySongs($pdo, $userId);

  print_r($results); 
  echo $results[0]["song_image_path"];
?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>
<body>
  <img src="../../song-content/<?php echo $results[0]["song_image_path"]?>" alt="">
  <audio src="../../song-content/<?php echo $results[0]["song_audio_path"]?>" controls></audio>
</body>
</html>

  