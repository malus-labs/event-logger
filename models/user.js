const Sequelize = require("sequelize");
const db = require("./../database/db");

const User = db.define("users", {
  user_id: {
    type: Sequelize.INTEGER,
    allowNull: true,
    primaryKey: true,
  },

  wallet_address: {
    type: Sequelize.STRING,
    allowNull: false,
  },

}, {
  timestamps: false
});


module.exports = User;