var metricasModel = require("../models/metricasModel");

function buscarMetricasGerais(req, res) {

    metricasModel.buscarMetricasGerais()
        .then(resultado => {
            res.status(200).json(resultado);
        })
        .catch(erro => {
            console.log(erro);
            res.status(500).json(erro.sqlMessage);
        });
};

function cadastrar(req, res) {
    var tematica = req.body.tematicaServer;
    var informacoes = req.body.informacoesServer;
    var desing = req.body.desingServer;
    var geral = req.body.geralServer;

    // Faça as validações dos valores
    if (tematica == undefined) {
        res.status(400).send("A nota de tematica está undefined!");
    } else if (informacoes == undefined) {
        res.status(400).send("A nota de informações está undefined!");
    } else if (desing == undefined) {
        res.status(400).send("A nota de desing está undefined!");
    } else if (geral == undefined) {
        res.status(400).send("A nota de geral está undefined!");
    } else {

        metricasModel.cadastrar(tematica, informacoes, desing, geral)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro de notas! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}


module.exports = {
    buscarMetricasGerais,
    cadastrar
};
