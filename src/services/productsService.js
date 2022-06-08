const Car = require("../models/car");

async function getCars() {
  const cars = await Car.findAll();

  if (cars) {
    return {
      statusCode: 200,
      data: {
        cars,
        hasError: false,
        message: "Existem dados",
      },
    };
  } else {
    return {
      statusCode: 404,
      data: {
        hasError: true,
        message: "Sem dados",
      },
    };
  }
}

module.exports = {
  getCars,
};
