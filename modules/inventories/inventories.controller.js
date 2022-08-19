const db = require('../../models')
const helper = require('../../utils/helper')
const { attributes } = require('../../utils/constants')

const Inventory = db.inventory
const Products = db.products

// Find All inventories 
exports.findAll = (req, res) => {
  try {
    var { offset, limit } = helper.getOffsetLimit(req.query)
    let { productOptions, inventoryOptions, error } = helper.inventoryFilterOptions(req.query)
    let { inventoryOrder, productOrder, orderByError } = helper.getOrderBy(req.query)

    if (error) return res.status(500).send({error})
    if (orderByError) return res.status(500).send({orderByError})

    Inventory.findAndCountAll({
      where: inventoryOptions,
      include: [{
        model: Products,
        where: productOptions,
        attributes: attributes.inventory_products,
        order: productOrder
      }],
      offset, limit, order: inventoryOrder,
      attributes: attributes.inventory,
    })
      .then(inventory => res.send(inventory))
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving inventories.'
        })
      })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}
