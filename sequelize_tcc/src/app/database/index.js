const Sequelize = require("sequelize");
const dbConfig = require("../../config/database");

const Categories = require("../models/Categories.js");

const connection = new Sequelize(dbConfig);

Categories.init(connection);

module.exports = connection;
