const { Sequelize, Model, DataTypes } = require('sequelize')
const database = require('./database')

class User extends Model {}

User.init(
  {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    password: DataTypes.STRING
  },
  { sequelize: database, modelName: 'user' }
)
