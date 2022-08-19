const helper = require('../../utils/helper')
const db = require('../../models')
const { type, styles, brands } = require('../../utils/constants')


const Products = db.products

// Create and Save a new Product
exports.create = async (req, res) => {
  try {
    const user_id = req.userId
    const product = {
        product_name: req.body.product_name.trim(),
        description: req.body.description.trim(),
        style: req.body.style.trim(),
        brand: req.body.brand.trim(),
        createdAt: new Date(),
        updatedAt: new Date(),
        url: req.body.url.trim(),
        product_type: req.body.product_type.trim(),
        shipping_price: req.body.shipping_price,
        note: req.body.note.trim(),
        admin_id: user_id
    }

    Products.create(product)
      .then(() => res.status(200).send({message: 'Product successfully created.'}))
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while creating the product.'
        })
      })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Find All Products
exports.findAll = (req, res) => {
  try {
    let { offset, limit } = helper.getOffsetLimit(req.query)
    let { order, orderByError } = helper.getProductsOrderBy(req.query)

    if (orderByError) return res.status(500).send({orderByError})

    Products.findAndCountAll({ offset, limit, order })
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving products.'
        })
      })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Find All Products Types
exports.findAllTypes = (req, res) => {
  try {
    res.send(type)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Find All Products Brands
exports.findAllBrands = (req, res) => {
  try {
    res.send(brands)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Find All Products Styles
exports.findAllStyles = (req, res) => {
  try {
    res.send(styles)
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Find Product by ID
exports.findById = (req, res) => {
  try {
    Products.findOne({where: { id: req.params.productId }})
      .then(data => res.send(data))
      .catch(err => {
        res.status(500).send({
          message: err.message || 'Some error occurred while retrieving products.'
        })
      })
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Update a product by the id in the request
exports.update = (req, res) => {
  try {
    const product = {
      product_name: req.body.product_name.trim(),
      description: req.body.description.trim(),
      style: req.body.style.trim(),
      brand: req.body.brand.trim(),
      updatedAt: new Date(),
      url: req.body.url.trim(),
      product_type: req.body.product_type.trim(),
      shipping_price: req.body.shipping_price,
      note: req.body.note.trim()
    }

    Products.update(product, { where: { id: req.params.productId } })
      .then(num => {
        if (num == 1)
          res.send({message: 'Product was updated successfully.'})
        else
          res.send({message: `Cannot update product. Maybe product was not found!`})
      })
      .catch(() => res.status(500).send({ message: 'Error updating product.' }))
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}

// Delete a product with the specified id in the request
exports.deleteById = (req, res) => {
  try {
    Products.destroy({
      where: { id: req.params.productId }
    })
      .then(num => res.send({ 
        message: num == 1? 
        'Product is successfully deleted.':
        'Cannot delete product. product was not found.' 
      }))
      .catch(() => res.status(500).send({ message: 'Error updating product' }))
  } catch (err) {
    res.status(500).send({
      message: err.message || 'Some error occurred.'
    })
  }
}
