// Importando o modulo express para a var express.
const express = require('express');

//Importando CORS
const cors = require('cors');

//Importando o arquivo routes
const routes = require('./routes');

// App armazena a aplicacao.
const app = express ();
// Usando JSON para as requisicoes. 
app.use(cors());
app.use(express.json());
app.use(routes);



app.listen(3333);