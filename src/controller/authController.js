const authService = require('../services/authService')

async function login(credentials) {
  const response = await authService.login(credentials)
  return response
}

module.exports = {
  login
}