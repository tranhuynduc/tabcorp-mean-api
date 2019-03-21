require('dotenv').config(); // instatiate environment variables

const CONFIG = {}; // Make this global to use all over the application

CONFIG.app = process.env.APP || 'development';
CONFIG.port = process.env.PORT || '3000';

CONFIG.dbDialect = process.env.DB_DIALECT || 'mongo';
CONFIG.dbHost = process.env.DB_HOST || 'localhost';
CONFIG.dbPort = process.env.DB_PORT || '27017';
CONFIG.dbName = process.env.DB_NAME || 'mearn';
CONFIG.dbUser = process.env.DB_USER || '';
CONFIG.dbPassword = process.env.DB_PASSWORD || '';

CONFIG.jwtEncryption = process.env.JWT_ENCRYPTION || 'mern';
CONFIG.jwtExpiration = process.env.JWT_EXPIRATION || '10000';
module.exports = CONFIG;
