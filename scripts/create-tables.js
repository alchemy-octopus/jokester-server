require('dotenv').config();
const client = require('../lib/db-client');

client.query(`
  CREATE TABLE IF NOT EXISTS profiles (
    id SERIAL PRIMARY KEY,
    username VARCHAR(256) NOT NULL,
    hash VARCHAR(256) NOT NULL
  );
  CREATE TABLE IF NOT EXISTS jokes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(256) NOT NULL,
    source VARCHAR(256) NOT NULL,
    profile_id INTEGER NOT NULL REFERENCES profiles(id)
  );
  CREATE TABLE IF NOT EXISTS ratings (
    id SERIAL PRIMARY KEY,
    score INTEGER, 
    joke_id INTEGER NOT NULL REFERENCES jokes(id),
    profile_id INTEGER NOT NULL REFERENCES profiles(id)
  );
`)
  .then(
    () => console.log('create tables complete'),
    err => console.log(err)
  )
  .then(() => {
    client.end();
  });