require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
  DROP TABLE IF EXISTS ratings;
  DROP TABLE IF EXISTS jokes;
  DROP TABLE IF EXISTS profiles;
`)
  .then(
    () => console.log('drop tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });