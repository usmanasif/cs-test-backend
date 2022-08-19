'use strict'

module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    street_address: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    apartment: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    state: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    country_code: {
      type: DataTypes.STRING,
      allowNull: false
    },
    zip: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    phone_number: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    order_status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_ref: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    transaction_id: {
      type: DataTypes.STRING,
      allowNull: false
    },
    payment_amt_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ship_charged_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    ship_cost_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    subtotal_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    total_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    shipper_name: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    payment_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shipped_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    tracking_number: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    tax_total_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, { timestamps: true })

  orders.associate = models => {
    // associations can be defined here
    orders.belongsTo(models.products, { foreignKey: { name: 'product_id' }})
  }
  
  return orders
}
