const express = require('express')
const routes = require('./routes/routes')
const app = express()
const router = express.Router()

app.use('/', router)
routes(router)

// INICIANDO O SERVIDOR

app.listen(proces.env.PORT || 3000)
