'use strict'

const jwt = require('../utils/jwt')

const authenticationRouteHandler = require('../modules/authentication/router')
const inventoriesRouteHandler = require('../modules/inventories/router')
const ordersRouteHandler = require('../modules/orders/router')
const productsRouteHandler = require('../modules/products/router')

class Routes {
  constructor(app) {
    this.app = app
    this.version = process.env.API_VERSION
  }
  
  /* creating app Routes starts */
  appRoutes() {
    this.app.use(`${this.version}auth`, authenticationRouteHandler)
    this.app.use(`${this.version}orders`, jwt.protect, ordersRouteHandler)
    this.app.use(`${this.version}inventories`, jwt.protect, inventoriesRouteHandler)
    this.app.use(`${this.version}products`, jwt.protect, productsRouteHandler)
    
    /* Others */
    this.app.get('/', (req, res) => {
      res.send('Server Running')
    })
  }

  routesConfig() {
    this.appRoutes()
  }
}

module.exports = Routes
