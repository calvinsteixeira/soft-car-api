const Sequelize = require('sequelize')
const Op = Sequelize.Op
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USERNAME,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_TYPE
  }
)

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco dados: OK'))
  .catch(() => console.log('Conexão com o banco de dados: FALHA'))

module.exports = {
  sequelize,
  Op
}
