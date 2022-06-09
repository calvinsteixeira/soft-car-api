const User = require("../models/user");
const Op = require("../models/database").Op;

async function register(newUser) {
  const userExists = await User.findOne({
    where: {
      CPF: newUser.CPF,
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
    await User.create(
      {
        CPF: newUser.CPF,
        name: newUser.name,
        username: newUser.username,
        password: newUser.password,
      },
      { fields: ["CPF", "name", "username", "password"] }
    );

    await bcrypt.encryptPassword(newUser.CPF, newUser.password);

    return {
      statusCode: 200,
      headers: {
        "Access-Control-Allow-Headers": "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "POST",
      },
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
