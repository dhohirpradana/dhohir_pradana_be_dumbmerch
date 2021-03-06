"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Address extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Address.belongsTo(models.Profile, {
        as: "profile",
        foreignKey: {
          name: "idProfile",
        },
      });
    }
  }
  Address.init(
    {
      detail: DataTypes.STRING,
      city: DataTypes.INTEGER,
      idProfile: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Address",
    }
  );
  return Address;
};
