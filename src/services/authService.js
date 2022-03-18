const User = require('../models/user')

async function login(clientCredentials) {
  const bcrypt = require('../utils/bcrypt')

  const dbCredentials = await User.findOne({
    where: {
      username: clientCredentials.username
    },
    attributes: ['username', 'password']
  })
  const validCredentials = await bcrypt.comparePassword(
    clientCredentials.password,
    dbCredentials.password
  )

  if (validCredentials === true) {
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
