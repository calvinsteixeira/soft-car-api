const authService = require('../services/authService')

module.exports = {
  login: async (req, res) => {
    const credentials = req
    const response = await authService.login(credentials)
    return response
  }
}