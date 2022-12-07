<?php 
$nombre=$_POST['name'];
$correo=$_POST['correo'];
$telefono=$_POST['tel'];
$puesto=$_POST['puesto'];
$empresa=$_POST['empresa'];
$mensaje=$_POST['sms'];

mail('yuligarciag1@gmail.com','titulo',$mensaje.' de '.$nombre);
echo 'ok';
?>
