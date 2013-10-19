addEvent(window, 'load', inicializa, true);

function inicializa() {
    var boton = document.getElementById("Registrar");
    addEvent(boton, 'click', procesar, false);  
    
    var boton2 = document.getElementById("calcula");
    addEvent(boton2, 'click',calcRoute(), false);  
    
    
}

var conexion;

function registra(url) {
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
    var botones = document.getElementById('favoritos');
    if (conexion.readyState === 4)
    {

        botones.innerHTML = conexion.responseText;
        var boton = document.getElementById("Registrar");
        addEvent(boton, 'click', procesar, false);
    }
    else
    {

        capa_comen.innerHTML = 'Espera!!!';
    }
}

function procesar(e)
{
    var url = "Registro.php?usuario=";
    var usuario;

    if (window.event) {
        window.event.returnValue = false;
        usuario = document.getElementById("usuario_reg").value;
        
        registra(url + usuario + "&opc=1&lugar=ninguno");
    }
}



function registro(lugar) {
    var url = "Registro.php?usuario=";
    var usuario;
    if (window.event)
    {
        window.event.returnValue = false;
        usuario = document.getElementById("usuario").value
        document.getElementById("nombre2").value=usuario;
        registra(url + usuario + "&opc=2&lugar=" + lugar);
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
    else {

        if (elemento.addEventListener)
        {
            elemento.addEventListener(nomevento, funcion, captura);
            return true;
        }
        else
            return false;
    }
}




