var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/gerais", function (req, res) {
    metricasController.buscarMetricasGerais(req, res);
})

router.post("/cadastrar", function (req, res) {
    metricasController.cadastrar(req, res);
})
module.exports = router;