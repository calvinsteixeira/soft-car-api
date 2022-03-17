const User = require('../models/user')
const Op = require('../models/database').Op

async function register(newUser) {
  const userExists = await User.findOne({
    where: {
      CPF: newUser.CPF
    }
  })

  if (userExists) {
    return {
      statusCode: 409,
      data: {
        hasError: true,
        message: 'Usuário já possui cadastro'
      }
    }
  } else {
    await User.create(
      {
        CPF: newUser.CPF,
        name: newUser.name,
        username: newUser.username,
        password: newUser.password
      },
      { fields: ['CPF', 'name', 'username', 'password'] }
    )

    return {
      statusCode: 200,
      data: {
        hasError: false,
        message: 'Usuário cadastrado com sucesso'
      }
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
      statusCode: 404,
      data: {
        hasError: true,
        message: 'Users not found'
      }
    }
  } else {
    return {
      statusCode: 200,
      data: {
        hasError: false,
        users
      }
    }
  }
}

module.exports = {
  register,
  getUser
}
