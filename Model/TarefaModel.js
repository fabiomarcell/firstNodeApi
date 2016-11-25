//objeto espelho do banco de dados
var Mongoose = require('mongoose');
var Schema = Mongoose.Schema;

var tarefaSchema = new Schema({
	titulo: String,
	descricao: String,
	subtarefas: []
});

module.exports = Mongoose.model('tarefas', tarefaSchema);