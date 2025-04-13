<?php

$page = "dinoThunder";

if (isset($_GET['page'])) {
  $page = $_GET['page'];
  switch ($page) {
    case "dinoThunder":
      $page = "dinoThunder";
      break;
    case "ninjaStorm":
      $page = "ninjaStorm";
      break;
    case "spd":
      $page = "spd";
      break;
    default:
      header("Location: ?page=dinoThunder");
      break;
  }
} else {
  header("Location: ?page=dinoThunder");
}

?>

<!doctype html>
<html lang="en">

<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>MVC Demo</title>
  <link rel="icon" href="../../icon/sunny-hat.png">
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-SgOJa3DmI69IUzQ2PVdRZhwQ+dy64/BUtbMJw1MZ8t5HZApcHrRKUc4W0kG879m7" crossorigin="anonymous">

  <style>
    body {
      background-image: url('img/bg.jpg');
      background-size: cover;
      background-attachment: fixed;
      background-position: center;
      background-color: rgba(0, 0, 0, 0.3);
      background-blend-mode: darken;
    }

    .card {
      overflow: hidden;
      border-radius: 0.75rem;
    }

    .card img {
      transition: 0.3s ease;
    }

    .card img:hover {
      transform: scale(1.05);
      cursor: pointer;
    }
  </style>
</head>

<body>

  <nav class="navbar navbar-expand-lg navbar-dark" style="background-color: black;">
    <div class="container-fluid d-flex flex-wrap justify-content-between align-items-center">

      <!-- 3 side-by-side images -->
      <div class="d-flex align-items-center gap-3">
        <img src="img/nav1.png" alt="Logo 1" class="img-fluid" style="max-width: 80px; height: auto;">
        <img src="img/nav2.png" alt="Logo 2" class="img-fluid" style="max-width: 80px; height: auto;">
        <img src="img/nav3.png" alt="Logo 3" class="img-fluid" style="max-width: 80px; height: auto;">
      </div>

    </div>
  </nav>


  <div class="container-fluid mt-3">
    <div class="row">

      <div class="col-12 col-sm-4 col-md-3 col-lg-3 mb-3">
        <div class="card shadow rounded-5 p-3 h-100" style="background-color: black; color: white;">
          <h4 class="my-1">Power Rangers</h4>

          <a href="?page=dinoThunder" type="button"
            class="btn btn-dark position-relative my-1 d-flex align-items-center justify-content-start">
            <img src="img/nav1.png" alt="Dino Thunder" class="img-fluid"
              style="max-width: 80px; height: auto; margin-right: 10px;">
            Dino Thunder
          </a>

          <a href="?page=ninjaStorm" type="button"
            class="btn btn-dark position-relative my-1 d-flex align-items-center justify-content-start">
            <img src="img/nav2.png" alt="Ninja Storm" class="img-fluid"
              style="max-width: 80px; height: auto; margin-right: 10px;">
            Ninja Storm
          </a>

          <a href="?page=spd" type="button"
            class="btn btn-dark position-relative my-1 d-flex align-items-center justify-content-start">
            <img src="img/nav3.png" alt="SPD" class="img-fluid"
              style="max-width: 80px; height: auto; margin-right: 10px;">
            SPD
          </a>

        </div>
      </div>



      <div class="col-12 col-sm-8 col-md-9 col-lg-9 mb-3">
        <div class="card shadow rounded-5 p-4"
          style="max-height: 85vh; max-height: 85vh; overflow: auto; background-color: #212529; color: white;">
          <div class="d-flex flex-wrap gap-5">
            <?php include("shared/" . $page . ".php"); ?>
          </div>
        </div>
      </div>

    </div>
  </div>

  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.5/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-k6d4wzSIapyDyv1kpU366/PK5hCdSbCRGRCMv+eplOQJWyd1fbcAu9OCUj5zNLiq"
    crossorigin="anonymous"></script>
</body>


</html>