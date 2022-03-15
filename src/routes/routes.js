const User = require('../models/user')

module.exports = function (router) {
  // CONTROLLERS
  const authController = require('../controller/authController')
  const userController = require('../controller/userController')

  const bodyParser = require('body-parser')
  router.use(bodyParser.json({ extended: true }))

  // AUTH ROUTE

  router.post('/auth', async (req, res) => {
    const credentials = req.body
    const response = await authController.login(credentials)
    res.status(response.statusCode).send(response)
  })

  // REGISTER NEW USER ROUTE

  router.post('/register-user', async (req, res) => {
    const response = await userController.register(req.body)
    // res.status(response.statusCode).send(response)
    res.status(response.statusCode).send(response)
  })
}
