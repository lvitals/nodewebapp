'use strict';

var fs = require('fs');
var path = require('path');
var Sequelize = require('sequelize');
var yaml_config = require('node-yaml-config');
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || 'development';
var config = yaml_config.load(__dirname + '/../config/config.yml');
var db = {};

if (config.use_env_variable) {
    var sequelize = new Sequelize(process.env[config.use_env_variable]);
}
else {
    var sequelize = new Sequelize(config.database.db,
                                  config.database.user,
                                  config.database.password, config.database);
}

fs
  .readdirSync(__dirname)
  .filter(function(file) {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(function(file) {
    var model = sequelize['import'](path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach(function(modelName) {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
