module.exports = function (router) {
  // CONTROLLERS
  const authController = require("../controller/authController");
  const productsController = require("../controller/productsController");

  // AUTH ROUTE

  router.post("/auth", cors(), async (req, res) => {
    const response = await authController.login(req.body);
    res.status(response.statusCode).send(response.data);
  });

  // REGISTER NEW USER ROUTE

  router.post("/register-user", cors(), async (req, res) => {
    const response = await userController.register(req.body);
    res.status(response.statusCode).send(response.data);
  });

  // GET USERS ROUTE

  router.get("/get-cars", cors(), async (req, res) => {
    const response = await productsController.getCars();
    res.status(response.statusCode).send(response.data);
  });
};
