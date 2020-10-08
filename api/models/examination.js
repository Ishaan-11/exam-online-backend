const {
  Model
} = require('sequelize');
const JsonApiModel = require('base/jsonApiModel');

class Examination extends JsonApiModel {
  static attributes = ['id', 'title', 'description', 'primaryPrice', 'secondaryPrice', 'start', 'registrationEnd']

  static associate(models) {
    // define association here
  }
};

module.exports = (sequelize, DataTypes) => {
  Examination.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      defaultValue: '',
      allowNull: false
    },
    primaryPrice: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    secondaryPrice: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    start: {
      type: DataTypes.DATE,
      allowNull: false
    },
    registrationEnd: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    sequelize,
    modelName: 'examinations',
  });
  return Examination;
};