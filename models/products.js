'use strict';

module.exports = (sequelize, DataTypes) => {
  const products = sequelize.define('products', {
    product_name: DataTypes.STRING,
    description: DataTypes.TEXT,
    style: DataTypes.TEXT,
    brand: DataTypes.TEXT,
    url: DataTypes.STRING,
    product_type: DataTypes.STRING,
    shipping_price: DataTypes.INTEGER,
    note: DataTypes.TEXT,
  }, { timestamps: false });

  products.associate = function (models) {
    // associations can be defined here
    // products.belongsTo(models.users, { foreignKey: { name: "admin_id" }})
    // products.hasMany(models.inventory)
  };
  
  return products;
};
