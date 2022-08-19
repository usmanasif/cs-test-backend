const db = require('../../models')
const helper = require('../../utils/helper')
const { attributes } = require('../../utils/constants')

const Inventory = db.inventory
const Orders = db.orders
const Products = db.products

// Find All Orders
exports.findAll = (req, res) => {
  try {
    let { offset, limit } = helper.getOffsetLimit(req.query)
    let { orderOptions, productOptions } = helper.ordersFilterOptions(req.query)
    let { order, inventoryOrder, productOrder, orderByError } = helper.getOrderBy(req.query)

    if (orderByError) return res.status(500).send({orderByError})

    Orders.findAndCountAll({
      where: orderOptions,
      include: [{
        model: Products,
        where: productOptions,
        include: [{
          model: Inventory,
          attributes: attributes.order_product_inventory,
          order: inventoryOrder
        }],
        attributes: attributes.order_products,
        order: productOrder
      }],
      offset, limit, order,
      attributes: attributes.orders
    })
      .then(async ({ rows }) => {
        let sale = await helper.getTotalSale()
        let { totalOrders, totalSale, average } = await helper.getSaleState(sale)

        res.send({ totalSale, average, count: totalOrders, rows })
      })
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving orders.'
        })
      })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}
