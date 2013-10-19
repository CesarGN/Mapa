<?php


$usuario = $_GET['usuario'];
$opc = $_GET['opc'];
$lugar = $_GET['lugar'];
$con = mysqli_connect("localhost", "root", "", "mapa");

switch ($opc) {
    case 1:
        $sql = "insert into usuario (nombre) values ('" . $usuario . "')";
        
        if (!mysqli_query($con, $sql)) {
            die('Error: ' . mysqli_error($con));
        }
        break;
    case 2:
        $sql = "select id_usuario from usuario where nombre = '" . $usuario."' limit 1";
        $result = mysqli_query($con, $sql);
        $row = mysqli_fetch_array($result); 
        $id=$row['id_usuario'];
        
        echo $id;
        echo $lugar;
        echo $usuario;
        if($usuario!=null && $id!=0){
           $sql2 = "insert into favoritos (id_usuario,nombre) values ('" . $id . "','".$lugar."')";
        
        if (!mysqli_query($con, $sql2)) {
            die('Error: ' . mysqli_error($con));
        } 
        }
        
        
        break;
}



mysqli_close($con);
?>