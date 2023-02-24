'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class messages extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      messages.belongsTo(models.User, {
        foreignKey: 'userId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  messages.init(
    {
      message: DataTypes.STRING,
      userId: {
        type: DataTypes.INTEGER,
        },
      },
    {
      sequelize,
      modelName: 'messages',
      tableName: 'messages',
    },
  );
  return messages;
};
