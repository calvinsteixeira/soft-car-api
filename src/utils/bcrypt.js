const bcrypt = require('bcrypt')
const User = require('../models/user')

async function encryptPassword(userCPF,password) {
  const saultRounds = 15
  await bcrypt.hash(password, saultRounds, (err, hash) => {
    User.update({password: hash}, {
      where: {
        CPF: userCPF
      }
    })
  })
}

async function comparePassword(clientPassword, dbPassword) {
  return await bcrypt.compareSync(clientPassword, dbPassword)
}

module.exports = {
  encryptPassword,
  comparePassword
}
