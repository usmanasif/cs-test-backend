'use strict'

module.exports = (sequelize, DataTypes) => {
  const users = sequelize.define('users', {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_hash: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password_plain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    superadmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    shop_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    remember_token: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_brand: {
      type: DataTypes.STRING,
      allowNull: false
    },
    card_last_four: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trial_ends_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
    shop_domain: {
      type: DataTypes.STRING,
      allowNull: false
    },
    is_enabled: {
      type: DataTypes.BOOLEAN,
      allowNull: false
    },
    billing_plan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    trial_starts_at: {
      type: DataTypes.DATE,
      allowNull: false
    },
  }, { timestamps: true })

  users.associate = models => {
    // associations can be defined here
    users.hasMany(models.products, { foreignKey: { name: 'admin_id' }})
  }
  
  return users
}
