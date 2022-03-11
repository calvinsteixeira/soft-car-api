const { Sequelize, Model, DataTypes } = require('sequelize')
const sequelize = new Sequelize('authenticate_database', 'admin', '@m4rk3t1ng', {
  host: 'localhost',
  dialect: 'mysql'
})

sequelize.authenticate().then(() => console.log('Conexão com o banco de dados realizada com sucesso')).catch(() => console.log('Falha na conexão com o banco de dados'))

module.export = sequelize

