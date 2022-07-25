//https://medium.com/the-node-js-collection/making-your-node-js-work-everywhere-with-environment-variables-2da8cdf6e786

const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  dbuser: process.env.PGUSER,
  dbhost: process.env.PGHOST,
  dbname: process.env.PGDATABASE,
  dbpassword: process.env.PGPASSWORD,
  dbport: process.env.PGPORT,
};