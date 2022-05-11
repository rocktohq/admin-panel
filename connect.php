<?php
error_reporting(0);
/*
* Application Developed by Saidul Mursalin
* Database Connection Configuration
*/

// DB Information
$hostName = 'localhost';    // Host Name
$dbName = 'students';       // Database Name
$dbUser = 'students';       // Database Username
$dbPass = 'students321';    // Database Password

// Let's try to Connect
$connect = new mysqli($hostName, $dbUser, $dbPass, $dbName);

// If there is any Error
if($connect->connect_errno) {
  echo "<strong>Failed to connect to MySQL:</strong> " . $connect->connect_error;
  exit();
}

?>