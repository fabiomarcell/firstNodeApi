//dependencias
var express = require('express');
//instancia
var app = express();

//acesso ao mongodb
var Mongoose = require('mongoose');
Mongoose.connect('mongodb://localhost/checklists');
var db = Mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Conectado!");
});

//rotas
require("./Controller/routes.js")(app);

var server = app.listen(8000, function () {
   console.log("Example app listening at 8000");
});
