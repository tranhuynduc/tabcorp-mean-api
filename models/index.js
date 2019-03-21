const fs = require('fs');
const path = require('path');
const basename = path.basename(__filename);
const models = {};
const mongoose = require('mongoose');
const CONFIG = require('../config/configs');

if (CONFIG.dbHost !== '') {
  fs.readdirSync(__dirname)
    .filter(
      file =>
        file.indexOf('.') !== 0 &&
        file !== basename &&
        file.slice(-3) === '.js',
    )
    .forEach(file => {
      const filename = file.split('.')[0];
      const modelName = filename.charAt(0).toUpperCase() + filename.slice(1);
      /* eslint-disable global-require */
      models[modelName] = require(`./${file}`);
    });

  mongoose.Promise = global.Promise;
  const mongodb = `mongodb://${CONFIG.dbUser}:${CONFIG.dbPassword}${CONFIG.dbHost}:${CONFIG.dbPort}/${CONFIG.dbName}`;
  // const mongodb = `mongodb://admin:123qwe@ds119984.mlab.com:19984/fresh-system`;
  mongoose
    .connect(
      mongodb,
      { useNewUrlParser: true, useCreateIndex: true },
    )
    .catch(err => {
      console.log(`*** Can Not Connect to Mongo Server:${mongodb}: ${err}`);
    });

  const db = mongoose.connection;
  module.exports = db;
  db.once('open', () => {
    console.log(`Connected to mongo at ${mongodb}`);
  });
  db.on('error', error => {
    console.log('error', error);
  });
} else {
  console.log('No Mongo Credentials Given');
}

module.exports = models;
