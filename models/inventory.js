'use strict';

module.exports = (sequelize, DataTypes) => {
  const inventory = sequelize.define('inventory', {
    quantity: DataTypes.INTEGER,
    color: DataTypes.TEXT,
    size: DataTypes.TEXT,
    weight: DataTypes.DOUBLE,
    price_cents: DataTypes.INTEGER,
    sale_price_cents: DataTypes.INTEGER,
    cost_cents: DataTypes.INTEGER,
    sku: DataTypes.STRING,
    length: DataTypes.DOUBLE,
    width: DataTypes.DOUBLE,
    height: DataTypes.DOUBLE,
    note: DataTypes.TEXT,
  }, { timestamps: false });

  inventory.associate = function (models) {
    // associations can be defined here
    // inventory.belongsTo(models.products, { foreignKey: { name: "product_id" }})
  };
  
  return inventory;
};
