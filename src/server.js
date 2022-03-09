const express = require('express')
const routes = require('./routes/routes')
const app = express()
const router = express.Router()
const cors = require('cors')

app.use(cors())
app.use('/', router)
routes(router)

// INICIANDO O SERVIDOR

app.listen(process.env.PORT || 3000)
