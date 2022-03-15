const User = require('../models/user')

module.exports = function (router) {
  const bodyParser = require('body-parser')
  router.use(bodyParser.json({ extended: true }))

  // AUTH ROUTE
  const authController = require('../controller/authController')
  router.post('/auth', async (req, res) => {
    const credentials = req.body
    const response = await authController.login(credentials)
    res.status(response.statusCode).send(response)
  })

  // REGISTER NEW USER ROUTE
  const userController = require('../controller/userController')
  router.post('/register-user', async (req, res) => {
    const result = await userController.register(req.body)
    res.send(result)
  })
}
