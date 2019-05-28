//paquetes necesarios para el proyecto
var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var controladorPeliculas = require('./controladores/controladorPeliculas');
var app = express();
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(bodyParser.json());

//funciones del controlador

app.get('/peliculas/recomendacion', controladorPeliculas.recomendador);
app.get('/peliculas', controladorPeliculas.filtrarPeliculas);
app.get('/peliculas/:id', controladorPeliculas.infoPelicula);
app.get('/generos', controladorPeliculas.listaGeneros);
//seteamos el puerto en el cual va a escuchar los pedidos la aplicación
var puerto = '8080';

var conexionBaseDeDatos = require('./lib/conexionbd');



app.listen(puerto, function () {
  console.log("Escuchando pedidos en el puerto " + puerto);
  conexionBaseDeDatos.connect((err) => {
    if (err) {
      console.log(err)
    } else {
      console.log("La conexión a la base de datos fue exitosa!")
    }

  })
});


