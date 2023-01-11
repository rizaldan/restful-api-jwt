const { authJwt } = require("../middlewares");
const controller = require("../controllers/car.controller");

module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });

  app.get("/api/cars", controller.publicBoard);

  app.get("/api/cars/list", [authJwt.verifyToken], controller.userfindAll);

  app.post("/api/cars/create", [authJwt.verifyToken, authJwt.isAdmin], controller.create);

};
