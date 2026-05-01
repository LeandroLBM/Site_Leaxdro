create database avaliacao_proj;
use avaliacao_proj;

create table cadastro (
id int primary key auto_increment,
nome varchar(45),
sobrenome varchar (100),
email varchar(150),
senha varchar(20)
);

create table login (
id int primary key auto_increment,
nome varchar(45),
sobrenome varchar (100),
email varchar(150),
cadastro_id int unique,
constraint fkcadastro foreign key (cadastro_id) references cadastro(id)
);

insert into cadastro values
(default,'Leandro','Bezerra Mendes','Leandro.Mendes@sptech.school','Urubu100');
insert into login values
(default,'Leandro','Bezerra Mendes','Leandro.Mendes@sptech.school','1');
select * from cadastro;
select * from login;

create table avbasica (
id int primary key auto_increment,
av_geral float,
av_ideia float,
av_construcao_projeto float,
av_aplicacao_materias float,
av_utilidade float,
comentario varchar (255),
dtavaliacao datetime default current_timestamp,
fk_login int,
constraint fklogin foreign key (fk_login) references login(id)
);
insert into avbasica values
(default, '4','5','3','5','5','',default,1);
select * from avbasica;
select login.nome, avbasica.* from
	avbasica join login on avbasica.fk_login = login.id;