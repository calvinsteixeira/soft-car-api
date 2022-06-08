const User = require("../models/user");

async function login(clientCredentials) {
  const bcrypt = require("../utils/bcrypt");

  const dbCredentials = await User.findOne({
    where: {
      username: clientCredentials.username,
    },
    attributes: ["username", "password"],
  });

  if (!dbCredentials) {
    return {
      statusCode: 404,
      data: {
        hasError: true,
        message: "Usuário não cadastrado",
      },
    };
  } else {
    const match = await bcrypt.comparePassword(
      clientCredentials.password,
      dbCredentials.password
    );

    if (match) {
      return {
        statusCode: 200,
        data: {
          hasError: false,
          message: "Login realizado com sucesso",
        },
      };
    } else {
      return {
        statusCode: 401,
        data: {
          hasError: true,
          message: "Usuário ou senha incorretos",
        },
      };
    }
  }
}

module.exports = {
  login,
};
