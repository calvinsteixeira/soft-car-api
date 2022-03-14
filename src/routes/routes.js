const User = require('../models/user')

module.exports = function (router) {
  const bodyParser = require('body-parser')
  router.use(bodyParser.json({ extended: true }))
  const authController = require('../controller/authController')

  // AUTH ROUTE
  router.post('/auth', async (req, res) => {
    const credentials = req.body
    const response = await authController.login(credentials)
    res.send(response)
  })

 
}
