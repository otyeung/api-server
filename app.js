const express = require("express")
const jsonServer = require("json-server")
const helmet = require("helmet")

const app = express()
const router = jsonServer.router("db.json")

app.use(helmet())
app.use(jsonServer.defaults())
app.use(router)

const port = 3000
app.listen(port, () => {
  console.log(`API server running on port ${port}`)
})
