const { Model, Sequelize } = require("sequelize");
const database = require("./database").sequelize;

class Car extends Model {}

Car.init(
  {
    id: {
      type: Sequelize.INTEGER(),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      unique: true,
    },
    modelo: {
      type: Sequelize.STRING(40),
      allowNull: false,
    },
    descricao: {
      type: Sequelize.STRING(255),
      allowNull: false,
    },
    preco: {
      type: Sequelize.INTEGER(),
      allowNull: false,
    },
  },
  { sequelize: database, modelName: "cars", timestamps: false }
);

Car.sync();

module.exports = Car;
