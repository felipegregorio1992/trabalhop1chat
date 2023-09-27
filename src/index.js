require('dotenv').config();
const express = require('express'); 
const http = require('http');
const Loaders = require('./mongo/index.js'); //importa o arquivo de conexão com o banco de dados

Loaders.start(); //inicia a conexão com o banco de dados

const configureSocket = require('./chat/chat.js'); //importa o arquivo de conexão com o chat

const routesLive = require('./mongo/routes.js'); //importa as rotas

const routes = require('./routes'); //importa as rotas

const app = express();

const server = http.createServer(app);

app.use(express.json());

app.use(routes);

app.use(routesLive); //usa as rotas



app.set('view engine', 'html'); //para usar o ejs

configureSocket(server);


app.get('/', (req, res, next) => {
    res.redirect("/login");
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`); //porta que o servidor vai rodar
});
