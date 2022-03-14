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
      return 'Usuário ou senha incorreto'
    } else if (
      (clientCredentials.username === dbCredentials.username) &
      (clientCredentials.password === dbCredentials.password)
    ) {
      return 'Autenticação válida'
    }
  }
}


