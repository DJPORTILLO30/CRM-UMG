const { sequelize } = require("../../config/mysql")
const { DataTypes } = require("sequelize");

//Creación del modelo campañas
const Campaign = sequelize.define(
  "campañas",
  {
    propietarioCampania: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    nombreCampania: {
        type: DataTypes.STRING,
        allowNull: false
    },
    idTipoCampania: {
      type: DataTypes.NUMBER,
      allowNull: false
    },
    fechaInicio: {
        type: DataTypes.DATE,
        allowNull: false
    },
    fechaFin: {
        type: DataTypes.DATE,
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
      type: DataTypes.STRING,
  },

  },
  {
    timestamps: true,
  }
);

module.exports = Campaign;
