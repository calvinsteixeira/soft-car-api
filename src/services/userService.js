const User = require('../models/user')
const Op = require('../models/database').Op

async function register(newUser) {
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

async function getUser(user) {
  const users = await User.findAll({
    where: {
      name: {
        [Op.like]: `${user.data}%`
      }
    }
  })

  if (!users) {
    return {
      hasError: true,
      statusCode: 404,
      message: 'Users not found'
    }
  } else {
    return {
      hasError: false,
      statusCode: 200,
      data: {
        users
      }
    }
  }
}

module.exports = {
  register,
  getUser
}
