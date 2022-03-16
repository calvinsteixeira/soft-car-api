const userService = require('../services/userService')

async function register(newUser) {
  const result = await userService.register(newUser)
  return result
}

async function getUser(user) {
  const result = await userService.getUsers(user)
  return result
}

module.exports = {
  register,
  getUser
}
