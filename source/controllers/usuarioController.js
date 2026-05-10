var cadastroModel = require("../models/usuarioModel");
var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {

    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está undefined!");

    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");

    } else {

        usuarioModel.autenticar(email, senha)
            .then(function (resultadoAutenticar) {

                console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`);

                if (resultadoAutenticar.length == 1) {

                    console.log(resultadoAutenticar);

                    res.json({
                        idCadastro: resultadoAutenticar[0].idCadastro,
                        nome: resultadoAutenticar[0].nome,
                        sobrenome: resultadoAutenticar[0].sobrenome,
                        usuarioId: resultadoAutenticar[0].usuarioId
                    });

                } else if (resultadoAutenticar.length == 0) {

                    res.status(403).send("Email e/ou senha inválido(s)");

                } else {

                    res.status(403).send("Mais de um usuário com o mesmo login e senha!");

                }

            }).catch(function (erro) {

                console.log(erro);
                console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);

                res.status(500).json(erro.sqlMessage);

            });
    }
}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var sobrenome = req.body.sobrenomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var nickname = req.body.nicknameServer;

    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (sobrenome == undefined) {
        res.status(400).send("Seu sobrenome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("sua senha está undefined!");
    } else if (nickname == undefined) {
        res.status(400).send("Seu nickname está undefined!");
    }

    cadastroModel.cadastrar(nome, sobrenome, email, senha, nickname).then(function (resposta) {
        res.status(200).send("Usuário criado com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    })
}
module.exports = {
    cadastrar,
    autenticar
}