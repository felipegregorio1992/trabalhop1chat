const mysql = require("mysql2/promise");

const client = mysql.createPool(process.env.CONNECTION_STRING);

async function selectCustomers(){
    const results = await client.query('SELECT * FROM cliente;');
    return results[0];
}

async function selectCustomer(id){
    const results = await client.query('SELECT * FROM cliente WHERE id = ?;', [id]);
    return results[0];
}

async function insertCustomer(customer){
    await client.query('INSERT INTO cliente (nome, senha, cpf, email, telefone, endereco, cidade, estado, cep) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?);', [customer.nome, customer.senha, customer.cpf, customer.email, customer.telefone, customer.endereco, customer.cidade, customer.estado, customer.cep]);
}

async function updateCustomer(id, customerNew){
    await client.query('UPDATE cliente SET nome=?, senha=?, cpf=?, email=?, telefone=?, endereco=?, cidade=?, estado=?, cep=? WHERE id = ?;', [ customerNew.nome, customerNew.senha, customerNew.cpf, customerNew.email, customerNew.telefone, customerNew.endereco, customerNew.cidade,
        customerNew.estado, customerNew.cep, id]);
}



async function deleteCustomer(id){
    await client.query('DELETE FROM cliente WHERE id = ?;', [id]);
}

async function loginCustomer(email, senha){ //query é para buscar
    const results = await client.query('SELECT * FROM cliente WHERE email = ? AND senha = ?;', [email, senha]); 
    return results[0];
}

module.exports = {
    selectCustomers,
    selectCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
    loginCustomer

};