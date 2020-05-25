<?php

    require("sendgrid-php/sendgrid-php.php");

    $from = new SendGrid\Email(null, "irborrero@gmail.com");
    $subject = "Hello World from the SendGrid PHP Library!";
    $to = new SendGrid\Email(null, "irborrero@gmail.com");
    $content = new SendGrid\Content("text/plain", "Hello, Email!");
    $mail = new SendGrid\Mail($from, $subject, $to, $content);

    $apiKey = getenv('SEke1vlhT_CH-yem_liXCw');
    $sg = new \SendGrid($apiKey);

    $response = $sg->client->mail()->send()->post($mail);
    echo $response->statusCode();
    echo $response->headers();
    echo $response->body();
    //header('Location: index0.html');

?>
