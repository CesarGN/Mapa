
function crearXMLHttpRequest() 
{
  var xmlHttp=null;
  if (window.ActiveXObject) 
    xmlHttp = new ActiveXObject("Microsoft.XMLHTTP");
  else 
    if (window.XMLHttpRequest) 
      xmlHttp = new XMLHttpRequest();
  return xmlHttp;

}
var conexion;

function buscarLugares(){
    
    var latitud=document.getElementById("latitud").value;
    var longitud=document.getElementById("longitud").value;
    mapa.setCenter(new google.maps.LatLng(latitud,longitud));
    conexion= crearXMLHttpRequest();
    conexion.onreadystatechange=procesarEventos;
    conexion.open("GET","rest.php?latitud="+latitud+"&longitud="+longitud,true);
    conexion.send(null);
    
}

function procesarEventos(){
    if(conexion.readyState==4){
     var cadena=eval('('+conexion.responseText+')');
     mostrarLugares(cadena);
    }
}

function mostrarLugares(res)
{
  for(var k in res["results"]["items"]) {
    var latitud = res["results"]["items"][k]["position"][0];
    var longitud = res["results"]["items"][k]["position"][1];
    var titulo = res["results"]["items"][k]["title"];
    var icono = res["results"]["items"][k]["icon"];

    var marcador = new google.maps.Marker({
      position: new google.maps.LatLng(latitud, longitud),
      map: mapa,
      title: titulo,
      icon: {
        url: icono,
        scaledSize: new google.maps.Size(30, 30)
      }
    });
  }
}


