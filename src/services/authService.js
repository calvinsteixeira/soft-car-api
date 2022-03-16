const User = require('../models/user')

async function login(clientCredentials) {
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
      data: {
        message: 'User not found'
      }
    }
  } else if (
    (clientCredentials.username === dbCredentials.username) &
    (clientCredentials.password === dbCredentials.password)
  ) {
    return {
      hasError: false,
      statusCode: 200,
      data: {
        message: 'Login sucessfull'
      }
    }
  } else {
    return {
      hasError: true,
      statusCode: 401,
      data: {
        message: 'Invalid credentials'
      }
    }
  }
}

module.exports = {
  login
}
