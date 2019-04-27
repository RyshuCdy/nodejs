const Router = require("express").Router();
const indexController = require("../controller/index");
Router.get("/ryshu",indexController.datashow);

Router.get("/form",indexController.formshow);

Router.post("/formSubmit",indexController.formSubmit);

module.exports = Router;