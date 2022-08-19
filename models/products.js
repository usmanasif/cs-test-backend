'use strict'

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    style: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    brand: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    url: {
      type: DataTypes.STRING,
      allowNull: false
    },
    product_type: {
      type: DataTypes.STRING,
      allowNull: false
    },
    shipping_price: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    note: {
      type: DataTypes.TEXT,
      allowNull: false
    },
  }, { timestamps: true })

  products.associate = models => {
    // associations can be defined here
    products.belongsTo(models.users, { foreignKey: { name: 'admin_id' }})
    products.hasMany(models.inventory, { foreignKey: { name: 'product_id' }})
  }
  
  return products
}
