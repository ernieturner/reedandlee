<?php
date_default_timezone_set('America/Denver');

require 'flight/Flight.php';

Flight::route('/', function(){
    Flight::render('main');
});

Flight::route('/contact', function(){
    $name = trim($_POST['name']);
    $emailAddress = trim($_POST['email']);
    $message = trim($_POST['message']);

    if(!name || !emailAddress || !filter_var($emailAddress, FILTER_VALIDATE_EMAIL)){
        echo "No arguments Provided!";
        return false;
    }

    $to = 'info@reedandlee.com';

    //Check how many links were inserted into the comments to check for spam.
    if(substr_count($message, "<a href=") > 2){
        return false;
    }

    $emailSubject = "Contact form submitted by:  $name";
    $emailBody = "You have received a new message. \n\n".
                   " Here are the details:\n \nName: $name \n ".
                   "Email: $emailAddress\n Message \n $message";
    $headers = "From: info@reedandlee.com\n";
    $headers .= "Reply-To: $emailAddress";

    mail($to, $emailSubject, $emailBody, $headers);
    return true;
});

Flight::start();
?>
