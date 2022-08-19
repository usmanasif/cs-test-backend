const http = require('http')
const express = require('express')

const appConfig = require('./config/app')
const routes = require('./routes/routes')
const db = require('./models')

class Server {
  constructor() {
    this.app = express()

    db.sequelize.sync({ logging: false })
      .then(() => {})
      .catch(() => {})
  }

  appConfig() {
    new appConfig(this.app).includeConfig()
  }

  includeRoute() {
    new routes(this.app).routesConfig()
  }

  async appExecute() {
    const port = process.env.PORT || 5000

    this.appConfig()
    this.includeRoute()
    
    var server = http.createServer(this.app)
    server.listen(port)
  }
}

const app = new Server()
app.appExecute()
