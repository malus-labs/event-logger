const Sequelize = require("sequelize");
const db = require("./../database/db");

const Partner = db.define("partners", {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

  store_id: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },

}, {
  timestamps: false
});

module.exports = Partner;