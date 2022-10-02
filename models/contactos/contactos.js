const { sequelize } = require("../../config/mysql");
const { DataTypes } = require("sequelize");

//Modelo del contactos

const Contact = sequelize.define(
    "contacts",
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
      company:{
        type:DataTypes.STRING,
      },
    },
    {
      timestamps: true,
    }
  );
  
  Contact.find = Contact.findAll;
  Contact.findById = Contact.findByPk;
  
  module.exports = Contact;
  