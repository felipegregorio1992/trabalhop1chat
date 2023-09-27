require('dotenv').config();

const db = require('./db');

const express = require('express');
const session = require('express-session');
const Router = express();
const jwt = require('jsonwebtoken');

const bodyParser = require('body-parser');

Router.use(session({secret: 'wegfsd3sdgae4adg4ga4w'}));
Router.use(bodyParser.urlencoded({ extended:true }));


Router.delete("/clientes/:id", (req, res) => { //delete é para deletar
    const id = parseInt(req.params.id);
    db.deleteCustomer(id);
    res.sendStatus(204);
});

Router.patch("/clientes/:id", async (req, res) => {  //patch é para atualizar apenas um campo
    const id = parseInt(req.params.id);
    const customer = req.body;
    await db.updateCustomer(id, customer);
    res.sendStatus(200);
});

Router.post("/clientes", async (req, res) => {  //post é para inserir
    const customer = req.body;
    await db.insertCustomer(customer);
    res.redirect("/login");
    //next();
    //res.sendFile(__dirname + "/login/login.html");
    //res.sendStatus(201);
});

Router.get("/clientes/:id", async (req, res) => {  //get é para buscar por id
    const id = parseInt(req.params.id);
    const results = await db.selectCustomer(id);
    res.json(results); 
});

Router.get("/clientes", async (req, res) => {  //get é para buscar todos
    const results = await db.selectCustomers();
    res.json(results);
});

Router.post("/login", async (req, res) => {  //login
    const { email, senha } = req.body;
    const results = await db.loginCustomer(email, senha);

    if (results.length === 0) {
        res.sendStatus(401);
        return;
    }

    req.session.login = email;
    //res.render("logado");
    res.redirect("/logado");
    //res.json(results);
    
});

Router.get("/login", function(req, res){
    res.sendFile(__dirname + "/login/login.html");
});

Router.get("/cadastrar", function(req, res){
    res.sendFile(__dirname + "/login/registrar.html");
});

Router.get("/logado", function(req, res){
    if(req.session.login){
        res.sendFile(__dirname + "/login/logado.html");
    }else{
        res.redirect("/login");
    }
});

Router.get('/chat', (req, res) => {
  res.sendFile(__dirname + '/chat/chat.html');
});

Router.get("/logout", function(req, res){
    req.session.destroy();
    res.redirect("/login");
});



module.exports = Router;
