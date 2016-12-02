//instancia o schema
var Tarefa = require("../Model/TarefaModel.js");


//rotas
//app.method('route', callback(req,res){})
module.exports = function(app){
  app.get('/', function (req, res) {
  	res.json({
              "":"Bem Vindo a Index do Projeto!",
              "Rotas": [{
                "Method": "Post",
                "Rota": "/insert",
                "Header": "Content-type:application/json",
                "Tipo de Parametro": "Json",
                "Parametros": {
                  "titulo": "string",
                  "descricao": "string"
                }
              },
              {
                "Method": "Put",
                "Rota": "/update",
                "Header": "Content-type:application/json",
                "Tipo de Parametro": "Json",
                "Parametros": {
                  "id": "String",
                  "titulo": "string",
                  "descricao": "string"
                }
              },
              {
                "Method": "Delete",
                "Rota": "/delete",
                "Header": "Content-type:application/json",
                "Tipo de Parametro": "Json",
                "Parametros": {
                  "id": "String"
                }
              },
              {
                "Method": "Get",
                "Rota": "/select",
                "Header": "Content-type:application/json",
                "Tipo de Parametro": "Json"
              },
              {
                "Method": "Get",
                "Rota": "/select-one/{id:string}",
                "Header": "Content-type:application/json",
                "Tipo de Parametro": "Json"
              }]
            });
  	console.log("Index.");
  });

  app.post('/insert', function (req, res) {
  	console.log("Insert.");
  	//set de dados na instancia
  	var tarefa = new Tarefa({
  		titulo: req.body.titulo,
  		descricao: req.body.descricao
  	});

    //efetua insert
  	tarefa.save(function(err) {
  		if (err){
  		    res.json({"status": false, "message": err});
  		}
  		else{
  			res.json({"status": true, "message": "Cadastro efetuado"});
  		}
  	});
  });

  app.put('/update', function (req, res) {
  	console.log("Update.");
    var query = {_id: req.body.id};
    var updateQuery = {"titulo" : req.body.titulo, "descricao": req.body.descricao};
    Tarefa.update(query, {"$set": updateQuery}, function(err){
      if (err){
  		    res.json({"status": false, "message": err});
  		}
  		else{
  			res.json({"status": true, "message": "Alteração efetuada"});
  		}
    });
    //res.json({ "method":"Put method", "body": req.body});

  });

  app.delete('/delete', function (req, res) {
  	console.log("Delete.");
    var query = {_id: req.body.id};
    //var updateQuery = {"titulo" : req.body.titulo, "descricao": req.body.descricao};
    Tarefa.remove(query, function(err){
      if (err){
  		    res.json({"status": false, "message": err});
  		}
  		else{
  			res.json({"status": true, "message": "Exclusão efetuada"});
  		}
    });

  });

  app.get('/select', function (req, res) {
  	console.log("Select.");
  	Tarefa.find({}, function(err, docs) {
  	    if (!err){
  	        res.json({"status": true, "results": docs});
  	    }
  			else {
  				res.json({"status": false, "message": err});
  			}
  	});

  });

  app.get('/select-one/:id', function (req, res) {
  	console.log("Select.");
  	Tarefa.find({_id: req.params.id}, function(err, docs) {
  	    if (!err){
  	        res.json({"status": true, "results": docs});
  	    }
  			else {
  				res.json({"status": false, "message": err});
  			}
  	});

  });

};
