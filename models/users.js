'use strict';

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password_hash: DataTypes.STRING,
    password_plain: DataTypes.STRING,
    superadmin: DataTypes.BOOLEAN,
    shop_name: DataTypes.STRING,
    remember_token: DataTypes.STRING,
    card_brand: DataTypes.STRING,
    card_last_four: DataTypes.STRING,
    trial_ends_at: DataTypes.DATE,
    shop_domain: DataTypes.STRING,
    is_enabled: DataTypes.BOOLEAN,
    billing_plan: DataTypes.STRING,
    trial_starts_at: DataTypes.DATE,
  }, { timestamps: false });

  users.associate = function (models) {
    // associations can be defined here
    // users.hasMany(models.products)
  };
  
  return users;
};
