const User = require('../models/user')
const Op = require('../models/database').Op

async function register(newUser) {
  const userExists = await User.findOne({
    where: {
      CPF: newUser.CPF
    }
  })

  if (!userExists) {
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
      hasError: false,
      statusCode: 200,
      data: {
        message: 'Usuário cadastrado com sucesso'
      }
    }
  } else {
    return {
      hasError: true,
      statusCode: 409,
      data: {
        message: 'Usuário já possui cadastro'
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
      hasError: true,
      statusCode: 404,
      data: {
        message: 'Users not found'
      }
      
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
