const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'authenticate_database',
  'admin',
  '@m4rk3t1ng',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco dados: OK'))
  .catch(() => console.log('Conexão com o banco de dados: FALHA'))

module.exports = sequelize
