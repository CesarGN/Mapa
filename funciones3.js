

function ver() {
    var usuario = document.getElementById('nombre2').value;
    document.getElementById('usuario').value=usuario;
    var url="comentarios.php?usuario="+usuario+"&posicion=0";
    cargarFavoritos(url);
}

var conexion;

function cargarFavoritos(url) {
    if (url === '')
    {
        return;
    }
    conexion = crearXMLHttpRequest();
    conexion.onreadystatechange = procesarEventos;
    conexion.open('GET', url, true);
    conexion.send(null);
}

function procesarEventos() {
    var capa_favoritos = document.getElementById('favoritos');
    if (conexion.readyState === 4)
    {
        capa_favoritos.innerHTML = conexion.responseText;

        var enlace1, enlace2;
        enlace1 = document.getElementById('sig');
        enlace2 = document.getElementById('ant');


        if (( enlace1 !== null) && ( enlace2 !== null)) {
            addEvent(enlace1, 'click', presionaEnlace, false);
            addEvent(enlace2, 'click', presionaEnlace, false);
            
        } else {
            if ( enlace2 !== null) {

                addEvent(enlace2, 'click', presionaEnlace, false);
                
                
            } else {
                if (enlace1 !== null) {

                    addEvent(enlace1, 'click', presionaEnlace, false);
                }
            }
        }
    }
    else
    {
        capa_favoritos.innerHTML = 'Espera!!!';
    }
}


function presionaEnlace(e)
{
    if (window.event) {
        window.event.returnValue = false;
        var url = window.event.srcElement.getAttribute('href');
        cargarFavoritos(url);
    }
    else {
        if (e) {
            e.preventDefault();
            var url = e.target.getAttribute('href');
            cargarPagina(url);
        }
    }

}

//_________-

function crearXMLHttpRequest()
{
    var xmlHttp = null;
    if (window.ActiveXObject)
        xmlHttp = new ActiveXObject('Microsoft.XMLHTTP');
    else
    if (window.XMLHttpRequest)
        xmlHttp = new XMLHttpRequest();
    return xmlHttp;
}


function addEvent(elemento, nomevento, funcion, captura)
{

    if (elemento.attachEvent)
    {
        elemento.attachEvent('on' + nomevento, funcion);
        return true;
    }
    else
    if (elemento.addEventListener)
    {
        elemento.addEventListener(nomevento, funcion, captura);
        return true;
    }
    else
        return false;
}


