const productsService = require("../services/productsService");

async function getCars() {
  const result = await productsService.getCars();
  return result;
}

module.exports = {
  getCars,
};
