const User = require('../models/user')

module.exports = {
  register: async newUser => {
    const userExists = await User.findOne({
      where: {
        name: newUser.name
      }
    })

    if (!userExists) {
      await User.create(
        {
          name: newUser.name,
          username: newUser.username,
          password: newUser.password
        },
        { fields: ['name', 'username', 'password'] }
      )

      return {
        hasError: false,
        statusCode: 200,
        message: 'Usuário cadastrado com sucesso'
      }
    } else {
      return {
        hasError: true,
        statusCode: 409,
        message: 'Usuário já possui cadastrado'
      }
    }
  }
}
