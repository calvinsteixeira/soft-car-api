const bcrypt = require("bcrypt");
const User = require("../models/user");

async function encryptPassword(password) {
  const saultRounds = 15;
  const hash = await bcrypt.hashSync(password, saultRounds);
  return hash;
}

async function comparePassword(clientPassword, dbPassword) {
  return await bcrypt.compareSync(clientPassword, dbPassword);
}

module.exports = {
  encryptPassword,
  comparePassword,
};
