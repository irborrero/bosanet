<?php
if(isset($_POST['submit'])){

    echo 'hello';

    $to = "irborrero@gmail.com"; // this is your Email address
    $from = "irborrero@gmail.com"; // this is the sender's Email address
    $first_name = "ISABELLA";
    $last_name = "RAMIREZ";
    $subject = "Form submission";
    $subject2 = "Copy of your form submission";
    $message = $first_name . " " . $last_name . " wrote the following:" . "\n\n" ;
    $message2 = "Here is a copy of your message " . $first_name . "\n\n" ;

    $headers = "From:" . $from;
    $headers2 = "From:" . $to;

    mail($to,$subject,$message,$headers);
    mail($from,$subject2,$message2,$headers2); // sends a copy of the message to the sender
    echo "Mail Sent. Thank you " . $first_name . ", we will contact you shortly.";
    // You can also use header('Location: thank_you.php'); to redirect to another page.


    header('Location: index0.html');

}
?>
