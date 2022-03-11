const Sequelize = require('sequelize')
const sequelize = new Sequelize(
  'authenticate_database',
  'calvin',
  'calvintex7',
  {
    host: 'localhost',
    dialect: 'mysql'
  }
)

sequelize
  .authenticate()
  .then(() => console.log('Conexão com o banco de dados realizada com sucesso'))
  .catch(() => console.log('Falha na conexão com o banco de dados'))

module.exports = sequelize
