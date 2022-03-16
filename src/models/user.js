const { Model, Sequelize } = require('sequelize')
const database = require('./database').sequelize

class User extends Model {}

User.init(
  {
    CPF: {
      type: Sequelize.STRING(11),
      allowNull: false,
      primaryKey: true,
      unique: true
    },
    name: {
      type: Sequelize.STRING(20),
      allowNull: false,
      len: [2, 20]
    },
    username: {
      type: Sequelize.STRING(10),
      allowNull: false,
      len: [4, 8]
    },
    password: {
      type: Sequelize.STRING(10),
      allowNull: false,
      len: [4, 8]
    }
  },
  { sequelize: database, modelName: 'users', timestamps: false }
)

User.sync()

module.exports = User
