var database = require("../database/config");

function buscarMetricasGerais() {

    var instrucaoSql = `
        SELECT 
            count(idAv) as avaliacoes,
            avg(nota_tematica) as media_tematica,
            avg(nota_informacoes) as media_informacoes,
            avg(nota_desing) as media_design,
            avg(nota_geral) as media_geral,
            max(dtAvaliacao) as Data_hora
        FROM avBase;
    `;

    return database.executar(instrucaoSql);
};

function cadastrar(tematica, informacoes, desing, geral) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", tematica, informacoes, desing, geral);

    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO avbase (nota_tematica, nota_informacoes, nota_desing, nota_geral) VALUES ('${tematica}', '${informacoes}', '${desing}', '${geral}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    buscarMetricasGerais,
    cadastrar
};