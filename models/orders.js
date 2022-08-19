'use strict';

module.exports = (sequelize, DataTypes) => {
  const orders = sequelize.define('orders', {
    street_address: DataTypes.TEXT,
    apartment: DataTypes.TEXT,
    city: DataTypes.TEXT,
    state: DataTypes.TEXT,
    country_code: DataTypes.STRING,
    zip: DataTypes.TEXT,
    phone_number: DataTypes.STRING,
    email: DataTypes.TEXT,
    name: DataTypes.STRING,
    order_status: DataTypes.STRING,
    payment_ref: DataTypes.TEXT,
    transaction_id: DataTypes.STRING,
    payment_amt_cents: DataTypes.INTEGER,
    ship_charged_cents: DataTypes.INTEGER,
    ship_cost_cents: DataTypes.INTEGER,
    subtotal_cents: DataTypes.INTEGER,
    total_cents: DataTypes.INTEGER,
    shipper_name: DataTypes.TEXT,
    payment_date: DataTypes.DATE,
    shipped_date: DataTypes.DATE,
    tracking_number: DataTypes.TEXT,
    tax_total_cents: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    updated_at: DataTypes.DATE,
  }, { timestamps: false });

  orders.associate = function (models) {
    // associations can be defined here
    // orders.belongsTo(models.products, { foreignKey: { name: "product_id" }})
  };
  
  return orders;
};
