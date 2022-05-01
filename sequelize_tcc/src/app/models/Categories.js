const { DataTypes, Model } = require("sequelize");

class Categories extends Model {
  static init(connection) {
    super.init(
      {
        name: DataTypes.STRING,
      },
      {
        sequelize: connection,
      }
    );

    return this;  
  }
}

module.exports = Categories;
