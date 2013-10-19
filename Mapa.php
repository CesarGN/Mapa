
<html>
    <head>
        <meta  charset="utf-8">
        <link href="estilos.css" rel="stylesheet">
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp&sensor=true&libraries=places"></script>

        <script src="funciones4.js" language="JavaScript"></script>
        <script src="funciones.js" language="JavaScript"></script>
        <script src="funciones2.js" language="JavaScript"></script>
        <script src="funciones3.js" language="JavaScript"></script>



    </head>
    <body>

        <div style="width: 100%; height: 550px;">
            <div  style="float: left; width: 25%; height: 100%; background-color: azure" >
                <div style="background-color: aqua">
                    <label><h3>REGISTRATE</h3></label>
                    <div>
                        Usuario<input type="text" id="usuario_reg" value=""/> 
                        <input type="button" value="Registrar" id="Registrar">
                    </div>
                </div>
                <div>
                    <label><h3>MIS LUGARES FAVORITOS</h3></label>
                    <div>
                        Usuario<input type="text" id="nombre2"/> 
                        <input type="button" value="Ver" onClick="ver()">
                    </div>
                    <div id="favoritos"></div>

                </div>

            </div>


            <div id="capaMapa" style="float: left; width: 45%; height: 100%;" ></div>
            <div id="capaBotones" style="float: left; width: 30%; height: 100%; background-color: aliceblue; position: relative" >
                Buscar<input id="searchTextField" type="text" size="50">

                latitud<input type="text" id="latitud" value="20.5222222"/> 
                longitud<input type="text" id="longitud" value=" -100.81222220000001"/>
                <div>
                    <label>¿Que deseas buscar?</label>
                    <SELECT id="interes">
                        <?php
                        $tipos = array("food", "bakery", "cafe", "grocery_or_supermarket", "restaurant", 'store');
                        foreach ($tipos as $key => $value) :
                            ?>
                            <OPTION> <?php echo $tipos[$key]; ?></OPTION>
                        <?php endforeach; ?>
                    </SELECT>

                    <input type="button" value="Buscar" id="Buscar" onClick="buscarLugares()">
                    <div>
                        Usuario<input type="text" id="usuario" value=""/> 
                    </div>
                    <div id="lugares"></div>
                </div>
            </div>
        </div>


        <div style="width: 100%;">
            <div style="background-color: red;"><CENTER><h2>BÚSQUEDAS MAS CORTAS</h2></CENTER></div>
            <div>
                <div id="control">
                    <strong>Origen: </strong>
                    <select id="start">
                        <option value="Guerrero, México">Guerrero</option>
                        <option value="Guadalajara, México">Guadalajara</option>
                        <option value="Guanajuato, México">Guanajuato</option>
                        <option value="México">Mexico</option>
                        <option value="San Diego, California">San Diego</option>
                        <option value="Yucatán, México">Yucatan</option>
                        <option value="Chihuahua, México">Chihuahua</option>
                        <option value="Monterrey, México">Monterrey</option>
                        <option value="Querétaro, México">Querétaro</option>
                        <option value="Mazatlán, México">Mazatlán</option>
                        <option value="Puerto Vallarta, México">Puerto Vallarta</option>
                        <option value="Oaxaca, México">Oaxaca</option>
                    </select>
                    <strong>Destino: </strong>
                    <select id="end">
                        <option value="Florida">Florida</option>
                        <option value="Texas">Texas</option>
                        <option value="Hidalgo, México">Hidalgo</option>
                        <option value="Los Mochis, México">Los Mochis</option>
                        <option value="Los Cabos, México">Los Cabos</option>
                        <option value="Celaya, México">Celaya</option>
                        <option value="Coyoacán, Ciudad de México, México">Coyoacán, Ciudad Mexico</option>
                        <option value="San Miguel de Allende, México">San Miguel de Allende</option>
                        <option value="Chicago, Illinois">Chicago, Illinois</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Hermosillo, México">Hermosillo</option>
                        <option value="Manzanillo, México">Manzanillo</option>
                    </select>
                    <input type="button" value="Calcular" id="calcula"onClick="calcula()">
                </div>
            </div>
            <div id="directions-panel"></div>
        </div>
    </body>
</html>