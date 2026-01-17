'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Airport extends Model {
    /**
     * npx sequelize model:generate --name Airport --attributes name:String,address:String,cityId:integer
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    // models has access to all the models in our project...
    static associate(models) {
      // define association here
      // Airport belongs to City
      this.belongsTo(models.City, {
        foreignKey: 'cityId',
        onDelete: 'CASCADE' // on deleting city, will delete all airports✅
      })
    }
  }
  Airport.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    address: DataTypes.STRING,
    cityId: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'Airport',
  });
  return Airport;
};