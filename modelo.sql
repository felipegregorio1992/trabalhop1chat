CREATE DATABASE IF NOT EXISTS cadastrop1;

create table Cliente(
id int not null auto_increment primary key,
nome varchar(50) not null,
senha varchar(50) not null,
cpf varchar(14) not null,
email varchar(50) not null,
telefone varchar(17) not null,
endereco varchar(50) not null,
cidade varchar(50) not null,
estado varchar(50) not null,
cep varchar(8) not null
);

INSERT INTO Cliente (`id`, `nome`, `senha`, `cpf`, `email`, `telefone`, `endereco`, `cidade`, `estado`, `cep`) VALUES(NULL,'felipe','123','12345678910','felipe@gmail.com','12345678910','rua 1','sao paulo','sp','12345678');
INSERT INTO Cliente (`id`, `nome`, `senha`, `cpf`, `email`, `telefone`, `endereco`, `cidade`, `estado`, `cep`) VALUES(NULL,'felipe','123','12345678910','felipe2@gmail.com','12345678910','rua 1','sao paulo','sp','12345678');
INSERT INTO Cliente (`id`, `nome`, `senha`, `cpf`, `email`, `telefone`, `endereco`, `cidade`, `estado`, `cep`) VALUES(NULL,'felipe','123','12345678910','felipe3@gmail.com ','12345678910','rua 1','sao paulo','sp','12345678');
INSERT INTO Cliente (`id`, `nome`, `senha`, `cpf`, `email`, `telefone`, `endereco`, `cidade`, `estado`, `cep`) VALUES(NULL,'felipe','123','12345678910','felipe4@gmail.com','12345678910','rua 1','sao paulo','sp','12345678');