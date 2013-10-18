<?php

$latitud=$_GET["latitud"];
$longitud =$_GET["longitud"];
  $id = "DemoAppId01082013GAL";
  $codigo = "AJKnXv84fjrb0KIHawS0Tg";
  $opciones = array(
    'http' => array(
    'method' => 'GET',
    'header' => 'Accept: application/json'
    )
  );
$contexto=stream_context_create($opciones);
$url = 'http://demo.places.nlp.nokia.com/places/v1/discover/explore?at='.$latitud.','.$longitud.'&app_id='.$id.'&app_code='.$codigo.'&tf=plain&pretty=true';
$datos = file_get_contents($url, false, $contexto);
echo $datos;
?>
