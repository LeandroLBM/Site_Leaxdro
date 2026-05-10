use avaliacao_proj;
show tables;
create table cadastro (
idCadastro int primary key auto_increment,
nome varchar(45) not null,
sobrenome varchar (100) not null,
email varchar(150)not null unique,
senha varchar(20)not null
);
create table usuario (
idUsuario int primary key auto_increment,
nickname varchar(45),
fkCadastro int not null,
constraint fk_cadastro foreign key (fkCadastro) references cadastro(idCadastro)
);
create table avbase (
idAv int primary key auto_increment,
fkUsuario int not null,
constraint fk_Usuario foreign key (fkUsuario) references usuario(idUsuario),
nota_tematica int,
nota_informacoes int,
nota_desing int,
nota_geral int,
dtAvaliacao datetime default current_timestamp
);
insert into cadastro (nome, sobrenome, email, senha) values
('leandro','mendes','leandro.mendes@sptech.school','Urubu@100');
insert into usuario (nickname,fkCadastro) values
('leaxdro',1);
insert into avbase (fkUsuario, nota_tematica, nota_informacoes, nota_desing, nota_geral, dtAvaliacao) values
(1,5, 3, 4, 3, default);
select * from cadastro;
select * from usuario;
select * from avbase;
