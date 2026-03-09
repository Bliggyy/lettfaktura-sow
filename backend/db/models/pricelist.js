"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pricelist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Pricelist.init(
    {
      articleNo: { type: DataTypes.UUID, defaultValue: DataTypes.UUIDV4 },
      product: DataTypes.STRING,
      inPrice: DataTypes.DOUBLE,
      price: DataTypes.DOUBLE,
      unit: DataTypes.STRING,
      inStock: DataTypes.INTEGER,
      description: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: "Pricelist",
    },
  );
  return Pricelist;
};
