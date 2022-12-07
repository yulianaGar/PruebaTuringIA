<?php 
$correo=$_POST['mail'];

mail('yuligarciag1@gmail.com','titulo',' Mensaje de '.$correo);
echo 'ok';
?>
