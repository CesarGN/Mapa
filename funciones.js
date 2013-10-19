
google.maps.event.addDomListener(window, 'load', initialize);

var directionsDisplay;
var directionsService;
var stepDisplay;
var markerArray = [];
var map;
var infowindow;
var lat;
var long;
var directionsService = new google.maps.DirectionsService();

function initialize() {

    directionsDisplay = new google.maps.DirectionsRenderer();
    lat = document.getElementById('latitud').value;
    long = document.getElementById('longitud').value;
    var mapOptions = {
        center: new google.maps.LatLng(lat, long),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.HYBRID
    };
    map = new google.maps.Map(document.getElementById('capaMapa'),
            mapOptions);

    var input = /** @type {HTMLInputElement} */(document.getElementById('searchTextField'));
    var autocomplete = new google.maps.places.Autocomplete(input);




    autocomplete.bindTo('bounds', map);

    infowindow = new google.maps.InfoWindow();
    var marker = new google.maps.Marker({
        map: map

    });

    google.maps.event.addListener(autocomplete, 'place_changed', function() {
        infowindow.close();
        marker.setVisible(false);
        input.className = '';
        var place = autocomplete.getPlace();
        if (!place.geometry) {
            // Inform the user that the place was not found and return.
            input.className = 'notfound';
            return;
        }

        // If the place has a geometry, then present it on a map.
        if (place.geometry.viewport) {
            map.fitBounds(place.geometry.viewport);
        } else {
            map.setCenter(place.geometry.location);
            map.setZoom(17);  // Why 17? Because it looks good.
        }
        marker.setIcon(/** @type {google.maps.Icon} */({
            url: place.icon,
            size: new google.maps.Size(71, 71),
            origin: new google.maps.Point(0, 0),
            anchor: new google.maps.Point(17, 34),
            scaledSize: new google.maps.Size(35, 35)
        }));
        var posicion = (place.geometry.location.toString());
        posicion = (posicion.substring(1, posicion.length - 1));
        var posic = posicion.split(",");


        document.getElementById("latitud").value = (posic[0]);
        document.getElementById("longitud").value = (posic[1]);
        marker.setPosition(place.geometry.location);
        marker.setVisible(true);

        var address = '';
        if (place.address_components) {
            address = [
                (place.address_components[0] && place.address_components[0].short_name || ''),
                (place.address_components[1] && place.address_components[1].short_name || ''),
                (place.address_components[2] && place.address_components[2].short_name || '')
            ].join(' ');
        }

        infowindow.setContent('<div><strong>' + place.name + '</strong><br>' + address);
        infowindow.open(map, marker);

    });

    // Sets a listener on a radio button to change the filter type on Places
    // Autocomplete.
}///acaba el metodo inicilite


function calcRoute() {

    var start = document.getElementById('start').value;
    var end = document.getElementById('end').value;
    var request = {
        origin: start,
        destination: end,
        travelMode: google.maps.TravelMode.DRIVING
    };
    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });
}

function calcula() {

    directionsDisplay.setMap(map);
    directionsDisplay.setPanel(document.getElementById('directions-panel'));
    calcRoute();
}


var arreglo = new Array();
var indice = 0;
var ini_tabla = '<table>';
var cuerpo1 = '<tr><td>';
var cuerpo2 = '</td><td>';
var boton1 = '<input type="button" value="Agregar" onClick="registro(';

var boton2 = ')" name="';
var boton3 = '"></td></tr>';
var fin_tabla = '</table>';
function buscarLugares() {
    var posicion = document.getElementById('interes').options.selectedIndex;

    lat = document.getElementById('latitud').value;
    long = document.getElementById('longitud').value;
    var request;
    switch (posicion) {
        case 0:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['food']
            };
            break;
        case 1  :
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['bakery']

            };
            break;
        case 2:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['cafe']
            };
            break;
        case 3:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['grocery_or_supermarket']

            };
            break;
        case 4:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['restaurant']

            };
            break;
        case 5:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000',
                types: ['store']
            };
            break;
        case 6:
            request = {
                location: new google.maps.LatLng(lat, long),
                radius: '1000'
            };
            break;
    }

    for (var i = 0; i < arreglo.length; i++) {//eliminar market`s del mapa para la busqueda de nuevos
        arreglo[i].setMap(null);
    }
    arreglo = new Array();
    if (indice !== 0) {
        indice = 0;
    }


    var service = new google.maps.places.PlacesService(map);
    service.nearbySearch(request, callback);
    var acum = ini_tabla;

    function callback(results, status) {

        if (status === google.maps.places.PlacesServiceStatus.OK) {
            for (var i = 0; i < results.length; i++) {
                createMarker(results[i]);
                if (i < 16) {
                    var objeto = results[i];

                    acum += cuerpo1 + objeto['name'];
                    acum += cuerpo2;
                    acum += boton1 + "'" + objeto['name'] + "'";
                    acum += boton2 + objeto['name'];
                    acum += boton3;
                }

            }
            acum += fin_tabla;
        }
        document.getElementById('lugares').innerHTML = acum;

    }

    function createMarker(place) {
        var marker = new google.maps.Marker({
            map: map,
            position: place.geometry.location
        });
        arreglo[indice] = marker;
        indice++;
        google.maps.event.addListener(marker, 'click', function() {

            infowindow.setContent(place.name);
            infowindow.open(map, this);
        });
    }


}





