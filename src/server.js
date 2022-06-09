require("dotenv").config();
const express = require("express");
const routes = require("./routes/routes");
const cors = require("cors");

const app = express();
const router = express.Router();

const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};

app.use(express.json());
app.use(cors(corsOptions));
app.use("/", router);
routes(router);

// INICIANDO O SERVIDOR

app.listen(process.env.PORT || 8080);
