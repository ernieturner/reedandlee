<?php
date_default_timezone_set('America/Denver');

require 'flight/Flight.php';

Flight::route('/', function(){
    Flight::render('main');
});

Flight::start();
?>
