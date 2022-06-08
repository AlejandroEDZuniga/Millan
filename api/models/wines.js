const S = require("sequelize");
const db = require("../db");

class Wines extends S.Model {}

Wines.init(
  {
    id: {
      type: S.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    brand: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    varietal: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
    harvest: {
      type: S.INTEGER,
      allowNull: false,
    },
    lotnumber: {
      type: S.INTEGER,
      allowNull: false,
    },
    exportbill: {
      type: S.INTEGER,
      allowNull: false,
    },
    dispatchday: {
      type: S.INTEGER,
      allowNull: false,
    },
    destiny: {
      type: S.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
        notNull: true,
      },
    },
  },
  { sequelize: db, modelName: "wines", timestamps: false }
);

module.exports = Wines;
