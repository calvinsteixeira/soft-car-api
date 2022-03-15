const User = require('../models/user')

module.exports = {
  register: async newUser => {
    try {
      await User.create(
        {
          name: newUser.name,
          username: newUser.username,
          password: newUser.password
        },
        { fields: ['name', 'username', 'password'] }
      )
      return 'Usuário cadastrado com sucesso'
    } catch (err) {
      return 'Usuário não cadastrado'
    }
  }
}