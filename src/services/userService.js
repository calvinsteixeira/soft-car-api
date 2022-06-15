const User = require("../models/user");
const Op = require("../models/database").Op;

async function register(newUser) {
  const userExists = await User.findOne({
    where: {
      cpf: newUser.cpf,
    },
  });

  if (userExists) {
    return {
      statusCode: 409,
      data: {
        hasError: true,
        message: "Usuário já possui cadastro",
      },
    };
  } else {
    const bcrypt = require("../utils/bcrypt");
    const passwordEncrypted = await bcrypt.encryptPassword(newUser.password);

    await User.create(
      {
        cpf: newUser.cpf,
        name: newUser.name,
        username: newUser.username,
        password: passwordEncrypted,
      },
      { fields: ["cpf", "name", "username", "password"] }
    );

    return {
      statusCode: 200,
      data: {
        hasError: false,
        message: "Usuário cadastrado com sucesso",
      },
    };
  }
}

async function getUser(username) {
  const user = await User.findOne({
    where: {
      username: username,
    },
    attributes: ["username", "CPF"],
  });

  if (!user) {
    return {
      statusCode: 404,
      data: {
        hasError: true,
        message: "Usuário não encontrado",
      },
    };
  } else {
    return {
      statusCode: 200,
      data: {
        hasError: false,
        user,
      },
    };
  }
}

module.exports = {
  register,
  getUser,
};
