<?php
if($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST["user_name"];
    $email = $_POST["user_email"];
    $subject = $_POST["user_subject"];
    $message = $_POST["user_message"];

    $recipient = "ngmingpok@gmail.com";
    $headers = "From: $name <$email>";

    mail($recipient, $subject, $message, $headers);
    echo "Message sent!";
} else {
    echo "Error!";
}
?>
