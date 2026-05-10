var database = require("../database/config")

function cadastrar(nome, sobrenome, email, senha, nickname) {

    var cadastro = `
        INSERT INTO cadastro (nome, sobrenome, email, senha) VALUES ('${nome}','${sobrenome}','${email}','${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + cadastro);

    return database.executar(cadastro)
        .then(function (resultadoCadastro) {

            var idCadastro = resultadoCadastro.insertId;

            var usuario = `
                INSERT INTO usuario (nickname, fkCadastro) VALUES ('${nickname}', ${idCadastro});
            `;
            console.log("Executando SQL: \n" + usuario);

            return database.executar(usuario);
        });
}

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idCadastro, nome, sobrenome, email FROM cadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}
module.exports = {
    cadastrar,
    autenticar
};
