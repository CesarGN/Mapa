<?php

header('Content-Type: text/html; charset=ISO-8859-1');
include ('../adodb5/adodb-pager.inc.php');
include ('../adodb5/adodb.inc.php');

$usuario = $_GET['usuario'];
$posicion = $_GET['posicion'];

$db = ADONewConnection('mysql');
$db->debug = false;
$db->Connect('localhost', 'root', '', 'mapa');

$sql = "SELECT f.id_favorito FROM favoritos f JOIN usuario u ON f.id_usuario = u.id_usuario
        WHERE u.nombre =  '" . $usuario . "' ORDER BY f.id_favorito DESC ";
$rs = $db->Execute($sql);

$arreglo_id = $rs->getArray();

$sql = "SELECT count(*) FROM favoritos f JOIN usuario u ON f.id_usuario = u.id_usuario
        WHERE u.nombre =  '" . $usuario . "'";
$rs = $db->Execute($sql);


$rows = $rs->getArray();
$arreglo_total = $rows[0][0];

$limite = 5;
$sql1 = ("SELECT f.nombre
FROM favoritos f
JOIN usuario u ON f.id_usuario = u.id_usuario
WHERE u.nombre =  '".$usuario."' && f.id_favorito <=  '".$arreglo_id[$posicion][0]."' ORDER BY f.id_favorito DESC 
LIMIT ".$limite);

$rse = $db->Execute($sql1);
$arreglo = $rse->getArray();


foreach ($arreglo as $key => $value) {
    $nom = $arreglo[$key][0];
    echo "<div><strong>$nom</strong></div>";
    echo "<div>_______________________</div>";
}
if ($posicion == 0) {
    $aux = $posicion + 1;
    echo "<a href='comentarios.php?posicion=$aux&usuario=$usuario' id='sig'>Siguiente</a>";
} else {
    if ($posicion + $limite >= $arreglo_total) {
        $aux = $posicion - 1;
        echo "<a href='comentarios.php?posicion=$aux&usuario=$usuario' id='ant'>Anterior</a>";
    } else {
        $aux = $posicion - 1;
        echo "<a href='comentarios.php?posicion=$aux&usuario=$usuario' id='ant'>Anterior</a>";
        $aux = $posicion + 1;
        echo "<a href='comentarios.php?posicion=$aux&usuario=$usuario' id='sig'>Siguiente</a>";
    }
}
?>