const userService = require("../services/userService");

async function register(newUser) {
  const result = await userService.register(newUser);
  return result;
}

module.exports = {
  register,
};
