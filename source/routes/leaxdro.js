var express = require("express");
var router = express.Router();

var leaxdroController = require("../controllers/leaxdro_controller");

router.get("/:Id", function (req, res) {
  leaxdroController.buscarUsuarios(req, res);
});

router.post("/cadastrar", function (req, res) {
  leaxdroController.cadastrar(req, res);
})

module.exports = router;