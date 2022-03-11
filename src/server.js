const express = require('express')
const routes = require('./routes/routes')
const cors = require('cors')
const app = express()
const router = express.Router()
const user = require('./models/user')


app.use(cors())
app.use('/', router)
routes(router)

// INICIANDO O SERVIDOR

app.listen(process.env.PORT || 3000)
