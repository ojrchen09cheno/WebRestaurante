//require('dotenv').config();
import * as dotenv from "dotenv"

dotenv.config({path: '../../.env'});

const config = {
    env: process.env.NODE_ENV || 'dev',
    port: process.env.PORT || 3002,
    dbUser: process.env.DB_USER,
    dbHost: process.env.DB_HOST,
    dbPassword: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
    dbPort: process.env.DB_PORT || 5432,
}

module.exports = { config };