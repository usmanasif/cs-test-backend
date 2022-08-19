const db = require('../models')
const Op = db.Sequelize.Op
const Orders = db.orders
const Products = db.products
const Inventories = db.inventories
const { sequelize } = require('../models')

exports.getOffsetLimit = ({page=0, limit=20}) => {
  limit = +limit
  let offset = +(page * limit)
  return { limit, offset }
}

exports.inventoryFilterOptions = ({name, price, operator}) => {
  let productOptions = {}
  let inventoryOptions = {}
  let error = ''

  if (name)
    productOptions.product_name= {[Op.like]: '%'+name+'%'}
    
  if (price)
    if (operator == 'lt')
      inventoryOptions.quantity = {[Op.lt]: +price}
    else if (operator == 'gt')
      inventoryOptions.quantity = {[Op.gt]: +price}
    else if (operator == 'eq')
      inventoryOptions.quantity = {[Op.eq]: +price}
    else error = 'Invalid Operator.'
  
  return { productOptions, inventoryOptions, error }
}

exports.ordersFilterOptions = ({name, order_status, shipper}) => {
  let orderOptions = {}

  if (name) {
    orderOptions[Op.or]= [
      {name: {[Op.like]: '%'+name+'%'}},
      {email: {[Op.like]: '%'+name+'%'}},
      {transaction_id: {[Op.like]: '%'+name+'%'}},
      {tracking_number: {[Op.like]: '%'+name+'%'}},
    ]
  }

  if (order_status)
    orderOptions.order_status= {[Op.like]: '%'+order_status+'%'}

  if (shipper)
    orderOptions.shipper_name= {[Op.like]: '%'+shipper+'%'}
  
  return { orderOptions }
}

exports.getSaleState = async totalSale => {
  const totalOrders = await Orders.count()

  totalSale = +totalSale
  let average = totalSale/(+totalOrders)

  return { totalSale, average, totalOrders }
}

exports.getTotalSale = async (orderOptions) => {
  let sale = await Orders.findAll({
    where: orderOptions,
    attributes: [[sequelize.fn('sum', sequelize.col('total_cents')), 'totalSale']]
  })

  return sale[0].dataValues.totalSale
}

exports.getInventoriesOrderBy = ({sort_table_name, sort_column, sort_order}) => {
  let order = []
  let orderByError = ''

  if(sort_column && sort_order) {
    if(sort_table_name == 'inventories') order.push([sort_column, sort_order])
    else if(sort_table_name == 'products') order.push([Products, sort_column, sort_order])
    else if(sort_table_name == 'orders') order.push([Orders, sort_column, sort_order])
    else orderByError='Parameters missing for sorting.'
  }

  return { order, orderByError }
}

exports.getInventoriesOrderBy = ({sort_table_name, sort_column, sort_order}) => {
  let order = []
  let orderByError = ''

  if(sort_column && sort_order) {
    if(sort_table_name == 'inventories') order.push([sort_column, sort_order])
    else if(sort_table_name == 'products') order.push([Products, sort_column, sort_order])
    else orderByError='Parameters missing for sorting.'
  }

  return { order, orderByError }
}

exports.getOrdersOrderBy = ({sort_table_name, sort_column, sort_order}) => {
  let order = []
  let orderByError = ''

  if(sort_column && sort_order) {
    if(sort_table_name == 'inventories') order.push([Inventories, sort_column, sort_order])
    else if(sort_table_name == 'products') order.push([Products, sort_column, sort_order])
    else if(sort_table_name == 'orders') order.push([sort_column, sort_order])
    else orderByError='Parameters missing for sorting.'
  }

  return { order, orderByError }
}

exports.getProductsOrderBy = ({sort_table_name, sort_column, sort_order}) => {
  let order = []
  let orderByError = ''

  if(sort_column && sort_order) {
    if(sort_table_name == 'products') order.push([sort_column, sort_order])
    else orderByError='Parameters missing for sorting or invalid sorting.'
  }

  return { order, orderByError }
}
