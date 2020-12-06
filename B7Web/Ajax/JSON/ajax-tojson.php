<?php

$p =  $_POST;
$p['qt_name'] = strlen($_POST['name']);
echo json_encode($p);
?>