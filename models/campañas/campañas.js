const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

//Creación del modelo campañas
const Campaign = sequelize.define(
  "campaigns",
  {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    email: {
      type: DataTypes.STRING,
    },
    industry: {
        type: DataTypes.STRING,
    },
    city: {
        type: DataTypes.STRING,
    },
    state: {
        type: DataTypes.STRING,
    },

  },
  {
    timestamps: true,
  }
);

Campaign.find = Campaign.findAll;
Campaign.findById = Campaign.findByPk;

module.exports = Contact;