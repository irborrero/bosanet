<?php

    require('./sendgrid-php/sendgrid-php.php');

    /*
    $from = new SendGrid\Email(null, "irborrero@gmail.com");
    $subject = "Hello World from the SendGrid PHP Library!";
    $to = new SendGrid\Email(null, "irborrero@gmail.com");
    $content = new SendGrid\Content("text/plain", "Hello, Email!");
    $mail = new SendGrid\Mail($from, $subject, $to, $content);

    $apiKey = getenv('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');
    $sg = new \SendGrid($apiKey);

    $response = $sg->client->mail()->send()->post($mail);
    echo $response->statusCode();
    echo $response->headers();
    echo $response->body();
    //
    */

    header('Location: index0.html');

?>
