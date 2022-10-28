const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//Modelo del contactos

const Contact = sequelize.define(
  "contactos",
  {
    ownerContact: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    phone: {
        type: DataTypes.NUMBER,
        allowNull: false
    },
    department:{
      type:DataTypes.STRING,
    },
    address:{
      type:DataTypes.STRING,
    },
    description:{
      type:DataTypes.STRING,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = Contact;

  