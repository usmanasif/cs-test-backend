
'use strict';

const authenticationRouteHandler = require('../modules/authentication/router');
const ordersRouteHandler = require('../modules/orders/router');

class Routes {
    constructor(app) {
        this.app = app;
    }
    
    /* creating app Routes starts */
    appRoutes() {

        this.app.use("/api/v1/auth", authenticationRouteHandler)
        this.app.use("/api/v1/orders", ordersRouteHandler)
        
        /* Others */
        this.app.get("/", (req, res) => {
            res.send('Server Running');
        })
    }

    routesConfig() {
        this.appRoutes();
    }
}

module.exports = Routes;
