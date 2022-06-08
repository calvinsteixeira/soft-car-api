const Sequelize = require("sequelize");
const Op = Sequelize.Op;

if (process.env.CLEARDB_DATABASE_URL) {
  sequelize = new Sequelize(process.env.CLEARDB_DATABASE_URL);
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
      host: process.env.DB_HOST,
      dialect: process.env.DB_TYPE,
      port: 3306,
    }
  );
}

sequelize
  .authenticate()
  .then(() => console.log("Conexão com o banco dados: OK"))
  .catch(() => console.log("Conexão com o banco de dados: FALHA"));

module.exports = {
  sequelize,
  Op,
};
