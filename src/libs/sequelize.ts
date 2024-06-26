const { Sequelize } = require('sequelize');
const setupModels = require('../infrastructure/postgres/models/setup');
const { config } = require('../config/config');

export const sequelize = new Sequelize(
    config.dbName,
    config.dbUser,
    config.dbPassword,
    {
        host: config.dbHost,
        dialect: 'postgres'
    }
);

sequelize.sync();
setupModels(sequelize);

module.exports = sequelize;