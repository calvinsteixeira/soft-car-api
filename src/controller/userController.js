const userService = require('../services/userService')

module.exports = {
  register: async (newUser) => {
    const result = await userService.register(newUser)
    return result
  },
  getUsers: async (user) => {
    const result = await userService.getUsers(user)
    return result
  }
}