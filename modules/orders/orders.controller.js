const db = require("../../models");
const Orders = db.orders;

const { Op } = require("sequelize");
const { sequelize } = require("../../models");

// Find All Orders
exports.findAll = (req, res) => {
    try {
        Orders.findAll({})
            .then(async orders => {
                res.send(orders);
            })
            .catch(err => {
                res.status(500).send({
                    message:
                        err.message || "Some error occurred while retrieving orders."
                });
            });
    } catch (err) {
        res.status(500).send({
            message:
                err.message || "Some error occurred."
        });
    }
};
