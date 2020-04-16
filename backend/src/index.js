const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');//Passar o caminho relativo
//const valor definido
const app = express();
//mongodb+srv://<username>:<password>@cluster0-vevvq.mongodb.net/test?retryWrites=true&w=majority
mongoose.connect('mongodb+srv://omnistack:teste@cluster0-vevvq.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
});


app.use(express.json()); //- algo que será valido para toda aplicação
app.use(routes);
/**
 * get - recebe informação, listar usuários, buscar um usuário
 * post - criar informação, salvar produto
 * put - editar informações
 * delete - apagar informações
 * 
 * Tipos de parâmetros:
 * Query Params - request.query  - utilizado no metodo get, usado para filtros, ordenação paginação
 * Route params - request.params - usado metodo put e delete -  identificar um recurso na alteração e remoção
 * Body - request.body - dados para criação e alteração de um registro.
 */
//Request recebe informações do backend.


app.listen(3333);