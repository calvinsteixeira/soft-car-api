const { Model, Sequelize } = require('sequelize')
const database = require('./database').sequelize

class User extends Model {}

User.init(
  {
    id: {
      autoIncrement: true,
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    name: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [2, 20]
    },
    username: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [4, 8]
    },
    password: {
      type: Sequelize.STRING,
      allowNull: false,
      len: [4, 8]
    }
  },
  { sequelize: database, modelName: 'users', timestamps: false }
)

User.sync()

module.exports = User
