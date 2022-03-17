const User = require('../models/user')

async function login(clientCredentials) {
  const dbCredentials = await User.findOne({
    where: {
      username: clientCredentials.username
    },
    attributes: ['username', 'password']
  })
  const validCredentials =
    (clientCredentials.username === dbCredentials.username) &
    (clientCredentials.password === dbCredentials.password)

  if (dbCredentials & validCredentials) {
    return {
      statusCode: 200,
      data: {
        hasError: false,
        message: 'Login realizado com sucesso'
      }
    }
  } else {
    return {
      statusCode: 401,
      data: {
        hasError: true,
        message: 'Credenciais inválidas'
      }
    }
  }
}

module.exports = {
  login
}
