<?php

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "knoq_data";

$conn = mysqli_connect($servername, $username, $password, $dbname);

if ($conn) {
    echo "Connected successfully";
}   

$name = $_POST['name']; 
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

$sql = "INSERT INTO `knoq_form_data` (`name`, `email`, `phone`, `message`) VALUES ('$name','$email','$phone','$message')";

$result = mysqli_query($conn, $sql);

if ($result) {
    header("Location: success.php");
    exit();
} else {
    echo "Error: " . mysqli_error($conn);
}

?>