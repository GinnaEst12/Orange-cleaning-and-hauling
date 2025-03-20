<?php
// Database connection
$conn = mysqli_connect("localhost", "your_username", "your_password", "your_database_name");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $firstname = $_POST['firstname'];
    $lastname = $_POST['lastname'];
    $email = $_POST['mail'];
    $phone = $_POST['phone'];
    $message = $_POST['message'];
    
    // Insert into database
    $sql = "INSERT INTO contact_submissions (firstname, lastname, email, phone, message) 
            VALUES ('$firstname', '$lastname', '$email', '$phone', '$message')";
    
    mysqli_query($conn, $sql);
}

header('Location: ../submitting.html');
?>
