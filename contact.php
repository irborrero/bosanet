<?php
if(isset($_POST['submit'])){

    $email = $_POST['Email'];
    $message = $_POST['Message'];
    $formcontent="From: $name \n Message: $message";
    $recipient = "irborrero@gmail.com";
    $subject = "Contact Form";
    $mailheader = "From: $email \r\n";
    mail($recipient, $subject, $formcontent, $mailheader) or die("Error!");
    echo "Thank You!";
    //header('Location: index0.html');

}
?>
