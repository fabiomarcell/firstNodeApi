//dependencias
var express = require('express');
//instancia
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//acesso ao mongodb

var Mongoose = require('mongoose');
Mongoose.Promise = global.Promise;
Mongoose.connect('mongodb://localhost/checklists');
var db = Mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	console.log("Conectado!");
});

// Zerei a Life no GIT :)

//rotas
require("./Controller/routes.js")(app);

var server = app.listen(8000, function () {
   console.log("Example app listening at 8000");
});
