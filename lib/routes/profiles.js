const express = require('express');
const client = require('../db-client');
const Router = express.Router;
const router = Router(); //eslint-disable-line new-cap

router 
  .get('/', (req, res) => {
    client.query(`
      SELECT
        username 
        FROM profiles
      `,
    )
      .then(result => {
        res.json(result.rows);
      });
  });




module.exports = router;