'use strict'

module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventory', {
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    color: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    size: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    weight: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    price_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sale_price_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    cost_cents: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    sku: {
      type: DataTypes.STRING,
      allowNull: false
    },
    length: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    width: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    height: {
      type: DataTypes.DOUBLE,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, { timestamps: false })

  inventory.associate = models => {
    // associations can be defined here
    inventory.belongsTo(models.products, { foreignKey: { name: 'product_id' }})
  }
  
  return inventory
}
