const express = require('express')
const routes = require('./routes/routes')
const app = express()
const router = express.Router()

app.use('/', router)
routes(router)

// INICIANDO O SERVIDOR
const port = 3000
app.listen(port, () => {
  console.log('Servidor rodando na porta ' + port)
})
