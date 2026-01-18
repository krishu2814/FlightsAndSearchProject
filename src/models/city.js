'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class City extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * 1 - many || many - many
     */

    // ✅Assocition is Important
    static associate(models) {
      // define association here -> refer sequelize association
      // models has access to all the model
      
      // -> City has many Airport
      this.hasMany(models.Airport, {
        foreignKey: 'cityId',
      });

    }
  }
  City.init({
    name: {
      type: DataTypes.STRING, 
      allowNull: false,
      unique: true
    },
  }, {
    sequelize, // Register this model with this Sequelize instance.
    modelName: 'City',
    // tableName: 'Cities'
  });
  return City;
};