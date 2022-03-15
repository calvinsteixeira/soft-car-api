const User = require('../models/user')

module.exports = {
  login: async clientCredentials => {
    const dbCredentials = await User.findOne({
      where: {
        username: clientCredentials.username
      },
      attributes: ['username', 'password']
    })

    if (!dbCredentials) {
      return {
        hasError: true,
        statusCode: 404,
        message: 'User not found'
      }
    } else if (
      (clientCredentials.username === dbCredentials.username) &
      (clientCredentials.password === dbCredentials.password)
    ) {
      return {
        hasError: false,
        statusCode: 200,
        message: 'Login sucessfull'
      }
    } else {
      return {
        hasError: true,
        statusCode: 401,
        message: 'Invalid credentials'
      }
    }
  }
}
