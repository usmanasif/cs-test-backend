const expressConfig = require('./express')
const bodyParser = require('body-parser')
const cors = require('cors')
const dotenv = require('dotenv')

class AppConfig {
  constructor(app) {
    dotenv.config()
    this.app = app
  }
  includeConfig() {
    this.app.use(cors())
    this.app.use(bodyParser.json())

    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', req.headers.origin)
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
      return next()
    })
    new expressConfig(this.app)
  }
}
module.exports = AppConfig
